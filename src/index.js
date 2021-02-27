const express = require('express');
const userRoutes = require('./routes/users');

// Carga las variable de entorno
require('dotenv').config();

// Conexión con la base de datos
require('./connection');

app = express();

// Configs
app.set('port', process.env.PORT);

// Middlewars
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Rutas
app.use('/users', userRoutes);

app.listen(app.get('port'), () => console.log(`Server running on port ${app.get('port')}`));

