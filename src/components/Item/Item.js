import { Link } from "react-router-dom";

let Item = ({product})=>{
    return(

        <li>
            <div>
            <img src={product.thumbnail} alt="..."/>
            <div>
                <h5>{product.title}</h5>
                <p>{product.description}</p>
                <p>Stock Disponible: {product.stock}</p>
                <p>${product.price}</p>
                <Link to={`/item/`+product.id}>Ver Detalle</Link>
            </div>
            </div>
        </li>
        
    
    )
}
export default Item;