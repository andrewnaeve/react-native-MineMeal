//@flow
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import initialState from '../initial-state';

export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));


