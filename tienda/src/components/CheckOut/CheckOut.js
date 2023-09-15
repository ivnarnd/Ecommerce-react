import {useState,useContext} from 'react';
import FormUser from '../FormUser/FormUser';
import { CartContext } from '../../context/CartContext';
import{getFirestore,collection,addDoc} from 'firebase/firestore';
const CheckOut = ()=>{
    const [id, setId] = useState('');
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
         date:''
     });
    
    const submitHandler = (e) => {
        e.preventDefault();
        setOrder(...form,cart,totalPrice,new Date());
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order).then((snapshot) => setId(snapshot.id));
      };
    return(
        <>
            <h2>CheckOut</h2>
            {id!==''?<FormUser submitHandler={submitHandler} form={form} setForm={setForm}></FormUser>:<div>La compra se ha generado correctamente con id: {id}</div>}
            
        </>
    );
}
export default CheckOut;