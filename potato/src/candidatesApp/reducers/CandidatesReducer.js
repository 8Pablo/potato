/**
 * Created by Lena on 18.08.2017.
 */
import {CANDIDATE_UPDATE, CANDIDATE_CREATE, CANDIDATE_SAVE_SUCCESS, CANDIDATE_PREVIEW_NAVIGATE} from '../actions/types'

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
  status: 'New',
  education: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CANDIDATE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    case CANDIDATE_CREATE:
      return INITIAL_STATE;
    case CANDIDATE_SAVE_SUCCESS:
      return INITIAL_STATE;
    case CANDIDATE_PREVIEW_NAVIGATE:
      return INITIAL_STATE
    default:
      return state;
  }
}