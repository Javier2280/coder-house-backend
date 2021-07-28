function obtenerProductos(aleatorio) {
    let data = [];
    let productos=[];
    let cantidades;
    let respuesta = '{items: [], cantidad: 0}';

    try {
        data = JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'));

        if(!aleatorio ){
            for(var i = 0; i < data.length; i++) {
                productos.push(data[i].title);
                cantidades = i + 1;
            }
            
            respuesta = `{items: [${productos.join()}], cantidad: ${cantidades} }`;

        } else {
            let id = obtenerRandom(0, data.length);
            console.log('id:',id);
            respuesta = `{items: [${data[id].title}], cantidad: 1}`;

        }
    } catch (error) {
        console.log('error', error);
    }
    
    return respuesta;
}