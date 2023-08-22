const products = [
    {"id":1,"title":"Budín de Manzana","description":"Delicioso budín de manzana hecho con ingredientes frescos.","price":250,"thumbnail":"sin imagen","code":"BUD001","stock":20,"status":true,"category":"Repostería"},
    {"id":3,"title":"Alfajor de Dulce de Leche","description":"Clásico alfajor relleno de dulce de leche y bañado en chocolate.","price":120,"thumbnail":"sin imagen","code":"ALF003","stock":30,"status":true,"category":"Repostería"},
    {"id":4,"title":"Tarta de Frutillas","description":"Deliciosa tarta rellena de frutillas frescas y crema.","price":280,"thumbnail":"sin imagen","code":"TAR004","stock":10,"status":true,"category":"Repostería"},
    {"id":5,"title":"Cupcake de Vainilla","description":"Pequeño cupcake de vainilla con decoración colorida.","price":50,"thumbnail":"sin imagen","code":"CUP005","stock":50,"status":true,"category":"Repostería"},
    {"id":6,"title":"Croissant de Chocolate","description":"Crujiente croissant relleno de chocolate suave.","price":150,"thumbnail":"sin imagen","code":"CRO006","stock":25,"status":true,"category":"Desayuno"},
    {"id":7,"title":"Pastel de Zanahoria","description":"Pastel esponjoso de zanahoria con nueces y frosting de queso crema.","price":200,"thumbnail":"sin imagen","code":"PAS007","stock":18,"status":true,"category":"Postres"},
    {"id":8,"title":"Galletas de Avena y Pasas","description":"Galletas caseras con avena y pasas, perfectas para la merienda.","price":80,"thumbnail":"sin imagen","code":"GAL008","stock":40,"status":true,"category":"Merienda"},
    {"id":9,"title":"Éclair de Café","description":"Éclair relleno de crema de café y glaseado de chocolate.","price":220,"thumbnail":"sin imagen","code":"ECL009","stock":12,"status":true,"category":"Repostería"},
    {"id":10,"title":"Tiramisú","description":"Clásico tiramisú italiano con capas de café y crema de mascarpone.","price":280,"thumbnail":"sin imagen","code":"TIR010","stock":8,"status":true,"category":"Postres"}
]

let getProducts = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(products);
    },"2000");
});

export default getProducts;