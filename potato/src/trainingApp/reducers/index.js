/**
 * Created by Lena on 08.08.2017.
 */
import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer'

export default combineReducers({
  auth: AuthReducer,
})