import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import {CartContext} from "../../context/CartContext";

let ItemDetail=({product})=>{
    const [quantityAdded,setQuantityAdd] = useState(0);
    const {addItem} = useContext(CartContext);
    const handlerAdd = (quantity)=>{
        setQuantityAdd(quantity);
        const item = {
            id:product.id,
            title:product.title,
            price:product.price
        };
        addItem(item,quantity);
    }
    return(
    <div>
        <div >
            <img src={product.thumbnail} alt="imagen del producto" />
        </div>
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <div>
                <p>Stock Disponible:{product.stock}</p>
                <p>Precio: ${product.price}</p>
            </div>
            <div>
                {quantityAdded>0?<Link to='/cart'>Terminar Compra</Link>:<ItemCount stock={product.stock} initial={1} onAdd={handlerAdd}></ItemCount>}
            </div>
            
        </div>
    </div>
    
    )
}
export default ItemDetail;