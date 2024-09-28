const swaggerComponents = require('./components');
const swaggerBasicInfo = require('./basicInfo');
const swaggerTasks = require('./tasks');

const swaggerConfig = {
  ...swaggerBasicInfo,
  components: swaggerComponents,
  paths: swaggerTasks.paths,
};

module.exports = swaggerConfig;