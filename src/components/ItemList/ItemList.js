import Item from "../Item/Item";

let ItemList = ({products})=> {
   return(
    <ul className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product)=>{
            return(<Item key={product.id} product = {product}/>); 
        })}
    </ul>
   )

}
export default ItemList;