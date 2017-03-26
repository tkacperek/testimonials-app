import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import App from './App';
import './index.css';

const config = {
    apiKey: 'AIzaSyBujow7s7vhewL86oeIhB7DRU2gStIkUR8',
    databaseURL: 'https://testimonials-f86d1.firebaseio.com',
};
firebase.initializeApp(config);


ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
