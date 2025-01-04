const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(cors({
  origin: '*',
  //origin: 'https://glorious-robot-94wp4q99rrqhxw5p-3000.app.github.dev',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
}));

server.use(middlewares);
server.use(router);
server.options('*', cors()); 

server.listen(3000, () => {
  console.log('JSON Server is running');
});
