const express = require("express");
const app = express();
const morgan = require('morgan');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const {mongoose} = require('./database');
//Swagger
// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Amazing Developer"
      },
      servers: ["http://localhost:5000"]
    }
  },
  // ['.routes/*.js']
  apis: ["app.js"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


//Settings
//creo y seteo el puerto GLOBAL del servidor nivel aplicacion
app.set('port', process.env.PORT || 3000);

//MidlleWares
//manda mensajes a consola vscode peticiones
app.use(morgan('dev'));
//configura al servidor para interpretar json
app.use(express.json());


// Routes
app.use('/api/products',require('./routes/products.routes'));



//Starting the server
app.listen(app.get('port'), ()=> {
    console.log('Server on port 3000')
})