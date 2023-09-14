const CartItem = ({item})=>{
    return(
        <li>
            <h3>{item.title}</h3>
            <h3>cantidad: {item.quantity}</h3>
            <h3>precio: {item.price}</h3>
            <h3>subtotal: ${item.price * item.quantity}</h3>
            <button>X</button>
        </li>
    );
};
export default CartItem;