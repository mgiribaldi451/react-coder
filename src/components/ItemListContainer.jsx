import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemLista from "./ItemList";
import { getProductos } from "../utils/Mock"



const ItemList = ({ greeting }) => {
    const [producto, setProducto] = useState([]);
    const { idCat } = useParams()
    const [loading, setLoading] = useState(true)
    
    
    useEffect(()=>{

        if(greeting){
        getProductos
        .then(resp=>{
            setProducto(resp.filter(e=>e.tipo===greeting))
        }

        )
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))  
    }
    else if (idCat){
        getProductos
        .then(resp=>{
            setProducto(resp.filter(e=>e.tipo===idCat))
        }

        )
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))  
    }
    else{
        getProductos
        .then(resp=>{
            setProducto(resp)
        }

        )
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))  
    }
    }, [greeting , idCat])

    return (
        <>

            <div className=" container items">
                { loading ? <h2>Cargando...</h2> :   <ItemLista producto={producto} />  }  
            </div>
        </>

    )
}

export default ItemList;