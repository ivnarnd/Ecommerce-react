const products = [
    {"id":1,"title":"Budín de Manzana","description":"Delicioso budín de manzana hecho con ingredientes frescos.","price":250,"thumbnail":"https://www.lanacion.com.ar/resizer/pn1X0BalFDGj2SADFaZ0tSs8w9E=/880x586/filters:format(webp):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/VBPIQHFHZ5GDPE7HNIX6RX5R74.jpg","code":"BUD001","stock":20,"status":true,"category":"Repostería"},
    {"id":3,"title":"Alfajor de Dulce de Leche","description":"Clásico alfajor relleno de dulce de leche y bañado en chocolate.","price":120,"thumbnail":"https://supermercadoscomodin.com/wp-content/uploads/2019/11/Supermercados-comodin-receta-entrada-34.jpg","code":"ALF003","stock":30,"status":true,"category":"Repostería"},
    {"id":4,"title":"Tarta de Frutillas","description":"Deliciosa tarta rellena de frutillas frescas y crema.","price":280,"thumbnail":"https://assets.unileversolutions.com/recipes-v2/240732.jpg?imwidth=2000","code":"TAR004","stock":10,"status":true,"category":"Repostería"},
    {"id":5,"title":"Cupcake de Vainilla","description":"Pequeño cupcake de vainilla con decoración colorida.","price":50,"thumbnail":"https://bakeitwithlove.com/wp-content/uploads/2022/05/Vanilla-Bean-Cupcakes-sq.jpg.webp","code":"CUP005","stock":50,"status":true,"category":"Repostería"},
    {"id":6,"title":"Croissant de Chocolate","description":"Crujiente croissant relleno de chocolate suave.","price":150,"thumbnail":"https://okdiario.com/img/2019/01/29/croissant-con-chocolate-655x368.jpg","code":"CRO006","stock":25,"status":true,"category":"Desayuno"},
    {"id":7,"title":"Pastel de Zanahoria","description":"Pastel esponjoso de zanahoria con nueces y frosting de queso crema.","price":200,"thumbnail":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2018%2F01%2F30%2Fpastel-de-zanahoria-con-nuez-2000.jpg","code":"PAS007","stock":18,"status":true,"category":"Postres"},
    {"id":8,"title":"Galletas de Avena y Pasas","description":"Galletas caseras con avena y pasas, perfectas para la merienda.","price":80,"thumbnail":"https://d36fw6y2wq3bat.cloudfront.net/recipes/galletas-de-avena-y-pasas-by-naturitas/900/galletas-de-avena-y-pasas-by-naturitas_version_1685479813.jpg","code":"GAL008","stock":40,"status":true,"category":"Merienda"},
    {"id":9,"title":"Éclair de Café","description":"Éclair relleno de crema de café y glaseado de chocolate.","price":220,"thumbnail":"https://4.bp.blogspot.com/-QCfWcYcoh_E/V1pq6WywRFI/AAAAAAAAERw/ddT4F9GTMdIHG2LBX2B2vb0Px7tpmiBTwCLcB/s1600/eclairs-cafe-1.jpg","code":"ECL009","stock":12,"status":true,"category":"Repostería"},
    {"id":10,"title":"Tiramisú","description":"Clásico tiramisú italiano con capas de café y crema de mascarpone.","price":280,"thumbnail":"https://img2.rtve.es/v/5558860?w=1600&preview=1587055647280.jpg","code":"TIR010","stock":8,"status":true,"category":"Postres"}
]

let getProducts = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(products);
    },"2000");
});

export default getProducts;