import ItemCount from './ItemCount'

const Item = ({ obj }) => {
    return (
        <div className='item-detail-container'>
            <div className="card-container">
                <div className="card-img">
                    <img src={obj.imageID} width={250} height={250} alt={obj.nombre} />
                </div>
                <div className="card-text">
                    <div className="card-title"><span> Producto {obj.nombre} </span></div>
                    <div className="price-title"><span>Precio ${obj.precio}</span></div>
                    <div className="stock-title"><span>Stock: {obj.stock}</span></div>
                </div>
                <div className="card-btn">
                    <ItemCount initial={1} obj={obj} />
                </div>
            </div>
        </div>

    )
}


export default Item;
