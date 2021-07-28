import * as express from "express";
import * as productos from "./api/productos";

const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

let respuesta = '';

//Listar en forma total
router.get('/productos/listar', (req, res) => {

    try {
        respuesta = JSON.stringify(productos.Listar());

        res.send(respuesta);
    } catch (error) {
        res.status(400).send(error);
    }
});

//Listar en forma individual
router.get('/productos/listar/:id', (req, res) => {

    try {
        respuesta = JSON.stringify(productos.Listar(req.params.id));

        res.send(respuesta);
    } catch (error) {
        res.status(400).send(error);
    }
});

//Almacenar un producto
router.post('/productos/guardar', (req, res) => {
    try {
        respuesta = JSON.stringify(productos.Agregar(req.body.title, req.body.price, req.body.thumbnail));

        res.status(200).send(respuesta);
    } catch (error) {
        res.status(400).send(error);
    }
});

//Actualizar un producto
router.put('/productos/actualizar/:id', (req, res) => {
    try {
        respuesta = JSON.stringify(productos.Actualizar(req.params.id, req.body.title, req.body.price, req.body.thumbnail));

        res.status(200).send(respuesta);
    } catch (error) {
        res.status(400).send(error);
    }
});

//Borrar un producto
router.delete('/productos/borrar/:id', (req, res) => {
    try {
        respuesta = JSON.stringify(productos.Borrar(req.params.id));

        res.status(200).send(respuesta);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.use('/api', router);

// pongo a escuchar el servidor en el puerto indicado
const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});