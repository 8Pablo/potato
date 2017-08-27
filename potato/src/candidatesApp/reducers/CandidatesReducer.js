/**
 * Created by Lena on 18.08.2017.
 */
import {CANDIDATE_UPDATE, CANDIDATES_FETCH_SUCCESS, CANDIDATE_CREATE, CANDIDATE_SAVE_SUCCESS} from '../actions/types'

INITIAL_STATE = {
  name: '',
  email: '',
  level: '',
  jsyears: '',
  feyears: '',
  ghlink: '',
  skills: '',
  project: '',
  notice: '',
  zone: '',
  based: '',
  current: '',
  salary: '',
  whereaurity: '',
  courses: '',
  details: '',
  status: '',
  education: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CANDIDATE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    case CANDIDATES_FETCH_SUCCESS:
      return action.payload;
    case CANDIDATE_CREATE:
      return INITIAL_STATE;
    case CANDIDATE_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
}