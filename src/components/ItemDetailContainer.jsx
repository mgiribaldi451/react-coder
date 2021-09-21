import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getProductos } from "../utils/Mock";
import { useParams } from "react-router-dom";




const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);

    const {id}=useParams()

    useEffect(() => {
        if(id){
        getProductos
            .then((resp) => {
                 
                let prueba=resp.find(e=>e.id===id)
                
                setProducto(prueba);
            })
            .catch(err => console.log(err))
        }

    }, [id]);
    
    return (
        <>
           <ItemDetail obj={producto}/>
        </>

    )
}

export default ItemDetailContainer