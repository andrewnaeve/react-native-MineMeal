//@flow
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk));