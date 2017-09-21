const Hapi = require('hapi');
const routes = require('./routes');
const db = require('./db');

// Create a server with host and port
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8080
});

server.route(routes);

// Start the server
server.start((err) => {
  if (err) { 
    console.log('Server can not start due to error: ', error);
    throw err;
  }
  console.log('Server is running at: ', server.info.uri);
})