import React, {Component} from 'react';
import _ from 'lodash';
import {Text, View, Button, ListView} from 'react-native';
import {connect} from 'react-redux';
import {candidatesFetch, candidatePreviewNavigate} from '../actions/CandidatesActions';
//import {ListItem} from '../common'
//import ListItemRedux from './ListItemREDUX'
//import {ListItemConst} from './ListItemConst'
import ListItem from './ListItem'


class CandidatesList extends Component {

  //var navi = {};

  constructor(props) {

    super(props);
    //console.log("The porpsddoo are",this.props);
  }

  static navigationOptions = ({navigation},props) => {
    const {navigate} = navigation;
    //navi = navigate
    console.log("This naviate is" , navigation);
    //console.log("The porpsddoo are",props);


    return {
      title      : <Text style={{alignSelf: 'center', color: "#206C97", fontWeight: 'normal'}}>List ofh
        Candidates</Text>,
      headerRight: (<Button title="Add New Candidate"
                            onPress={() => navigate('CandidatesForm')}/>),
      headerLeft : null
    }
  }

  componentWillMount() {
    console.log("The porpsddoo are",this.props);
    this.props.candidatesFetch();
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }

  createDataSource({candidates}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    this.dataSource = ds.cloneWithRows(candidates)
  }


  render() {

      const {navigate} = this.props.navigation;
    console.log("The render props includek",navigate);
    console.log("This is properries", this.props);

    const goTo=(candidate)=>{

      navigate('CandidatePreview',{candidate})

    }




    return (
      <View>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={
            (candidate,navigate)=> <ListItem candidate={candidate} navigate={navigate} func={goTo}/>

          }
        />
        <View style={{margin: 10}}>
          <Button title="Add new Candidate"
                  onPress={() => navigate('CandidatesForm')}/>
        </View>
      </View>
    )
  }


}

const mapStateToProps = (state, props) => {

  const candidates = _.map(state.fetch, (val, uid) => {
    return {...val, uid};
  });
  const {navigate} = props.navigation

  return {candidates, navigate};
}



export default connect(mapStateToProps,{candidatesFetch, candidatePreviewNavigate})(CandidatesList);