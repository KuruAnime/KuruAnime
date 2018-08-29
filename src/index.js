import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

import firebase from "firebase/app";
import 'firebase/auth';
import { firebaseConfig } from "./firebase-config";

firebase.initializeApp( firebaseConfig );

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
