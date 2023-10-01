import {createContext, useState } from "react";

export const CartContext = createContext({
    cart:[]
});

export const CartProvider = ({children})=>{

    const [cart,setCart]=useState([]);
    
    const isInCart = (itemId) =>{
        return cart.findIndex((prod)=>prod.id === itemId);
    }
    const addItem = (item,quantity) =>{
        const index = isInCart(item.id);
        if(index === -1){
            setCart(prev=>[...prev,{...item,quantity}]);
        }else{
            cart[index].quantity+=quantity;
        }
    }
    const removeItem = (itemId)=>{
        const cartUpdate = cart.filter(prod=>prod.id!==itemId);
        setCart(cartUpdate);
    }
    const clearCart = ()=>{
        setCart([]);
    }
    const totalItems = ()=>{
       const totalItemsCount =  cart.reduce((acum,item)=>{return acum+item.quantity},0);
       return totalItemsCount;
    }
    const totalPrice = ()=>{
        return cart.reduce((acum,item)=>{return acum+(item.quantity*item.price)},0);
    }
    return(
        <CartContext.Provider value={{cart,addItem,removeItem,clearCart,totalItems,totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

