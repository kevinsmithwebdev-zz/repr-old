import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import {Provider} from 'react-redux'
import {createStore} from 'redux'

import registerServiceWorker from './registerServiceWorker'

import reducers from "./reducers/"

// import { composeWithDevTools } from 'redux-devtools-extension';
import { devToolsEnhancer } from 'redux-devtools-extension';

let store = createStore(reducers, /* preloadedState, */ devToolsEnhancer(
  // Specify custom devTools options
));

// let store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
