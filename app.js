// Importaciones
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

// inicializaciones
const app = express();

const port = 6000;

// middlewares
app.use(express.json());
app.use(morgan('combined'));
app.use(helmet());
app.use(cors());

// RUTAS

app.get('/', function (request, response) {
    response.send('GET');
})

app.post('/',function (request, response) {
    response.send('POST');
})

app.put('/', function (request, response) {
    response.send("PUT");
})

app.delete('/',function (request, response) {
    response.send("DELETE");
})

// servidor en escucha
app.listen(port, () => console.log(`el servidor esta corriendo en el puerto ${port}`))