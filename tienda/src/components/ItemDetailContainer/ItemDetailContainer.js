import { useEffect, useState } from "react";
import {getProductsbyId} from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

let ItemDetailContainer = ()=>{
    const [product,setProduct] = useState({});
    const {itemId}=useParams();
    useEffect(()=>{
        getProductsbyId(itemId).then(product => setProduct(product))
    },[itemId]);
    
    return(
        <div className="container col-xxl-8 px-4 py-5">
            <ItemDetail product={product}/>
        </div>
    )

}
export default ItemDetailContainer;