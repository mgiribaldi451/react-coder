import React, { useState } from "react";
import Card from 'react-bootstrap/Card'
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial)
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

    const enviar = () => {
        alert("producto agregado")
    }
    return (
        <>

            <Card className="card" >

                <Card.Body>
                    <Card.Title> Cantidad de productos </Card.Title>
                    <MdRemoveCircle size={30} color='blue' onClick={restarItem}></MdRemoveCircle>
                    <span > {count} </span>
                    <MdAddCircle size={30} color='blue' onClick={addItem}> </MdAddCircle>

                    <br />
                    <br />
                    <button onClick={enviar}>Agregar</button>
                </Card.Body>
            </Card>

        </>
    )
}

export default ItemCount;