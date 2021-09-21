import Button from "@restart/ui/esm/Button";
import Card from 'react-bootstrap/Card'
import ItemCount from "./ItemCount";


const Item = ({ obj }) => {


    return (
        
            <div  className="prueba">
                <Card className='Card w-30'>
                    <Card.Body>
                        <Card.Title> {obj.nombre} </Card.Title>

                        <img src={obj.url} className="w-25" alt={obj.nombre} />< br/>
                        <span>Precio {obj.precio}</span><br/>
                        <ItemCount stock="5" initial="1"/>
                        <Card.Footer>
                            <Button className="btn btn-outline-primary btn-block" variant="primary">Detalles</Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </div>
        
    )
}


export default Item;



