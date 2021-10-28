import Item from "./Item";

const ItemList = ({producto}) => {

    return (
        <div className="container items">
            {producto.map(prod => <Item key={prod.nombre} obj={prod} />)}
        </div>

    )
}

export default ItemList;