import React, {Component} from 'react'
import {Text, View, Button} from 'react-native'

class CandidatesList extends Component {

  static navigationOptions = ({navigation}) => {
    const {navigate} = navigation;

    return {
      title      : <Text style={{alignSelf: 'center', color: "#206C97", fontWeight: 'normal'}}>Welcome!</Text>,
      headerRight: (<Button title="Add New Candidate"
                            onPress={() => navigate('CandidatesForm')}/>),
      headerLeft : null
    }
  }


  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Candidate 1</Text>
        <Text>Candidate 2</Text>
        <Text>Candidate 3</Text>
        <Text>Candidate 4</Text>
        <Button title="Add new Candidate"
                onPress={() => navigate('CandidatesForm')}/>
      </View>
    )
  }
}

export default CandidatesList