/**
 * Created by Lena on 08.08.2017.
 */
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REGISTRATION_USER_FAIL
}
  from './types'

import firebase from 'firebase'

export const emailChanged = (text) => {
  return {
    type   : EMAIL_CHANGED,
    payload: text,
  }
}

export const passwordChanged = (text) => {
  return {
    type   : PASSWORD_CHANGED,
    payload: text,
  }
}

function navigateToMainPage(navigate) {
  navigate('Main')
}

export const loginUser = ({email, password, navigate}) => {
  return (dispatch) => {
    dispatch({type: LOGIN_USER});

    firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user, navigate))
            .catch(() => loginUserFail(dispatch));
  };
};

const loginUserSuccess = (dispatch, user, navigate) => {
  dispatch({
    type   : LOGIN_USER_SUCCESS,
    payload: user
  })

  navigateToMainPage(navigate)
}

const loginUserFail = (dispatch) => {
  dispatch({type: LOGIN_USER_FAIL})
}

export const registerUser = ({email, password, navigate}) => {
  return (dispatch) => {
    dispatch({type: REGISTER_USER});

    firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user, navigate))
            .catch(() => registrationUserFail(dispatch));
  };

};


const registrationUserFail = (dispatch) => {
  dispatch({type: REGISTRATION_USER_FAIL})
}
