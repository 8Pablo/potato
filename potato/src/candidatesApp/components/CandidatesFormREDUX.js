/**
 * Created by Lena on 21.08.2017.
 */
/**
 * Created by Lena on 19.08.2017.
 */
/**
 * Created by Lena on 18.08.2017.
 */
import React, {Component} from 'react';
import {Text, View, ScrollView, Button, TextInput, Picker} from 'react-native';
import {InputSection} from '../common';
import {connect} from 'react-redux';
import {candidateUpdate} from '../actions/CandidatesActions'


class CandidatesFormRedux extends Component {
  static navigationOptions = ({navigation}) => {
    const {navigate} = navigation;

    return {
      title      : <Text style={{alignSelf: 'center', color: "#206C97", fontWeight: 'normal'}}>Welcome!</Text>,
      headerRight: (<Button title="Save/Add"
                            onPress={() => navigate('CandidatesList')}/>),
      headerLeft : (<Button title="Back"
                            onPress={() => navigate('CandidatesList')}/>)
    }
  }

  render() {
    return (
      <View>
        <ScrollView style={{alignSelf: 'stretch'}}>
          <Text style={{alignSelf: 'center', paddingTop: 10, color: "#206C97", fontSize: 18}}>
            Candidate's details
          </Text>
          <InputSection title="Surname and Name"
                        placeholder="Kowalski Jan"
                        value={this.props.name}
                        onChangeText={value => this.props.candidateUpdate({prop: 'name', value})}
          />
          <InputSection title="Email"
                        placeholder="example@mail.com"
                        value={this.props.email}
                        onChangeText={value => this.props.candidateUpdate({prop: 'email', value})}
          />
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Details</Text>
            < TextInput placeholder="Input from Email"
                        style={{
                          color          : '#1d1d1d',
                          paddingRight   : 5,
                          paddingLeft    : 5,
                          fontSize       : 18,
                          lineHeight     : 23,
                          height         : 200,
                          alignSelf      : 'stretch',
                          backgroundColor: '#fff',
                          elevation      : 10
                        }}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        multiline={true}
                        autoCorrect={false}
                        value={this.props.details}
                        onChangeText={value => this.props.candidateUpdate({prop: 'details', value})}
            />
          </View>
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Status</Text>
          </View>
          <Picker style={{flex: 1, marginLeft: 15, marginRight: 15}}
                  selectedValue={this.props.status}
                  onValueChange={stat => this.props.candidateUpdate({prop: 'status', value: stat})}>
            <Picker.Item label="Screening" value="Screening"/>
            <Picker.Item label="Rejected" value="Rejected"/>
          </Picker>
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  textStyle: {
    color     : '#3c3c3c',
    fontSize  : 18,
    lineHeight: 23,
    alignSelf : 'stretch',
  },
  viewStyle: {
    alignItems  : 'flex-start',
    alignSelf   : 'stretch',
    marginLeft  : 15,
    marginRight : 15,
    marginTop: 15,
  }

}
const mapStateToProps = (state) => {
  const {name, email, details, status} = state

  return {name, email, details, status}
}

export default connect(mapStateToProps, {candidateUpdate})(CandidatesFormRedux);