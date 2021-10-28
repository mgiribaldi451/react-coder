import React from 'react'
import { useState } from "react";
import { useCartContext } from "./CartContext";
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import 'firebase/firestore'
import { getFirestore } from '../services/getFirbase'
import validator from 'validator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



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
        if (e.target.name === 'email') {
            if (!validator.isEmail(e.target.value)) {
                e.target.style.backgroundColor = 'rgba(148, 62, 47, 0.616)'
            } else {
                e.target.style.backgroundColor = 'white'

            }
        }
        if (e.target.name === 'email2') {
            if (e.target.value !== formData.email) {
                e.target.style.backgroundColor = 'rgba(148, 62, 47, 0.616)'
            } else {
                e.target.style.backgroundColor = 'white'

            }
        }
    }


    return (
        <div className="container">

            {cartList.map(item => <div className="content-items" key={item.item.id}>

                <div className='list-items'>
                    <div className="list-width"><img src={item.item.imageID} width={100} height={100} alt={item.item.nombre} /></div>
                    <div className="card-title list-width"><span>Producto: {item.item.nombre} </span></div>
                    <div className="stock-title list-width"><span>Cantidad de unidades: {item.quantity}</span></div>
                    <div className="price-title list-width"><span>Precio ${item.item.precio}</span></div>
                    <div className="list-width">
                        <FontAwesomeIcon className='icon-hover' icon={faTrash} size='2x' onClick={() => deleteFromCart(item)} />
                    </div>
                </div>


            </div>)}
            {/*render condicional para el render de cart*/}
            {cartList.length > 0 ? <div className='btn-footer'>
                <div className='btn-buy btn-width-footer'>
                    <button className="btn btn-outline-info btn-block" variant="primary" onClick={() => {
                        setForm(true)
                    }} >Comprar ${precio} </button>
                </div>
                <div className='btn-clean btn-width-footer'>
                    <button className="btn btn-outline-info btn-block" variant="primary" onClick={() => {
                        borrarLista();
                        setForm(false)
                    }} >Vaciar Carrito</button>
                </div>
                <div className='btn-back btn-width-footer'>
                    <Link to="/">
                        <button className="btn btn-outline-info btn-block" variant="primary">Seguir comprando </button>
                    </Link>
                </div>
            </div>
                :
                <>
                    <div className='btn-footer-clean'>
                        <div className='text-clean'><span className="texto"> El Carro esta vacio</span></div>
                        <div className='btn-back btn-width-footer-clean'>
                            <Link to="/">
                                <button className="btn btn-outline-info btn-block" variant="primary">Seguir comprando </button>
                            </Link>
                        </div>
                    </div>
                </>}
            {formulario ? <div className='item-detail-container'>
                <form
                    onSubmit={handleOnSubmit}
                    onChange={handleOnChange}
                >
                    <div className='form-style'>

                        <input
                            type='text'
                            placeholder='ingrese el nombre'
                            name='nombre'
                            value={formData.nombre}
                            required
                        /><br />
                        <input
                            type='number'
                            placeholder='ingrese el nro de tel'
                            name='telefono'
                            value={formData.telefono}
                            required
                        /><br />
                        <input
                            type='text'
                            placeholder='ingrese el email'
                            name='email'
                            value={formData.email}
                            required
                        /><br />
                        <input
                            type='text'
                            placeholder='Confirme el mail'
                            name='email2'
                            required
                        /><br />

                    </div>
                    <div className='btn-footer'>
                        <button type='submit' className="btn btn-outline-info btn-block btn-margin">Terminar Compra</button><br />
                        <button className="btn btn-outline-info btn-block btn-margin" onClick={() => {
                            setForm(false)
                        }}>Cancelar Compra</button>
                    </div>
                </form>
            </div> : <></>}
        </div>

    )
}

export default Cart

