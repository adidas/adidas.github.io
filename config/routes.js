const contributingRoutes = require('./config').contributing.routes;

const index = {
  id: 'index',
  name: 'lang',
  path: '/'
};

module.exports = [ index ].concat(contributingRoutes);
