class Articulo {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const articulos = [
    new Articulo("pantalón jeans", 2000),
    new Articulo("pantalón de vestir", 2500),
    new Articulo("remera", 900),
    new Articulo("buzo", 1200),
    new Articulo("camisa", 1600),
    new Articulo("medias", 300),
]

const articulosSeleccionados = [];
const descuentosFinales = [];
let precio1;
let precio2;
let precio3;
let nombreArticulo;

function añadirArticulo(x) {
    articulosSeleccionados.push(x);
};

function obtenerArticulo() {
    confirm("A continuación seleccione el número correspondiente al artículo que desea calcularle el descuento");
    let seleccion = prompt("1:pantalón jeans, 2:pantalón de vestir, 3:remera, 4:buzo, 5:camisa, 6:medias");
    if (seleccion == 1)  {
     nombreArticulo = "pantalón jeans";
    }else if (seleccion == 2) {
        nombreArticulo = "pantalón de vestir";
    }else if (seleccion == 3){
        nombreArticulo = "remera";
    }else if (seleccion == 4) {
        nombreArticulo = "buzo";
    }else if (seleccion == 5) {
        nombreArticulo = "camisa";
    }else if (seleccion == 6) {
        nombreArticulo = "medias";
    }else{
        alert("El dato ingresado no es correcto");
        obtenerArticulo();
    }
};

for(let i = 0; i <3; i++) {
    obtenerArticulo();
    const articulo1 =  articulos.find(articulo => articulo.nombre == nombreArticulo);

    añadirArticulo(articulo1);
}

for (let i = 0; i < articulosSeleccionados.length; i++) {
    const elemento = articulosSeleccionados[i];
    console.log(elemento);
}

console.log(articulosSeleccionados);

const preciosSeleccionados = articulosSeleccionados.map(art=> art.precio);
console.log(preciosSeleccionados);

preciosSeleccionados.forEach((art, i) => {
    let descuentos = 0;
    descuentos += Math.round(0.1 * (i + 1) * art);
    return descuentosFinales.push(descuentos);

});

console.log(descuentosFinales);

let descuentoTotal = 0;
descuentosFinales.forEach((descuento) => {

    descuentoTotal += descuento;
})
console.log(`El descuento total que se aplicará a su compra es de: $ ${descuentoTotal}`);

let preciosSinDescuento = 0;
preciosSeleccionados.forEach((precio) => {
    preciosSinDescuento += (precio);
})
console.log(`El total a pagar será de $ ${preciosSinDescuento - descuentoTotal}`);