import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from "firebase";
import { firebaseConfig } from "./firebase-config";

firebase.initializeApp( firebaseConfig );

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
