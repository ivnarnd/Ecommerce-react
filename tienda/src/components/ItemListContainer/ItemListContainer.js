import { useEffect } from "react";
import { useState } from "react";
import getProducts from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({greeting}) {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        getProducts
        .then(resp=>setProducts(resp))
        .catch(error => console.error(error));
    },[]);
    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer;