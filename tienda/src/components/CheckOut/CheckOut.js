import {useState,useContext, useEffect} from 'react';
import FormUser from '../FormUser/FormUser';
import { CartContext } from '../../context/CartContext';
import{getFirestore,collection,addDoc} from 'firebase/firestore';
const CheckOut = ()=>{

    const [id, setId] = useState(false);
    const {cart,totalPrice} = useContext(CartContext);
    const [form, setForm] = useState({
        fullname: '',
        email: '',
        phone: '',
    });
    const [order,setOrder] = useState({
         buyer:{},
         items:[],
         total:0,
         date:'',
         generate:false
     });
    
    const submitHandler = (e) => {
        e.preventDefault();
        setOrder({buyer:{...form},items:cart,total:totalPrice(),date:new Date(),generate:true});
    };
    const finishHandler =()=>{
        const db = getFirestore();
        const orderCollection = collection(db,'orders');
        addDoc(orderCollection, order).then((snapshot) => setId(snapshot.id));
    }
    useEffect(()=>{
    if(id){
        window.location.href='/';
    }
    },[id])
    return(
        <>
            <h2>CheckOut</h2>
            {!order.generate?<FormUser submitHandler={submitHandler} form={form} setForm={setForm}/>
            :
             <button onClick={finishHandler}>Finalizar Compra</button>}
        </>
    );
}
export default CheckOut;