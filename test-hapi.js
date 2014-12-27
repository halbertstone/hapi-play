var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({ port: 3000 });
 
server.start(function () {
  console.log('Server running at:', server.info.uri);
});

// above only sets up the server
// need to supply routes to direct handling of requests
//
server.route({ 
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('\nHello World!\ntest-hapi is alive!\n');
  }
});

// Route added through Branch Bra-B
server.route({
  method: 'GET',
  path: '/dude/',
  handler: function (request, reply){
    reply('\nWelcome, DUDE!\n');
  }
});
