const Server = require('@skuyjs/http-server');
const routes = require('./routes');

app = new Server();

app.use('/', routes);

app.listen(8080, () => {
  console.log('Application start')
});
