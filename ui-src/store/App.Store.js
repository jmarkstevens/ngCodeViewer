import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import startWs, {wsMiddleware} from './api/api.ws';

import fileState from './file/file.Reducer';
import treeState from './tree/tree.Reducer';

const reducer = combineReducers({fileState, treeState});
let middleware = [thunkMiddleware, wsMiddleware];

const useLogger = 1;
if (useLogger) middleware.push(logger);

const store = createStore(reducer, applyMiddleware(...middleware));

startWs(store);

store.dispatch({type: 'ApiReadTree'});

export default store;
