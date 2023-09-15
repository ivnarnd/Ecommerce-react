import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CardWidget() {
    const {totalItems} = useContext(CartContext);
    return(
        <div>
            <p>🛒</p>
            {totalItems()}
            
        </div>
    );
}
export default CardWidget;