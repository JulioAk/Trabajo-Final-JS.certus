
/* definir clase  */
class product {

    /* propiedades de clase */
    _sku = null;
    _name = "Default";
    _price = 0;
    _offert = 0;
    _image = "image/recursos/imagendefalult.png";

    /* contructor de clase*/
    constructor(objtProduct) {
        this._sku = objtProduct.sku;
        this._name = objtProduct.name;
        this._price = objtProduct.price;
        this._offert = objtProduct.offert;

        // Configurar _offert como número
        if (typeof objtProduct.offert === 'number') {
            this._offert = objtProduct.offert;
        } else if (typeof objtProduct.offert === 'string') {
            // Convertir a número si es una cadena de texto
            this._offert = parseFloat(objtProduct.offert);
        } else {
            // Valor predeterminado si no se proporciona
            this._offert = 0;
        }

        // Configurar _price como número
        if (typeof objtProduct.price === 'number') {
            this._price = objtProduct.price;
        } else if (typeof objtProduct.price === 'string') {
            // Convertir a número si es una cadena de texto
            this._price = parseFloat(objtProduct.price);
        } else {
            // Valor predeterminado si no se proporciona
            this._price = 0;
        }

        /* validar ingreso de imagen  */
        if (objtProduct.image != undefined) {
            this._image = objtProduct.image;
        }
    }

    /* Obtener atributos */
    get sku() {
        return this._sku.trim().toUpperCase();
    }
    get name() {
        return this._name.trim();
    }
    get priceOriginal() {
        return this._price;
    }
    get priceDescuento() {
        return (this._offert * 100).toFixed(2) + "%"
    }
    get priceFinal() {
        return (this._price - (this._price * this._offert)).toFixed(2);
    }
    get image() {
        return ("image/productos/" + this._image)
    }
}