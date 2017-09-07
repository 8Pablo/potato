/**
 * Created by Lena on 03.08.2017.
 */
import React, {Component} from 'react';
import firebase from 'firebase';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers'
import ReduxThunk from 'redux-thunk'
import RegisterForm from './components/RegisterForm';
import {StackNavigator} from 'react-navigation'
import CandidatesList from './components/CandidatesList'
import CandidatesForm from './components/CandidatesForm'
import CandidatePreview from './components/CandidatePreview'


const BasicApp = StackNavigator({
  Register      : {screen: RegisterForm},
  CandidatePreview: {screen: CandidatePreview},
  CandidatesList: {screen: CandidatesList},
  CandidatesForm: {screen: CandidatesForm},
});

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey           : "AIzaSyDZYlySNVAPsym5GCTMCgE4x_p7GsFpWKo",
      authDomain       : "potato-5211a.firebaseapp.com",
      databaseURL      : "https://potato-5211a.firebaseio.com",
      projectId        : "potato-5211a",
      storageBucket    : "potato-5211a.appspot.com",
      messagingSenderId: "397918687238"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <BasicApp/>
      </Provider>
    )
  }
}

export default App;