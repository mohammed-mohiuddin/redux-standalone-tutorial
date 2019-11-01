// action creator for the DECREMENT action.

import { DECREMENT } from '../ActionTypes';

export const decreaseCounter = () => {
    return {
        type: 'DECREMENT'
    }
}