import React from 'react'
import { useState } from "react";
import { useCartContext } from "./CartContext";
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import  firebase  from 'firebase'
import 'firebase/firestore'
import { getFirestore } from '../services/getFirbase'




const Cart = () => {

    const [ formData, setFormData ] = useState({
        nombre: '',
        telefono: '',
        email: ''
    })

    const { cartList, deleteFromCart, borrarLista, precioTotal } = useCartContext()
    let precio = precioTotal();

    const handleOnSubmit = (e) =>{        
        e.preventDefault()        
        let orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate( new Date() )
        
        orden.buyer = formData
        
        orden.total = precioTotal()
        
        orden.items = cartList.map(cartItem => {
            const id = cartItem.item.id;
            const nombre = cartItem.item.nombre;
            const precio = cartItem.item.precio * cartItem.quantity;
            
            return {id, nombre, precio}   
        })


        const db = getFirestore()
        db.collection('ordenes').add(orden)
        .then(resp => alert(resp.id))
        .catch(err=> console.log(err))
        .finally(()=>
            setFormData({
                nombre: '',
                telefono: '',
                email: ''
            }) ,
            borrarLista()
        )
            
            
        const itemsToUpdate = db.collection('productos').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.item.id)
        )
            
        const batch = db.batch();
            
        

        //update del stock postcompra
        
        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(item => item.item.id === docSnapshot.id).quantity
                })
            })

            batch.commit().then(res =>{
                console.log('resultado batch:', res)
            })
        })
        
    }

    function handleOnChange(e) {
        console.log(e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
      
        })


    }

    console.log(formData);

    return (
        <div className="prueba">
            <center>
                {cartList.map(item => <div className=" items" key={item.item.id}>
                    {/*Render Cart Content*/}

                    <Card className='Card w-30 bg-secondary bg-card'>
                        <Card.Body>
                            <Card.Title> {item.item.nombre} </Card.Title>

                            <img src={item.item.imageID} className="w-25" alt={item.item.nombre} />< br />
                            <span>Precio {item.item.precio}</span><br />
                            <span>Cantidad de unidades {item.quantity}</span><br />
                            <Card.Footer>

                                <button className="btn btn-outline-info btn-block" variant="primary" onClick={() => deleteFromCart(item)} >Quitar del carrito</button>

                            </Card.Footer>
                        </Card.Body>
                    </Card>
                    

                </div>)}
                {/*render condicional para el render de cart*/}
                {cartList.length > 0 ? <>
                    <button className="btn btn-outline-info btn-block" variant="primary" onClick={() => {

                        alert("Comprado")
                    }} >Comprar ${precio} </button>
                    <button className="btn btn-outline-info btn-block" variant="primary" onClick={() => {
                        borrarLista();


                    }} >Vaciar Carrito</button>
                    <Link to="/">
                        <button className="btn btn-outline-info btn-block" variant="primary">Seguir comprando </button>
                    </Link>
                    <form
                        onSubmit={handleOnSubmit}
                        onChange={handleOnChange}
                    >
                        <input
                            type='text'
                            placeholder='ingrese el nombre'
                            name='nombre'
                            value={formData.nombre}
                            
                        />
                        <input
                            type='text'
                            placeholder='ingrese el nro de tel'
                            name='telefono'
                            value={formData.telefono}
                            

                        />
                        <input
                            type='text'
                            placeholder='ingrese el email'
                            name='email'
                            value={formData.email}
                        />
                        <input
                            type='text'
                            placeholder='Confirme el mail '
                            name='email2'
                        />
                        <button>Terminar Compra</button>
                    </form>
                </>


                    :
                    <>
                        <span className="texto"> El Carro esta vacio</span><br />
                        <Link to="/">
                            <button className="btn btn-outline-info btn-block" variant="primary">Seguir comprando </button>
                        </Link>
                    </>
                }
            </center>

        </div>
    )
}

export default Cart

