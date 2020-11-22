const express = require("express");
const app = express();
const morgan = require('morgan');
const {mongoose} = require('./database');
//Settings
//creo y seteo el puerto GLOBAL del servidor nivel aplicacion
app.set('port', "https://seminario-mongodb.herokuapp.com/" || 3000);



//MidlleWares

//manda mensajes a consola vscode peticiones
app.use(morgan('dev'));
//configura al servidor para interpretar json
app.use(express.json());


// Routes

app.use('/api/products',require('./routes/products.routes'));



//Starting the server
app.listen(app.get('port'), ()=> {
    console.log('Server on port: '+app.get('port'))
})