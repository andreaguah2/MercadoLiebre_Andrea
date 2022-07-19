// Introducción a Express - Llamando a express
const express = require("express");
const app = express();

// Estructuras de carpeta y Send File - Requiriendo Path
const path = require('path');

//Servidor Web con Express - Levantando mi servidor
app.listen(3002, ()=> 
    console.log('Servidor funcionando')  
);

//Atando carpetas de mi proyecto
const publicPath = path.resolve(__dirname, 'public');
    app.use(express.static(publicPath));


app.get('/', function(req, res) {
    let htmlPath = path.resolve(__dirname,'views/home.html');
        res.sendFile(htmlPath);
});


//  Como ya tenemos la ruta absoluta con path, esta ya no es necesaria - app.get('/',function(req, res){res.send('Bienvenido a Mercado Liebre!')});

//Introducción a Routing and response
app.get('/contacto', function(req, res){
    res.send('Dejanos tu contacto!')
});

app.get('/producto', function(req, res){
    res.send('Todo lo que necesitas!')
});