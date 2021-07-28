const fs = require('fs');

class Archivo {

    constructor(rutaArchivo) {
        this.ruta = rutaArchivo;
    }

    async leer() {
        await fs.readFile(this.ruta, 'utf-8', (error, contenido) => {
            if (error) {
                console.log(error.message);
            } else {
                return console.log(contenido.toString());
            }

        });
    }

    async guardar(titulo, precio, miniatura) {
        let data;
        let nuevoId = 1;

        try {
            data = JSON.parse(fs.readFileSync(this.ruta, 'utf-8'));

            for (var i = 0; i < data.length; i++) {
                nuevoId = nuevoId++
            }

            data.push({ title: titulo, price: precio, thumbnail: miniatura, id: nuevoId });

        } catch (error) {
            throw error;
        }

        await fs.writeFile(this.ruta, JSON.stringify(data), (error, contenido) => {
            if (error) {
                console.log('error:', error.message)
            } else {
                console.log('Información guardada correctamente!');
            }
        });
    }

    async borrar() {

        await fs.unlink(this.ruta, (error, contenido) => {
            if (error) {
                console.log(error);
            } else {
                return console.log('Archivo eliminado.');
            }
        });
    }

}

let miArchivo = new Archivo('./productos.txt');

miArchivo.leer();
miArchivo.guardar('abc',10.05,'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png')
miArchivo.borrar();