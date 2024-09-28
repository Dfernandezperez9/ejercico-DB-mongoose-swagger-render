const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');
const routes = require('./routes');
const SWAGGER_UI = require('swagger-ui-express');
const SWAGGER_CONFIG = require('./docs/index');

app.use(express.json());

app.use('/', routes);

app.use('/api-docs', SWAGGER_UI.serve, SWAGGER_UI.setup(SWAGGER_CONFIG));

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));