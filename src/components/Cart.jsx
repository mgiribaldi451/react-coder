import React from 'react'
import  { useState } from "react";
import { useCartContext } from "./CartContext";
import Card from 'react-bootstrap/Card'



const Cart = () => {
    const [vacio, setVacio] = useState(true)
    const { cartList, deleteFromCart, borrarLista, precioTotal} = useCartContext()
    let precio=precioTotal();
    console.log(precio);

    

    return (
        <div>
            <center>
                {cartList.map(item => <div className="prueba" key={item.item.id}>
                    {/*<h2>{item.item.name}</h2>*/}
                    {console.log(item)}
                    <Card className='Card w-30'>
                        <Card.Body>
                            <Card.Title> {item.item.nombre} </Card.Title>

                            <img src={item.item.url} className="w-25" alt={item.item.nombre} />< br />
                            <span>Precio {item.item.precio}</span><br />
                            <span>Cantidad de unidades {item.quantity}</span><br />
                            {/*<ItemCount stock="5" initial="1"/>*/}
                            <Card.Footer>
                            
                                <button className="btn btn-outline-primary btn-block" variant="primary" onClick={() => deleteFromCart(item)} >Quitar del carrito</button>
                                
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </div>)}
                { vacio ? <>
                    <button className="btn btn-outline-primary btn-block" variant="primary" onClick={() => {
                                alert("Comprado")
                }} >Comprar ${precio} </button>
                <button className="btn btn-outline-primary btn-block" variant="primary" onClick={() => {
                    borrarLista();
                    
                    setVacio(false);
                }} >Vaciar Carrito</button></>
                
                 
                :
                
                <span className="texto"> El Carro esta vacio</span>
                }
            </center>

        </div>
    )
}

export default Cart

