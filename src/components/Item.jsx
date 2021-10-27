import Button from "@restart/ui/esm/Button";
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'


const Item = ({ obj }) => {

//Render Item
    return (
        
            <div  className="prueba">
                <Card className='Card w-30 bg-secondary bg-card'>
                    <Card.Body>
                        <Card.Title> {obj.nombre} </Card.Title>

                        <img src={obj.imageID} className="w-25" alt={obj.nombre} />< br/>
                        <span>Precio ${obj.precio}</span><br/>
                        <span>Stock: {obj.stock}</span><br/>
                        {/*<ItemCount stock="5" initial="1"/>*/}
                        <Card.Footer>
                        <Link to={`/detalle/${obj.id}`} >
                            <Button className="btn btn-outline-info btn-block" variant="primary">Detalles</Button>
                        </Link>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </div>
        
    )
}

export default Item;




