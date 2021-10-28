import Button from "@restart/ui/esm/Button";
import { Link } from 'react-router-dom';


const Item = ({ obj }) => {

    //Render Item
    return (
        <div className="card-container ">
            <div className="card-img">
                <img src={obj.imageID} width={250} height={250} alt={obj.nombre} />
            </div>
            <div className="card-text">
                <div className="card-title"><span> {obj.nombre} </span></div>
                <div className="price-title"><span>Precio ${obj.precio}</span></div>
                <div className="stock-title"><span>Stock: {obj.stock}</span></div>
            </div>
            { obj.stock>0 ?
            <div className="card-btn">
                <Link to={`/detalle/${obj.id}`} >
                    <Button className="btn btn-outline-info btn-block btn-style" variant="primary">Detalles</Button>
                </Link>
            </div>:
            <h2>No hay stock</h2>
            }
        </div>
    )
}

export default Item;