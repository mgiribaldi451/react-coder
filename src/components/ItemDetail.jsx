import Card from 'react-bootstrap/Card'
import ItemCount from './ItemCount'



const Item = ({ obj }) => {
    


    return (
        
            <div  className="prueba">
                <Card className='Card w-30 bg-secondary bg-card'>
                    <Card.Body>
                        <Card.Title> Soy ItemDetail </Card.Title>
                        <span>Producto: {obj.nombre}</span>< br/>
                        <img src={obj.imageID} className="w-25" alt={obj.nombre} />< br/>
                        <span>Precio {obj.precio}</span>< br/>
                        <span>tipo {obj.tipo}</span>

                        <Card.Footer>
                            {/*<Button className="btn btn-outline-primary btn-block" variant="primary">Detalles</Button>*/}
                            <ItemCount initial={1} stock={5} obj={obj} />  
                            
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </div>
        
    )
}


export default Item;
