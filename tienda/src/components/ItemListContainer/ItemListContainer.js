import { useEffect } from "react";
import { useState } from "react";
import {getProducts,getProductsbyCategory} from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({greeting}) {
    const [products,setProducts] = useState([]);
    const {id} = useParams();
    
    useEffect(()=>{
        const petition = id? getProductsbyCategory : getProducts;
        petition(id)
        .then(resp=>setProducts(resp))
        .catch(error => console.error(error));
    },[id]);

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer;