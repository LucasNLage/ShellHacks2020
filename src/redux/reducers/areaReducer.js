import { SETAREAS } from '../actionTypes';

export default function(state = null, action) {
  switch (action.type) {
    case SETAREAS: {
      return action.payload.areas;
    }

    default: {
      return state;
    }
  }
}