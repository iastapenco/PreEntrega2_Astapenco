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

function añadirArticulo(x) {
    articulosSeleccionados.push(x);
};

function obtenerArticulo() {
    confirm("A continuación seleccione el número correspondiente al artículo que desea calcularle el descuento");
    let seleccion = prompt("1:pantalón jeans, 2:pantalón de vestir, 3:remera, 4:buzo, 5:camisa, 6:medias");
    if (seleccion == 1)  {
     return "pantalón jeans";
    }else if (seleccion == 2) {
        return "pantalón de vestir";
    }else if (seleccion == 3){
        return "remera";
    }else if (seleccion == 4) {
        return "buzo";
    }else if (seleccion == 5) {
        return "camisa";
    }else if (seleccion == 6) {
        return "medias";
    }else{
        alert("El dato ingresado no es correcto");
        obtenerArticulo();
    }
};

alert("El simulador de descuentos le aplicará un 10% de descuento al primer artículo que seleccione de los disponibles"+";"+
 "un descuento de 20% al segundo artículo y 30% de descuento al tercero");

for(let i = 0; i <3; i++) {
    const nombreArticulo = obtenerArticulo();
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
alert(`El descuento total que se aplicará a su compra es de: $ ${descuentoTotal}`);

let preciosSinDescuento = 0;
preciosSeleccionados.forEach((precio) => {
    preciosSinDescuento += (precio);
})
alert(`El total a pagar será de $ ${preciosSinDescuento - descuentoTotal}`);