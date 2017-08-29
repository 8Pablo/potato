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
import {Text, View, ScrollView, Button, TextInput} from 'react-native';
import {InputSection} from '../common';
import {connect} from 'react-redux';
import {candidateUpdate, candidateCreate} from '../actions'


class CandidatesForm extends Component {
  static navigationOptions = ({navigation}) => {
    const {navigate} = navigation;

    return {
      title      : <Text style={{alignSelf: 'center', color: "#206C97", fontWeight: 'normal'}}>Create New Candidate</Text>,
      headerRight: (<Button title="Save/Add"
                            onPress={() => navigate('CandidatesList')}/>),
      headerLeft : (<Button title="Back"
                            onPress={() => navigate('CandidatesList')}/>)
    }
  }

  onButtonPress() {
    const {
      name,
      email,
      education,
      level,
      jsyears,
      feyears,
      ghlink,
      skills,
      project,
      notice,
      zone,
      based,
      current,
      salary,
      whereaurity,
      courses,
      details,
      status,
    } = this.props;

    this.props.candidateCreate({
      name,
      email,
      education,
      level,
      jsyears,
      feyears,
      ghlink,
      skills,
      project,
      notice,
      zone,
      based,
      current,
      salary,
      whereaurity,
      courses,
      details,
      status,
    })
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
                        onChangeText={text => this.props.candidateUpdate({prop: 'name', value: text})}
          />
          <InputSection title="Email"
                        placeholder="example@mail.com"
                        value={this.props.email}
                        onChangeText={text => this.props.candidateUpdate({prop: 'email', value: text})}
          />
          <InputSection title="Education"
                        placeholder="Education"
                        value={this.props.education}
                        onChangeText={text => this.props.candidateUpdate({prop: 'education', value: text})}
          />
          <InputSection title="Level"
                        placeholder="Junior"
                        value={this.props.level}
                        onChangeText={text => this.props.candidateUpdate({prop: 'level', value: text})}
          />
          <InputSection title="Years in JS"
                        placeholder="0-1"
                        value={this.props.jsyears}
                        onChangeText={text => this.props.candidateUpdate({prop: 'jsyears', value: text})}
          />
          <InputSection title="Years in Front-End"
                        placeholder="0-1"
                        value={this.props.feyears}
                        onChangeText={text => this.props.candidateUpdate({prop: 'feyears', value: text})}
          />
          <InputSection title="Github Link"
                        placeholder="https://github.com"
                        value={this.props.ghlink}
                        onChangeText={text => this.props.candidateUpdate({prop: 'ghlink', value: text})}
          />
          <InputSection title="Skills"
                        placeholder="Candidate's skills"
                        value={this.props.skills}
                        onChangeText={text => this.props.candidateUpdate({prop: 'skills', value: text})}
          />
          <InputSection title="Project Description"
                        placeholder="Description"
                        value={this.props.project}
                        onChangeText={text => this.props.candidateUpdate({prop: 'project', value: text})}
          />
          <InputSection title="Notice"
                        placeholder="2 weeks"
                        value={this.props.notice}
                        onChangeText={text => this.props.candidateUpdate({prop: 'notice', value: text})}
          />
          <InputSection title="Timezone"
                        placeholder="UTC"
                        value={this.props.zone}
                        onChangeText={text => this.props.candidateUpdate({prop: 'zone', value: text})}
          />
          <InputSection title="Based in"
                        placeholder="San Francisco"
                        value={this.props.based}
                        onChangeText={text => this.props.candidateUpdate({prop: 'based', value: text})}
          />
          <InputSection title="Current Position"
                        placeholder="Programmer"
                        value={this.props.current}
                        onChangeText={text => this.props.candidateUpdate({prop: 'current', value: text})}
          />
          <InputSection title="Salary Expectation"
                        placeholder="10,000.00 EUR"
                        value={this.props.salary}
                        onChangeText={text => this.props.candidateUpdate({prop: 'salary', value: text})}
          />
          <InputSection title="How got to know Aurity?"
                        placeholder="Google"
                        value={this.props.whereaurity}
                        onChangeText={text => this.props.candidateUpdate({prop: 'whereaurity', value: text})}
          />
          <InputSection title="Online Courses"
                        placeholder="udemy"
                        value={this.props.courses}
                        onChangeText={text => this.props.candidateUpdate({prop: 'courses', value: text})}
          />
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Details</Text>
            < TextInput placeholder="Details or additional notes"
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
                        onChangeText={text => this.props.candidateUpdate({prop: 'details', value: text})}
            />
          </View>

          <View style={{margin: 10, flex: 1}}>
            <Button title="Save / Add"
                    onPress={this.onButtonPress.bind(this)}
                    color="#206C97"/>
          </View>

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
const mapStateToProps = (state) => {
  const {
    name,
    email,
    education,
    level,
    jsyears,
    feyears,
    ghlink,
    skills,
    project,
    notice,
    zone,
    based,
    current,
    salary,
    whereaurity,
    courses,
    details,
    status,
  } = state.candidates

  return {
    name,
    email,
    education,
    level,
    jsyears,
    feyears,
    ghlink,
    skills,
    project,
    notice,
    zone,
    based,
    current,
    salary,
    whereaurity,
    courses,
    details,
    status,
  }
}

export default connect(mapStateToProps, {candidateUpdate, candidateCreate})(CandidatesForm);