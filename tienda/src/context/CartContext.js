import React, { useState } from "react";
const CartContext = React.createContext({cart:[]});
const CartProvider = ({children})=>{
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
    return(
        <CartContext.Provider value={{cart,addItem,removeItem,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;