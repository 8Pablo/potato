/**
 * Created by Lena on 08.08.2017.
 */
import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer'
import CandidatesReducer from './CandidatesReducer'
import CandidatesFetchReducer from './CandidatesFetchReducer'

export default combineReducers({
  auth: AuthReducer,
  candidates: CandidatesReducer,
  fetch: CandidatesFetchReducer
})