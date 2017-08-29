/**
 * Created by Lena on 28.08.2017.
 */
import React, {Component} from 'react';
import {Text, View, ScrollView, Button} from 'react-native';
import {PreviewText, PreviewHyperlink} from '../common';
import {connect} from 'react-redux';
import {candidateUpdate, candidateCreate} from '../actions'


class CandidatesPreview extends Component {
  static navigationOptions = ({navigation}) => {
    const {navigate} = navigation;

    return {
      title      : <Text style={{alignSelf: 'center', color: "#206C97", fontWeight: 'normal'}}>Preview Existing
        Candidate</Text>,
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
          <PreviewText title="Surname and Name"
                       value="Kowalski Jan"
          />
          <PreviewText title="Email"
                       placeholder="example@mail.com"
                       value={this.props.email}
                       onChangeText={text => this.props.candidateUpdate({prop: 'email', value: text})}
          />
          <PreviewText title="Education"
                       placeholder="Education"
                       value={this.props.education}
                       onChangeText={text => this.props.candidateUpdate({prop: 'education', value: text})}
          />
          <PreviewText title="Level"
                       placeholder="Junior"
                       value={this.props.level}
                       onChangeText={text => this.props.candidateUpdate({prop: 'level', value: text})}
          />
          <PreviewText title="Years in JS"
                       placeholder="0-1"
                       value={this.props.jsyears}
                       onChangeText={text => this.props.candidateUpdate({prop: 'jsyears', value: text})}
          />
          <PreviewText title="Years in Front-End"
                       placeholder="0-1"
                       value={this.props.feyears}
                       onChangeText={text => this.props.candidateUpdate({prop: 'feyears', value: text})}
          />
          <PreviewHyperlink title="Github Link"
                       value="https://github.com"
                       onChangeText={text => this.props.candidateUpdate({prop: 'ghlink', value: text})}
          />
          <PreviewText title="Skills"
                       placeholder="Candidate's skills"
                       value={this.props.skills}
                       onChangeText={text => this.props.candidateUpdate({prop: 'skills', value: text})}
          />
          <PreviewText title="Project Description"
                       placeholder="Description"
                       value={this.props.project}
                       onChangeText={text => this.props.candidateUpdate({prop: 'project', value: text})}
          />
          <PreviewText title="Notice"
                       placeholder="2 weeks"
                       value={this.props.notice}
                       onChangeText={text => this.props.candidateUpdate({prop: 'notice', value: text})}
          />
          <PreviewText title="Timezone"
                       placeholder="UTC"
                       value={this.props.zone}
                       onChangeText={text => this.props.candidateUpdate({prop: 'zone', value: text})}
          />
          <PreviewText title="Based in"
                       placeholder="San Francisco"
                       value={this.props.based}
                       onChangeText={text => this.props.candidateUpdate({prop: 'based', value: text})}
          />
          <PreviewText title="Current Position"
                       placeholder="Programmer"
                       value={this.props.current}
                       onChangeText={text => this.props.candidateUpdate({prop: 'current', value: text})}
          />
          <PreviewText title="Salary Expectation"
                       placeholder="10,000.00 EUR"
                       value={this.props.salary}
                       onChangeText={text => this.props.candidateUpdate({prop: 'salary', value: text})}
          />
          <PreviewText title="How got to know Aurity?"
                       placeholder="Google"
                       value={this.props.whereaurity}
                       onChangeText={text => this.props.candidateUpdate({prop: 'whereaurity', value: text})}
          />
          <PreviewText title="Online Courses"
                       placeholder="udemy"
                       value={this.props.courses}
                       onChangeText={text => this.props.candidateUpdate({prop: 'courses', value: text})}
          />
          <PreviewText title="Details"
                       placeholder="Details"
                       value={this.props.details}
                       onChangeText={text => this.props.candidateUpdate({prop: 'details', value: text})}
          />


          <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
            <View style={{flex: 1, margin: 10}}>
              <Button title="Screening"
                      onPress={() => this.props.candidateUpdate({prop: 'status', value: 'Screening'})}
                      color="#579c2b"/>
            </View>
            <View style={{flex: 1, margin: 10}}>
              <Button title="Rejected"
                      onPress={() => this.props.candidateUpdate({prop: 'status', value: 'Rejected'})}
                      color="#9c2927"/>
            </View>
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

export default connect(mapStateToProps, {candidateUpdate, candidateCreate})(CandidatesPreview);