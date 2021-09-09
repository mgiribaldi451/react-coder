
import ItemCount from "./ItemCount";


const ItemList = ({greeting}) => {
   
    
    return (
        <>
        <div>
             
         <h1 className="blanco">{greeting}</h1> 
          <ItemCount className="centrado" stock="5" initial="1"/>
        </div>
        </>
    )
}

export default ItemList;