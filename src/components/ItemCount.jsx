import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useCartContext } from "./CartContext";

const ItemCount = ({ initial, obj }) => {
    const [count, setCount] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(true)
    const { addToCart } = useCartContext()

    const addItem = () => {

        if (count >= obj.stock) {
            setCount(5);
        }
        else {
            setCount(parseInt(count) + 1);
        }

    }

    const restarItem = () => {
        if (count <= 1) {
            setCount(1);
        } else {
            setCount(parseInt(count) - 1);
        }
    }

    const onAdd = (count) => {
        addToCart(obj, count)
    }

    return (
        <div className="btn-center">

            <div className="btn-count">
                <button className="btn btn-outline-info btn-block" onClick={restarItem}> - </button>
                <span > {count} </span>
                <button className="btn btn-outline-info btn-block" onClick={addItem}> + </button>
            </div>

            {cambiarBoton ?
                <div>

                    <button className="btn btn-outline-info btn-block" variant="primary" onClick={() => {
                        onAdd(count)
                        setCambiarBoton(false)
                    }}>Agregar Al carrito</button>
                </div>
                :
                <div>
                    <div className="btn-finish">
                        <Link to="/cart" >
                            <button className="btn btn-outline-info btn-block" variant="primary">Terminar Compra</button>
                        </Link>
                    </div>
                    <div className="btn-next">
                        <Link to="/" >
                            <button className="btn btn-outline-info btn-block" variant="primary">Seguir Comprando</button>
                        </Link>
                    </div>
                </div>

            }

        </div>
    )
}

export default ItemCount;