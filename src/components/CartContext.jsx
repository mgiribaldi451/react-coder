import {useState, createContext, useContext } from 'react'

const cartContext= createContext([])

export const useCartContext = () => useContext(cartContext) 


export default function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState([])


    const addToCart = (item, quantity) => {

        //console.log(quantity);

        const index = cartList.findIndex(i => i.id === item.id)
    
          if (index > -1) {
            const oldQy = cartList[index].quantity
    
            setCartList([...cartList, { item, quantity: quantity + oldQy}])
          }
          else {
            setCartList([...cartList, {item, quantity}])
          }
      }

      const deleteFromCart = (item) => {
            
            const deleteProduct = cartList.filter((prod) => prod.item.id !== item.item.id);
        
            setCartList([...deleteProduct]);
        };  


        const iconCart = () => {
            return cartList.reduce( (acum, valor)=> acum + valor.quantity, 0) 
            //return cartList.length
        }


        const precioTotal =()=>{
            return cartList.reduce((acum, valor)=>(acum + (valor.quantity * valor.item.precio)), 0) 
        }

    function borrarLista() {
        setCartList([])
    }







    //console.log(cartList);
    return(
        <cartContext.Provider value={{
            cartList,
            addToCart,
            deleteFromCart,
            iconCart,
            precioTotal,
            borrarLista,
            
        }}>
            {children}
        </cartContext.Provider>
    )
}
