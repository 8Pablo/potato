/**
 * Created by Lena on 27.08.2017.
 */
import {CANDIDATES_FETCH_SUCCESS} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CANDIDATES_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}