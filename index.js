import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

let path = require('path');

// const cards = JSON.parse(path.join(__dirname, 'api.json'));

// console.log(cards);

ReactDOM.render(<App />, document.getElementById('game'));