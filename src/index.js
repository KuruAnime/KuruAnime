import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from "firebase";
const config = {
    apiKey: "AIzaSyCz3laxK1vMpEpjJFXSx8UyzlH7mE4KBT0",
    authDomain: "kuru-anime-network.firebaseapp.com",
    databaseURL: "https://kuru-anime-network.firebaseio.com",
    projectId: "kuru-anime-network",
    storageBucket: "kuru-anime-network.appspot.com",
    messagingSenderId: "195377790597"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
