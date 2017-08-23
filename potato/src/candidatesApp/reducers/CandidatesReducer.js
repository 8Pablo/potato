/**
 * Created by Lena on 18.08.2017.
 */
import {CANDIDATE_UPDATE} from '../actions/types'

INITIAL_STATE = {
  name: '',
  email: '',
  details: '',
  status: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CANDIDATE_UPDATE:
      return {...state, [action.payload.prop]:[action.payload.value]}
    default:
      return state;
  }
}