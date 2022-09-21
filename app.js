const express = require("express");
const app = express();
const path = require('path');

app.listen(3002, ()=> 
    console.log('Al fin estoy funcionandon en el puerto 3002')  
);

const publicPath = path.resolve(__dirname, 'public');
    app.use(express.static(publicPath));

app.get('/', function(req, res) {
    let htmlPath = path.resolve(__dirname,'views/home.html');
        res.sendFile(htmlPath);
});

app.get('/contacto', function(req, res){
    res.send('Dejanos tu contacto!')
});

app.get('/producto', function(req, res){
    res.send('Todo lo que necesitas!')
});