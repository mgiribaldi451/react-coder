import React from 'react'
import { useState } from "react";
import { useCartContext } from "./CartContext";
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import 'firebase/firestore'
import { getFirestore } from '../services/getFirbase'
import validator from 'validator'



const Cart = () => {

    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        email: ''
    })

    const [formulario, setForm] = useState(false)

    const { cartList, deleteFromCart, borrarLista, precioTotal } = useCartContext()
    let precio = precioTotal();

    const handleOnSubmit = (e) => {
        e.preventDefault()
        let orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate(new Date())

        orden.buyer = formData

        orden.total = precioTotal()

        orden.items = cartList.map(cartItem => {
            const id = cartItem.item.id;
            const nombre = cartItem.item.nombre;
            const precio = cartItem.item.precio * cartItem.quantity;

            return { id, nombre, precio }
        })


        const db = getFirestore()
        db.collection('ordenes').add(orden)
            .then(resp => alert(resp.id))
            .catch(err => console.log(err))
            .finally(() =>
                setFormData({
                    nombre: '',
                    telefono: '',
                    email: ''
                }),
                borrarLista()
            )


        const itemsToUpdate = db.collection('productos').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.item.id)
        )

        const batch = db.batch();



        //update del stock postcompra

        itemsToUpdate.get()
            .then(collection => {
                collection.docs.forEach(docSnapshot => {
                    batch.update(docSnapshot.ref, {
                        stock: docSnapshot.data().stock - cartList.find(item => item.item.id === docSnapshot.id).quantity
                    })
                })

                batch.commit().then(res => {
                    console.log('resultado batch:', res)
                })
            })

    }

    function handleOnChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        if (e.target.name==='email'){
            if(!validator.isEmail(e.target.value)){
                e.target.style.backgroundColor='rgba(148, 62, 47, 0.616)'
            }else{
                e.target.style.backgroundColor='white'

            }
        }
        if (e.target.name==='email2'){
            if(e.target.value !== formData.email){
                e.target.style.backgroundColor='rgba(148, 62, 47, 0.616)'
            }else{
                e.target.style.backgroundColor='white'

            }
        }
    }


    return (
        <div className="container items">

            {cartList.map(item => <div className="  items" key={item.item.id}>
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
            {cartList.length > 0 ? <div>
                <button className="btn btn-outline-info btn-block" variant="primary" onClick={() => {

                    setForm(true)
                }} >Comprar ${precio} </button>
                <button className="btn btn-outline-info btn-block" variant="primary" onClick={() => {
                    borrarLista();
                    setForm(false)


                }} >Vaciar Carrito</button>
                <Link to="/">
                    <button className="btn btn-outline-info btn-block" variant="primary">Seguir comprando </button>
                </Link>
            </div>
                :
                <>
                    <span className="texto"> El Carro esta vacio</span><br />
                    <Link to="/">
                        <button className="btn btn-outline-info btn-block" variant="primary">Seguir comprando </button>
                    </Link>
                </>}
            {formulario ? <div>
                <form
                    onSubmit={handleOnSubmit}
                    onChange={handleOnChange}
                >
                    <input
                        type='text'
                        placeholder='ingrese el nombre'
                        name='nombre'
                        value={formData.nombre}
                    /><br/>
                    <input
                        type='number'
                        placeholder='ingrese el nro de tel'
                        name='telefono'
                        value={formData.telefono}
                    /><br/>
                    <input
                        type='text'
                        placeholder='ingrese el email'
                        name='email'
                        value={formData.email}
                    /><br/>
                    <input
                        type='text'
                        placeholder='Confirme el mail'
                        name='email2'
                    /><br/>
                    <button className="btn btn-outline-info btn-block">Terminar Compra</button><br/>
                    <button className="btn btn-outline-info btn-block" onClick={() => {
                        setForm(false)
                    }}>Cancelar Compra</button>
                </form> </div>: <></> }
        </div>
        
    )
}

export default Cart

