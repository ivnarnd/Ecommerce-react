import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

let ItemDetailContainer = ()=>{
    const [product,setProduct] = useState({});
    const {itemId}=useParams();
    useEffect(()=>{
        const db = getFirestore();
        const item = doc(db,'item',itemId);
        getDoc(item).then((snapshot)=>{
            if(snapshot.exists()){
                setProduct({id:snapshot.id,...snapshot.data()})
            }
        });
    },[itemId]);
    
    return(
        <div className="container col-xxl-8 px-4 py-5">
            <ItemDetail product={product}/>
        </div>
    )

}
export default ItemDetailContainer;