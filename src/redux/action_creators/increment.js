// action creator for the INCREMENT action.

import { INCREMENT } from '../ActionTypes';

export const increaseCounter = () => {
    return {
        type: 'INCREMENT'
    }
}