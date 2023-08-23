import { useEffect, useState } from "react";
import getProducts from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

let ItemDetailContainer = ()=>{
    const [product,setProduct] = useState({});
    useEffect(()=>{
        getProducts.then(products => setProduct(products.filter((prod)=>prod.id===1)))
    },[]);
    return(
        <div className="container col-xxl-8 px-4 py-5">
            <ItemDetail product={product[0]}/>
        </div>
    )

}
export default ItemDetailContainer;