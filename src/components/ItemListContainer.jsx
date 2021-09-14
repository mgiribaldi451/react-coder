
import ItemCount from "./ItemCount";
import ItemLista from "./ItemList";


const ItemList = ({ greeting }) => {


    return (

        <>

            <h1 className="blanco">{greeting}</h1>
            <div className=" container items">
                <ItemLista />
            </div>
            <ItemCount className="centrado" stock="5" initial="1" />

        </>

    )
}

export default ItemList;