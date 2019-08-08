import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import axios from 'axios';

axios
  .get('api/contests')
  .then(resp => {
    ReactDOM.hydrate(
      <App initialContests={resp.data.contests} />,
      document.getElementById('root')
    );
  })
  .catch(err => 'Error: ' + err);
