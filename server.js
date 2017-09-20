const Hapi = require('hapi');

// Create a server with host and port
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8080
});

// Add a route
server.route({
  method: 'GET',
  path: '/hello',
  handler: function(request, reply) {
    return reply('hello world');
  }
});

// Start the server
server.start((err) => {
  if (err) { 
    console.log('Server can not start due to error: ', error);
    throw err;
  }
  console.log('Server is running at: ', server.info.uri);
})