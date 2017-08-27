/**
 * Created by Lena on 26.08.2017.
 */
import React, {Component} from 'react'
import {Text, View, Button} from 'react-native';


class CandidatesListTrial extends Component {

  static navigationOptions = ({navigation}) => {
    const {navigate} = navigation;

    return {
      title      : <Text style={{alignSelf: 'center', color: "#206C97", fontWeight: 'normal'}}>TRIAL TRIAL TRIAL</Text>,
      headerRight: (<Button title="Add New Candidate"
                            onPress={() => navigate('CandidatesFormREDUX')}/>),
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
                onPress={() => navigate('CandidatesFormREDUX')}/>
      </View>
    )
  }


}

export default CandidatesListTrial

//OLD CODE WITH STATE

//import React, {Component} from 'react'
//import {Text, View, Button, ListView} from 'react-native';
//import * as firebase from 'firebase';
//
//const ListItem = require('../common/ListItem');
//const styles = require('../common/styles');
//
//class CandidatesListTrial extends Component {
//
//  static navigationOptions = ({navigation}) => {
//    const {navigate} = navigation;
//
//    return {
//      title      : <Text style={{alignSelf: 'center', color: "#206C97", fontWeight: 'normal'}}>TRIAL TRIAL TRIAL</Text>,
//      headerRight: (<Button title="Add New Candidate"
//                            onPress={() => navigate('CandidatesForm')}/>),
//      headerLeft : null
//    }
//  }
//
//  constructor(props) {
//    super(props);
//    this.tasksRef = firebase.database().ref();
//    const dataSource = new ListView.DataSource({
//      rowHasChanged: (row1, row2) => row1 !== row2,
//    });
//    this.state = {
//      dataSource: dataSource
//    };
//  }
//
//  listenForTasks(tasksRef) {
//    tasksRef.on('value', (dataSnapshot) => {
//      var tasks = [];
//      dataSnapshot.forEach((child) => {
//        tasks.push({
//          name: child.val().title,
//          _key: child.key
//        });
//      });
//
//      this.setState({
//        dataSource: this.state.dataSource.cloneWithRows(tasks)
//      });
//    });
//  }
//
//  componentDidMount() {
//    // start listening for firebase updates
//    this.listenForTasks(this.tasksRef);
//  }
//
//  _renderItem(item) {
//    return (
//      <ListItem item={item} onpress={console.log('clicked!')}/>
//    );
//  }
//
//  render() {
//    const {navigate} = this.props.navigation;
//
//    return (
//      <View>
//        <Text>Candidate 1</Text>
//        <Text>Candidate 2</Text>
//        <Text>Candidate 3</Text>
//        <Text>Candidate 4</Text>
//        <ListView
//          dataSource={this.state.dataSource}
//          renderRow={this._renderItem.bind(this)}
//          enableEmptySections={true}
//          style={styles.listview}/>
//
//        <Button title="Add new Candidate"
//                onPress={() => navigate('CandidatesForm')}/>
//      </View>
//    )
//  }
//
//
//}
//
//export default CandidatesListTrial