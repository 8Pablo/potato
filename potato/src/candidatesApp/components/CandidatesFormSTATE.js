/**
 * Created by Lena on 19.08.2017.
 */
/**
 * Created by Lena on 18.08.2017.
 */
import React, {Component} from 'react';
import {Text, View, ScrollView, Button, TextInput, Picker} from 'react-native';
import {InputSection} from '../common';


class CandidatesForm extends Component {

  state = {
    name   : '',
    email  : '',
    details: '',
    status : '',
  }

  static navigationOptions = ({navigation}) => {
    const {navigate} = navigation;

    function onButtonPress() {
      console.log('clicked')
    }

    return {
      title      : <Text style={{alignSelf: 'center', color: "#206C97", fontWeight: 'normal'}}>Welcome!</Text>,
      headerRight: (<Button title="Save/Add"
                            onPress={() => {
                              onButtonPress()
                            }}/>),
      headerLeft : (<Button title="Back"
                            onPress={() => navigate('CandidatesList')}/>)
    }
  }


  render() {
    const {navigate} = this.props.navigation

    return (
      <View>
        <ScrollView style={{alignSelf: 'stretch'}}>
          <Text style={{alignSelf: 'center', paddingTop: 10, color: "#206C97", fontSize: 18}}>
            Candidates details
          </Text>
          <InputSection title="Surname and Name"
                        placeholder="Kowalski Jan"
                        value={this.state.name}
                        onChangeText={name => this.setState({name})}
          />
          <InputSection title="Email"
                        placeholder="example@mail.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
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
                        value={this.state.details}
                        onChangeText={details => this.setState({details})}
            />
          </View>
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Status</Text>
          </View>
          <Picker style={{flex: 1, marginLeft: 15, marginRight: 15}}
                  selectedValue={this.state.status}
                  onValueChange={stat => this.setState({status})}>
            <Picker.Item label="Screening" value="Screening"/>
            <Picker.Item label="Rejected" value="Rejected"/>
          </Picker>
          <Button title="Save / Add"
                  onPress={() => navigate('CandidatesList')}/>
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
    alignItems : 'flex-start',
    alignSelf  : 'stretch',
    marginLeft : 15,
    marginRight: 15,
    marginTop  : 15,
  }

}


export default CandidatesForm;