import { useEffect } from "react";
import { useState } from "react";
import getProducts from "../../asyncMock";

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
        </div>
    )
}
export default ItemListContainer;