import {createContext, useState } from "react";

export const CartContext = createContext({
    cart:[]
});

export const CartProvider = ({children})=>{

    const [cart,setCart]=useState([]);
    
    const isInCart = (itemId) =>{
        return cart.some((prod)=>prod.id === itemId);
    }
    const addItem = (item,quantity) =>{
        if(!isInCart(item.id)){
            setCart(prev=>[...prev,{...item,quantity}]);
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
       console.log(totalItemsCount);
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

