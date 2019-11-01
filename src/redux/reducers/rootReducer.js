// root reducer with default state = 0

import { INCREMENT, DECREMENT } from '../ActionTypes';

export const rootReducer = (state = 0, action) => {
    switch(action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state;
    }
  }