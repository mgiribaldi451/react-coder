import Button from "@restart/ui/esm/Button";
import Card from 'react-bootstrap/Card'


const Item = ({ obj }) => {
    console.log(obj)

    return (
        
            <div  className="prueba">
                <Card className='Card w-30'>
                    <Card.Body>
                        <Card.Title> {obj.nombre} </Card.Title>

                        <img src={obj.url} className="w-25" alt={obj.nombre} />< br/>
                        <span>Precio {obj.precio}</span>

                        <Card.Footer>
                            <Button class="btn btn-outline-primary btn-block" variant="primary">Detalles</Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </div>
        
    )
}


export default Item;



