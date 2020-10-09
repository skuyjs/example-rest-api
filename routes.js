const { Router } = require('@skuyjs/http-server');
const indexController = require('./controller/root');

const routes = new Router();

const indexRoute = new Router();
indexRoute.get('/', indexController.index);
indexRoute.post('/', indexController.create);
routes.use('/', indexRoute);

module.exports = routes;
