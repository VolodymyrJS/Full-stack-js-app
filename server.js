import config from './config.js';
import express from 'express';
import SassMiddleware from 'node-sass-middleware';
import apiRouter from './api';
import path from 'path';

const server = express();

server.use(
  SassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
  })
);

server.set('view engine', 'ejs');

import './serverRender';

server.get('/', (req, res) => {
  res.render('index', {
    content: '...'
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info(`Express listening on port ${config.port}...`);
});
