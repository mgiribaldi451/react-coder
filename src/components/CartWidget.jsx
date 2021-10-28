import { useCartContext } from "./CartContext";
import { GiShoppingCart } from "react-icons/gi";

const CartWidget = () => {
    const { iconCart } = useCartContext()
    let cant = iconCart();
    //Render condicional para mostrar el cart si no esta vacio
    return (
        <>
            {cant > 0 &&
                <div>
                    <div className="btn-finish btn-cart"><span className="texto">{cant}</span></div>
                    <div className="btn-next"><GiShoppingCart size={40} color='white' className="cart" /></div>
                </div>
            }
        </>
    )
}

export default CartWidget;