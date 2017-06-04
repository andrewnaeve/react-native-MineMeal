import { createStore, applyMiddleware, compose } from 'redux';
import { Platform } from 'react-native';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import initialState from './initial-state';
import { startListeningToAuthChanges } from './actions/auth';
import devTools from 'remote-redux-devtools';
import Reactotron from 'reactotron-react-native';
export const store = Reactotron.createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk),
);
