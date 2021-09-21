import Item from "./Item";

const ItemList = ({producto}) => {


    return (
        <>
            {producto.map(prod => <Item key={prod.nombre} obj={prod} />)}
        </>

    )
}


export default ItemList;