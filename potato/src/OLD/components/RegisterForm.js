/**
 * Created by Lena on 11.08.2017.
 */
/**
 * Created by Lena on 03.08.2017.
 */
import React, {Component} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import {ContainerSection, Button, Input, Spinner} from '../common';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser, registerUser} from '../actions/AuthActions'

//var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
var containerWidth = Dimensions.get('window').width * 0.7

class LoginFormEmail extends Component {
  static navigationOptions = {
    header: null
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginButtonPress() {
    const {email, password, navigate} = this.props;

    this.props.loginUser({email, password, navigate});
  }

  onRegisterButtonPress() {
    const {email, password, navigate} = this.props;

    this.props.registerUser({email, password, navigate});
  }

  renderLoginButton() {
    if (this.props.loading) {
      return <Spinner size="large"/>
    }
    else if (this.props.error) {
      return (
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
      )
    }
    return (
      <Button onPress={this.onLoginButtonPress.bind(this)}>
        Log In
      </Button>
    )
  }

  renderRegistrationButton() {
    if (this.props.registrationLoading) {
      return <Spinner size="large"/>
    }
    else if (this.props.registrationError) {
      return (
        <Text style={styles.errorTextStyle}>
          {this.props.registrationError}
        </Text>
      )
    }
    return (
      <Button onPress={this.onRegisterButtonPress.bind(this)}>
        Register
      </Button>
    )
  }



  render() {
    return (
      <View style={styles.mainViewStyle}>
        <Image source={require('../img/imgLoginPage.jpg')} style={styles.backgroundImage}>
          <View style={styles.titleStyle}>
            <Text style={styles.titleTextStyle}>
              YOUR
            </Text>
            <Text style={styles.titleTextStyle}>
              TRAINING
            </Text>
            <Text style={styles.titleTextStyle}>
              APP
            </Text>
          </View>

          <ContainerSection style={{width: containerWidth}}>
            <Input label="Email"
                   placeholder="Email address"
                   onChangeText={this.onEmailChange.bind(this)}
                   value={this.props.email}
            />
          </ContainerSection>

          <View style={{flex: 0.1}}/>

          <ContainerSection style={{width: containerWidth}}>
            <Input secureTextEntry="true"
                   password="true"
                   label="Password"
                   placeholder="Password"
                   onChangeText={this.onPasswordChange.bind(this)}
                   value={this.props.password}
            />
          </ContainerSection>

          <View style={{flex: 0.4}}/>

          <ContainerSection style={{width: containerWidth, backgroundColor: "#2D9CDB"}}>
            {this.renderLoginButton()}
          </ContainerSection>

          <View style={{flex: 0.2}}/>

          <ContainerSection style={{width: containerWidth, backgroundColor: "#206C97"}}>
            {this.renderRegistrationButton()}
          </ContainerSection>

          <View style={{flex: 1.2}}/>

        </Image>
      </View>
    )
  }
}

const styles = {
  mainViewStyle: {
    height         : height,
    backgroundColor: 'transparent',
    flexDirection  : 'column',
    justifyContent : 'flex-end',
    alignItems     : 'center',
  },

  backgroundImage: {
    height    : height,
    alignItems: 'center'

  },

  titleStyle: {
    flex          : 5,
    padding       : 5,
    alignItems    : 'flex-start',
    justifyContent: 'flex-end',
    paddingBottom : 50,
  },

  titleTextStyle: {
    width        : containerWidth,
    fontSize     : 40,
    color        : '#fff',
    alignItems   : 'flex-start',
    paddingBottom: 5,
  },
  errorTextStyle: {
    fontSize : 20,
    alignSelf: 'center',
    color    : 'red'
  }
}

const mapStateToProps = (state, props) => {
  const {auth} = state
  const {email, password, loading, error, registrationError} = auth;
  const {navigate} = props.navigation
  return {email, password, navigate, loading, error, registrationError};
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser, registerUser})(LoginFormEmail)