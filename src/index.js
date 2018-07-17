import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './app/containers/App';
import configureStore from './app/store/configureStore';
import { BrowserRouter, Route } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';

import './mainStyle.css';

const store = configureStore();

render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
