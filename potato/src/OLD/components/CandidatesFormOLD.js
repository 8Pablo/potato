/**
 * Created by Lena on 18.08.2017.
 */
import React, {Component} from 'react';
import {Text, View, ScrollView, Button} from 'react-native';
import {InputSection} from '../common'


class CandidatesForm extends Component {
  static navigationOptions = ({navigation}) => {
    const {navigate} = navigation;

    return {
      title      : <Text    style={{alignSelf: 'center', color: "#206C97", fontWeight: 'normal'}}>Welcome!</Text>,
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
          <InputSection title="Name"
                        placeholder="Jan"
          />
          <InputSection title="Surname"
                        placeholder="Kowalski"
          />
          <InputSection title="Education"
                        placeholder="Education"
          />
          <InputSection title="Level"
                        placeholder="Junior"
          />
          <InputSection title="Years in JS"
                        placeholder="0-1"
          />
          <InputSection title="Years in Front-End"
                        placeholder="0-1"
          />
          <InputSection title="Github Link"
                        placeholder="https://github.com"
          />
          <InputSection title="Skills"
                        placeholder="Candidate's skills"
          />
          <InputSection title="Project Description"
                        placeholder="Description"
          />
          <InputSection title="Notice"
                        placeholder="2 weeks"
          />
          <InputSection title="Timezone"
                        placeholder="UTC"
          />
          <InputSection title="Based in"
                        placeholder="San Francisco"
          />
          <InputSection title="Current Position"
                        placeholder="Programmer"
          />
          <InputSection title="Salary Expectation"
                        placeholder="Description"
          />
          <InputSection title="How got to know Aurity?"
                        placeholder="Google"
          />
          <InputSection title="Online Courses"
                        placeholder="Description"
          />
          <InputSection title="Notes"
                        placeholder="Notes"
          />
        </ScrollView>
      </View>
    )
  }
}

export default CandidatesForm