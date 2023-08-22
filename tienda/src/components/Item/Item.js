let Item = ({product})=>{
    return(

        <div className="col">
            <div className="card">
            <img src={product.thumbnail} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Stock Disponible: {product.stock}</p>
                <p className="card-text">${product.price}</p>
                <button>Ver Detalle</button>
            </div>
            </div>
        </div>
        
    
    )
}
export default Item;