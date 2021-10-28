import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemLista from "./ItemList";
import { getFirestore } from "../services/getFirbase";



const ItemList = () => {
    const [producto, setProducto] = useState([]);
    const { idCat } = useParams()
    const [loading, setLoading] = useState(true)
    
    

    useEffect(()=>{
        const dbQuery=getFirestore();

        if(idCat){
            dbQuery.collection('productos').where('tipo','==',idCat).get()
            .then(resp=>{
                setProducto(resp.docs.map(productos=>({id: productos.id, ...productos.data()})))
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))

        }
        else{
        dbQuery.collection('productos').get()
        .then(resp=>{
            setProducto(resp.docs.map(productos=>({id: productos.id, ...productos.data()})))
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))  
    }

    },[idCat])

    return (
        <>

            <div className=" container items">
                { loading ? <div className="spinner"><h2>Cargando...</h2></div> :   <ItemLista producto={producto} />  }  
            </div>
        </>

    )
}

export default ItemList;