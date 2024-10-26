import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {getFirestore,collection, getDocs, query, where} from 'firebase/firestore';

function ItemListContainer() {
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
        <main>
            <section>
                <h3>Tienda</h3>
            </section>
            <section>
                <ItemList products={products}/>
            </section>
    </main>
       
    )
}
export default ItemListContainer;