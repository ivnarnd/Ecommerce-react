import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function CardWidget() {
    const {totalItems} = useContext(CartContext);
    return(
        (totalItems() > 0) && <Link to='/cart'><p>🛒</p>{totalItems()}</Link>
        
    );
}
export default CardWidget;