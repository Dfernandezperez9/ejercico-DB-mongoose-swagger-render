const SWAGGER_COMPONENTS = require('./components');
const SWAGGER_BASIC_INFO = require('./basicInfo');
const SWAGGER_TASKS = require('./tasks');

const SWAGGER_CONFIG = {
  ...SWAGGER_BASIC_INFO,
  components: SWAGGER_COMPONENTS,
  paths: SWAGGER_TASKS.paths,
};

module.exports = SWAGGER_CONFIG;