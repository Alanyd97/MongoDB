const mongoose = require('mongoose');
/*
**le dice a mongo donde buscar la base de datos
**si esta no existe la crea
*/
const URI = 'mongodb://localhost/Seminario'
mongoose.connect(URI).then (db => console.log("db is connected")).catch(err => console.log(err));


module.exports = mongoose;