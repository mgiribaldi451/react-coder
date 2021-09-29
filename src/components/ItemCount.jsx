import React, { useState } from "react";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { Link } from 'react-router-dom'
import { useCartContext } from "./CartContext";

const ItemCount = ({ stock, initial, obj }) => {
    const [count, setCount] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(true)
    const {addToCart} = useCartContext()
    stock = parseInt(stock);
    const addItem = () => {

        if (count >= stock) {
            setCount(5);
        }
        else {
            setCount(parseInt(count) + 1);
        }

    }

    const restarItem = () => {
        if (count <= 1) {
            setCount(1);
        }
        else {
            setCount(parseInt(count) - 1);
        }
    }

    const onAdd=(count)=>{
 
        addToCart(obj, count)
        
         
    }



    return (
        <>
            <MdRemoveCircle size={30} color='blue' onClick={restarItem}></MdRemoveCircle>
            <span > {count} </span>
            <MdAddCircle size={30} color='blue' onClick={addItem}> </MdAddCircle>
            <br />
            {/*<button className="btn btn-outline-primary btn-block" onClick={enviar}>Agregar</button>*/}
            {cambiarBoton ?
                <button className="btn btn-outline-primary btn-block" variant="primary" onClick={()=>{
                    onAdd(count)
                    setCambiarBoton(false)
                }}>Agregar Al carrito</button>
                :
                <div>
                    <Link to="/cart" >
                        <button className="btn btn-outline-primary btn-block" variant="primary">Terminar Compra</button>
                    </Link>
                    <Link to="/" >
                        <button className="btn btn-outline-primary btn-block" variant="primary">Seguir Comprando</button>
                    </Link>
                </div>

            }



        </>
    )
}

export default ItemCount;