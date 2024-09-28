const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./docs/index');

app.use(express.json());

app.use('/', routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));