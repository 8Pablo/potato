/**
 * Created by Lena on 12.08.2017.
 */
import React, {Component} from 'react'
import {View, Text, ScrollView, Button} from 'react-native'
import {ListSection} from '../common'


//var width = Dimensions.get('window').width;
//var height = Dimensions.get('window').height / 6;

//List Section nie dziala przekazywane
class MainPage extends Component {
  static navigationOptions = {
    title: "Welcome",
    headerRight: <Button title="Menu"/>,
    headerLeft : null
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View>
        <ScrollView>
          <Text style={{alignSelf: 'center', paddingTop: 10, color: "#206C97"}}>
            Check what we have prepared for you:
          </Text>
          <ListSection uri="http://s3.flog.pl/media/foto/5654157_letni-obrazek.jpg"
                       width={350}
                       height={120}
                       text="TRAINING"
                       onPress={() => navigate('TrainingList')}/>
          <ListSection uri="http://s3.flog.pl/media/foto/5654157_letni-obrazek.jpg"
                       width={350}
                       height={120}
                       text="NUTRITION"/>
          <ListSection uri="http://s3.flog.pl/media/foto/5654157_letni-obrazek.jpg"
                       width={350}
                       height={120}
                       text="FORUM"/>
        </ScrollView>
      </View>
    )
  }
}

export default MainPage;

//http://s3.flog.pl/media/foto/5654157_letni-obrazek.jpg

//<View style={styles.ListStyle}>
//  <Image source={{uri: 'http://s3.flog.pl/media/foto/5654157_letni-obrazek.jpg'}}
//         style={{padding: 10, width: {width}, height: {height}}}/>
//  <Text style={styles.TextStyle}>Trainings</Text>
//</View>


//<ListSection uri="http://s3.flog.pl/media/foto/5654157_letni-obrazek.jpg"
//             imageHeight='80'
//             imageWidth='350'
//             text="Nutrition"/>

//title: <Text style={{alignSelf: 'center', color: "#206C97", fontWeight: 'normal'}}>Welcome</Text>,