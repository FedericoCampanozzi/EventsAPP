const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const eRouters = require('./routes/eventRoutes');

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();

// Enable CORS for all routes
app.all("/*", function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

// Body parsing middleware for JSON and url-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS using the cors() middleware
app.use(cors());

// Mount your routers under the '/api' path
app.use('/api', eRouters.routers);

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info:{
      title:'EVENTS APP API',
      version:'1.0.0'
    },
    server:{
      url:' http://localhost:8080'
    }
  },
  apis:['./src/routes/*.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen(config.PORT, ()=> console.log('Server is listening on port ' + config.URL ));