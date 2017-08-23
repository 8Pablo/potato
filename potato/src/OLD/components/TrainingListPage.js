/**
 * Created by Lena on 14.08.2017.
 */
/**
 * Created by Lena on 12.08.2017.
 */
import React, {Component} from 'react'
import {View, Text, ScrollView} from 'react-native'
import {ListSection} from '../common'

//var width = Dimensions.get('window').width;
//var height = Dimensions.get('window').height / 6;

//List Section nie dziala przekazywane
class TrainingListPage extends Component {
  static navigationOptions = {
    title: <Text style={{alignSelf: 'center', color: "#206C97", fontWeight: 'normal'}}>Trainings</Text>
  }

  render() {
    return (
      <View>
        <ScrollView>
          <Text style={{alignSelf: 'center', paddingTop: 10, color: "#206C97"}}>
            Check what we have prepared for you:
          </Text>
          <View style={styles.RowStyle}>
            <ListSection uri="http://s3.flog.pl/media/foto/5654157_letni-obrazek.jpg"
                         width={150}
                         height={120}
                         text="CROSS FIT"/>
            <ListSection uri="http://s3.flog.pl/media/foto/5654157_letni-obrazek.jpg"
                         width={150}
                         height={120}
                         text="YOGA"/>
          </View>
          <View style={styles.RowStyle}>
            <ListSection uri="http://s3.flog.pl/media/foto/5654157_letni-obrazek.jpg"
                         width={150}
                         height={120}
                         text="FINESS"/>
            <ListSection uri="http://s3.flog.pl/media/foto/5654157_letni-obrazek.jpg"
                         width={150}
                         height={120}
                         text="CARDIO"/>
          </View>
          <View style={styles.RowStyle}>
            <ListSection uri="http://s3.flog.pl/media/foto/5654157_letni-obrazek.jpg"
                         width={150}
                         height={120}
                         text="KICK BOXING"/>
            <ListSection uri="http://s3.flog.pl/media/foto/5654157_letni-obrazek.jpg"
                         width={150}
                         height={120}
                         text="PILATES"/>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  RowStyle : {
    flex         : 1,
    flexDirection: 'row',
    alignSelf    : 'center',
    marginTop    : 5,
    marginBottom : 5
  },
  ListStyle: {
    padding       : 10,
    marginLeft    : 5,
    marginRight   : 5,
    flexDirection : 'column',
    alignItems    : 'center',
    justifyContent: 'center',
    alignSelf     : 'center'
  },
  TextStyle: {
    color    : "#206C97",
    alignSelf: 'center',
    padding  : 5
  }
}

export default TrainingListPage;

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