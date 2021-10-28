import {useState, createContext, useContext } from 'react'

const cartContext= createContext([])

export const useCartContext = () => useContext(cartContext) 


export default function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState([])


    const addToCart = (item, quantity) => {
        let buscar= item.id
        let index = cartList.findIndex((i) => i.item.id === buscar)
 
          if (index > -1) {
            const oldQy = cartList[index].quantity
            quantity+=oldQy
            cartList[index].quantity=quantity
            let arr=cartList
            setCartList(arr)
            
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

            return cartList.length
        }


        const precioTotal =()=>{
            return cartList.reduce((acum, valor)=>(acum + (valor.quantity * valor.item.precio)), 0) 
        }

    function borrarLista() {
        setCartList([])
    }


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
