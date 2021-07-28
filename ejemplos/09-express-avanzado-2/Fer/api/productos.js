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

    Actualizar(id, title, price, thumbnail) {
        let respuesta = [];
        console.log('id:',id, 'title:', title, 'price:', price, 'thumbnail', thumbnail);
        try {
            for (var i = 0; i < this.productos.length; i++) {
                if (this.productos[i].id == id) {
                    this.productos[i].title = title;
                    this.productos[i].price = price;
                    this.productos[i].thumbnail = thumbnail;

                    respuesta = this.productos[i];
                }
            }

            if (respuesta.length == 0) {
                respuesta = { error: 'producto no encontrado' };
            }

            return respuesta;

        } catch (error) {
            throw new Error(error);
        }
    }

    Borrar(id) {
        let respuesta = [];

        try {
            for (var i = 0; i < this.productos.length; i++) {
                if (this.productos[i].id == id) {
                    respuesta = this.productos[i];
                    this.productos.splice(i, 1);
                }
            }

            if (respuesta.length == 0) {
                respuesta = { error: 'producto no encontrado' };
            }

            return respuesta;
        } catch (error) {
            throw new Error(error);
        }
    }

}

// exporto una instancia de la clase
module.exports = new Productos();