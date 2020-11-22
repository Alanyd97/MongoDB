const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env' })
/*
**le dice a mongo donde buscar la base de datos
**si esta no existe la crea
*/
//const URI = 'mongodb+srv://seminario:seminario@seminariomongodb.cwke8.mongodb.net/SeminarioMongoDB?retryWrites=true&w=majority'
mongoose.connect(process.env.db, {useUnifiedTopology: true,  useNewUrlParser: true}).then (db => console.log("db is connected")).catch(err => console.log(err));


module.exports = mongoose;