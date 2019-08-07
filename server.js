import './config.js';
import express from 'express';

const server = express();
const port = 3000;

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: '<div><p>Hello from <b>EJS</b><span>:)</span></p></div>'
  });
});

server.use(express.static('public'));

server.listen(port, () => {
  console.info(`Express listening on port ${port}...`);
});
