const prompt = require('prompt-sync')();

const producto = {
    precio: 0,
    descuento: 0,
    neto: function() {
        return this.precio - (this.precio * (this.descuento / 100));
    }
};

producto.precio = parseFloat(prompt('Ingrese el precio del producto: '));

producto.descuento = parseFloat(prompt('Ingrese el porcentaje de descuento: '));

const precioNeto = producto.neto().toFixed(2);

console.log(`El precio neto del producto es: $${precioNeto}`);