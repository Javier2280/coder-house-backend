const express = require('express');
const handlebars = require('express-handlebars');
const productos = require('./api/productos');

// creo una app de tipo express
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);
app.use(express.static('public'));

app.engine('hbs', handlebars({
    extname: '.hbs', 
    defaultLayout: 'index.hbs', 
    layoutsDir: __dirname + '/views/layouts', 
    //partialsDir: __dirname + '/views/partials/'
}));

app.set('view engine', 'hbs');
app.set('views', './views');

//Vista para listar los productos
router.get('/productos/vista', (req, res) => {
    try {
        res.render('vista', {productos: productos.Listar(), hayProductos: true});

    } catch (error) {
        res.status(400).send(error);
    }
});

//Listar en forma total
router.get('/productos/listar', (req, res) => {
    try {
        res.status(200).send(JSON.stringify(productos.Listar()));
    } catch (error) {
        res.status(400).send(error);
    }
});

//Listar en forma individual
router.get('/productos/listar/:id', (req, res) => {
    try {
        res.status(200).send(JSON.stringify(productos.Listar(req.params.id)));
    } catch (error) {
        res.status(400).send(error);
    }
});

//Almacenar un producto
router.post('/productos/guardar', (req, res) => {
    try {
        res.status(200).send(JSON.stringify(productos.Agregar(req.body.title, req.body.price, req.body.thumbnail)));
    } catch (error) {
        res.status(400).send(error);
    }
});

//Actualizar un producto
router.put('/productos/actualizar/:id', (req, res) => {
    try {
        res.status(200).send(JSON.stringify(productos.Actualizar(req.params.id, req.body.title, req.body.price, req.body.thumbnail)));
    } catch (error) {
        res.status(400).send(error);
    }
});

//Borrar un producto
router.delete('/productos/borrar/:id', (req, res) => {
    try {
        res.status(200).send(JSON.stringify(productos.Borrar(req.params.id)));
    } catch (error) {
        res.status(400).send(error);
    }
});


// pongo a escuchar el servidor en el puerto indicado
const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
