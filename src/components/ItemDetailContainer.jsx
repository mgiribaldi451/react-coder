import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../services/getFirbase";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id}=useParams()
  
   useEffect(()=>{
        const dbQuery=getFirestore();
        dbQuery.collection('productos').doc(id).get()
        .then(resp=>{
            setProducto({id: id , ...resp.data()})
        })
        .catch(error => console.log(error))
   
    },[id])
   
    return (
        <>
           <ItemDetail obj={producto}/>
        </>
    )
}

export default ItemDetailContainer