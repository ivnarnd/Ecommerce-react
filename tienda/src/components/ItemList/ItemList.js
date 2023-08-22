import Item from "../Item/Item";

let ItemList = ({products})=> {
   return(
    <ul className="row row-cols-1 row-cols-md-2 g-4">
        {products.map((product)=>{
            return(<Item product = {product}/>); 
        })}
    </ul>
   )

}
export default ItemList;