import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {getFirestore,collection, getDocs, query, where} from 'firebase/firestore';

function ItemListContainer({greeting}) {
    const [products,setProducts] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = collection(db,'item');
        const petition = id?query(itemsCollection,where('category','==',id)):itemsCollection;
        getDocs(petition).then(snapshot =>{
            const items = snapshot.docs.map((doc)=>({id:doc.id,...doc.data()}));
            setProducts(items);
        });
    },[id]);

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer;