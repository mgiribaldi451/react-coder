import { useCartContext } from "./CartContext";
import { GiShoppingCart } from "react-icons/gi";

const CartWidget = () => {
    const { iconCart } = useCartContext()
    let cant=iconCart();
    return (
        <>

            <span className="texto">{cant}</span><GiShoppingCart size={40} color='white' className="cart" >

            <span className="texto">{cant}</span>
        </GiShoppingCart>

        </>
    )
}

export default CartWidget;