'use strict';

const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const eRouters = require('./routes/eventRoutes');
const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');
const swaggerSpec = swaggerJSDoc(options);
const app = express();

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', eRouters.routers);

app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.listen(config.port, ()=> console.log('Server is listening on port ' + config.url ));