import Item from "./Item";

const ItemList = ({producto}) => {

    return (
        <div className="items">
            {producto.map(prod => <Item key={prod.nombre} obj={prod} />)}
        </div>

    )
}

export default ItemList;