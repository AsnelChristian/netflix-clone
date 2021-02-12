import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app';
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';
import FirebaseContext from './context/firebase';

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
