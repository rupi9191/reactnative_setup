import { applyMiddleware, createStore, compose } from 'redux';
import thunkmiddleware from 'redux-thunk';
import rootReducer from './reducers';

const middlewares = [thunkmiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares)

const enhancers = [middlewareEnhancer];
const composedEnhancers = compose(...enhancers);
const store = createStore(rootReducer, {}, composedEnhancers);

export default store;