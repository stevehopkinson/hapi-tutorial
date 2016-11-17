const hapi = require('hapi');
const port = process.env.PORT || 4000;

const server = new hapi.Server();

server.connection({ port: port });

server.register(require('inert'), (err) => {
  if (err) throw err;
  console.log('Inert registered on server');

  server.route({
    method: 'GET',
    path: '/{file*}',
    handler: {
      directory: {
        path: 'public'
      }
    }
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, response) => response.file(`./public/index.html`)
  })
});

server.start( err => {
  if (err) throw err;
  console.log(`Server is running on: ${server.info.uri}`);
});
