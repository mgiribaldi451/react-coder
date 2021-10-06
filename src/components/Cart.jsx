import React from 'react'
import { useState } from "react";
import { useCartContext } from "./CartContext";
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'



const Cart = () => {
    const { cartList, deleteFromCart, borrarLista, precioTotal } = useCartContext()
    let precio = precioTotal();



    return (
        <div className="pruba">
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

