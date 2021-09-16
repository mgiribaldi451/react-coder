import Button from "@restart/ui/esm/Button";
import Card from 'react-bootstrap/Card'


const Item = ({ obj }) => {

    return (
        
            <div  className="prueba">
                <Card className='Card w-30'>
                    <Card.Body>
                        <Card.Title> Soy ItemDetail </Card.Title>
                        <span>Precio {obj.nombre}</span>< br/>
                        <img src={obj.url} className="w-25" alt={obj.nombre} />< br/>
                        <span>Precio {obj.precio}</span>< br/>
                        <span>Precio {obj.tipo}</span>

                        <Card.Footer>
                            <Button className="btn btn-outline-primary btn-block" variant="primary">Detalles</Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </div>
        
    )
}


export default Item;
