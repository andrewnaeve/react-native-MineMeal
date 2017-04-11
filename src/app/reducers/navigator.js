import { BACK } from '../actions/types';
import initialState from '../../initial-state';

export default function navigator(state = initialState.navigation, action) {

  switch(action.type) {
    case 'BACK':
      return {
        scenes: state.scenes.slice(0, this.state.scenes.length -1),
      };
    default:
      return state;
  };
};