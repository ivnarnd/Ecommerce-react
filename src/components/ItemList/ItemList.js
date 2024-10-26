import Item from "../Item/Item";

let ItemList = ({products})=> {
   return(
    <ul>
        {products.map((product)=>{
            return(<Item key={product.id} product = {product}/>); 
        })}
    </ul>
   )

}
export default ItemList;