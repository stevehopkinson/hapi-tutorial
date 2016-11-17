const hapi = require('hapi');
const port = process.env.PORT || 4000;

const server = new hapi.Server();

server.connection({ port: port });

server.route({
  method: 'GET',
  path: '/',
  handler: (request, response) => response('Hello, world!')
});

server.start( err => {
  if (err) throw err;
  console.log(`server is running on : ${server.info.uri}`);
});
