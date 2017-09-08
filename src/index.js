import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render((
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
