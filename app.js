// Importaciones
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const ejemploRuta = require('./routes/routes');

// inicializaciones
const app = express();

const port = 6000;

// middlewares
app.use(express.json());
app.use(morgan('combined'));
app.use(helmet());
app.use(cors());

// RUTAS

app.use('/', ejemploRuta);

// servidor en escucha
app.listen(port, () => console.log(`el servidor esta corriendo en el puerto ${port}`));