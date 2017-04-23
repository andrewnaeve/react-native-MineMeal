//@flow
import { createStore, applyMiddleware, compose } from 'redux';
import { Platform } from 'react-native';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import initialState from '../initial-state';
import { startListeningToAuthChanges } from './actions/auth';
import devTools from 'remote-redux-devtools';
import { Reactotron } from 'reactotron-redux';
export const store = Reactotron.createStore(rootReducer, initialState, applyMiddleware(thunk));



// export default function Store(initialState) {
//   const enhancer = compose(
//     applyMiddleware(thunk),
//     devTools({
//       name: Platform.OS,
//       hostname: 'localhost',
//       port: 5678
//     })
//   );
//   return createStore(reducer, initialState, enhancer);
// }
