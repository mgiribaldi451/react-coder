import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import Card from 'react-bootstrap/Card'
import ItemCount from './ItemCount'


const Item = ({ obj }) => {
    
    const [carrito, setCarrito] = useState([])
    
    const addToCart=(item)=> {
        setCarrito([...carrito, item])
    }
    

    const onAdd=(cant)=>{
        addToCart({item: obj, cantidad: cant})
         
    } 


    return (
        
            <div  className="prueba">
                <Card className='Card w-30'>
                    <Card.Body>
                        <Card.Title> Soy ItemDetail </Card.Title>
                        <span>Producto: {obj.nombre}</span>< br/>
                        <img src={obj.url} className="w-25" alt={obj.nombre} />< br/>
                        <span>Precio {obj.precio}</span>< br/>
                        <span>tipo {obj.tipo}</span>

                        <Card.Footer>
                            {/*<Button className="btn btn-outline-primary btn-block" variant="primary">Detalles</Button>*/}
                            <ItemCount initial={1} stock={5} onAdd={onAdd} />  
                            
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </div>
        
    )
}


export default Item;
