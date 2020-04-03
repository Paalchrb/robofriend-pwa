import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { searchRobots, requestRobots } from './reducers';
import thunkMiddleware from 'redux-thunk';


const logger = createLogger();
const rootReducers = combineReducers({
  searchRobots,
  requestRobots
});

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


