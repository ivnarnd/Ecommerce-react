import { Link } from "react-router-dom";

let Item = ({product})=>{
    return(

        <li className="col">
            <div className="card">
            <img src={product.thumbnail} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Stock Disponible: {product.stock}</p>
                <p className="card-text">${product.price}</p>
                <Link to={`/item/`+product.id} className="link" >Ver Detalle</Link>
            </div>
            </div>
        </li>
        
    
    )
}
export default Item;