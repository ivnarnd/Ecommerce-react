import ItemCount from "../ItemCount/ItemCount";

let ItemDetail=({product})=>{
    const handlerAdd = (quantity)=>{
        console.log('La cantida agregada al producto es: ',quantity);
    }
    return(
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
            <img src={product.thumbnail} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
        </div>
        <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{product.title}</h1>
            <p className="lead">{product.description}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <p className="card-text">Stock Disponible:{product.stock}</p>
                <p className="card-text">Precio: ${product.price}</p>
            </div>
            <ItemCount stock={product.stock} initial={1} onAdd={handlerAdd}></ItemCount>
        </div>
    </div>
    
    )
}
export default ItemDetail;