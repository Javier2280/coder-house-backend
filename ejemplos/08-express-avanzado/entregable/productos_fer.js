class Productos {

    constructor() {
        // incializar variables
        this.productos = [];
    }

    Agregar(title, price, thumbnail) {
        let nuevoId = 1;
        let nuevoProducto = [];

        try {
            if (this.productos.length > 0) {
                nuevoId = this.productos.length;
            }
            nuevoProducto = { id: nuevoId, title: title, price: price, thumbnail: thumbnail }

            this.productos.push(nuevoProducto);

            return nuevoProducto;

        } catch (error) {
            throw new Error(error);
        }
    }

    ListarTodo() {
        try {
            if (this.productos.length == 0) {
                return { error: 'no hay productos cargados' };
            } else {
                return this.productos;
            }
        } catch (error) {
            throw new Error(error);
        }

    }


    ListarUno(id) {
        let respuesta = [];
        try {

            for (var i = 0; i < this.productos.length; i++) {
                if (this.productos[i].id == id) {
                    respuesta = this.productos[i];
                }
            }

            if (respuesta.length == 0) {

                respuesta = { error: 'producto no encontrado' };
                return respuesta;
            } else {
                return respuesta;
            }

        } catch (error) {
            throw new Error(error);
        }
    }

}

// exporto una instancia de la clase
module.exports = new Productos();