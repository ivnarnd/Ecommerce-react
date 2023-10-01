import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = ()=>{
    const {cart,clearCart,totalPrice,totalItems,removeItem} = useContext(CartContext);
    if(totalItems()===0){
        return(
            <div>
                <h2>No hay items agregados al Carrito</h2>
                <Link to='/'>Inicio</Link>
            </div>
        )
    }
    return(
        <div>
            <ul>
                {cart.map(item => <CartItem key={item.id} item={item} deleteItem={()=>removeItem(item.id)}/>)}
            </ul>
            <h3>Total:${totalPrice()}</h3>
            <button onClick={clearCart}>Limpiar Carrito</button>
            <Link to='/checkout'>Checkout</Link>
        </div>
    );
};
export default Cart;