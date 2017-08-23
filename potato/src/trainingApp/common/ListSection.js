/**
 * Created by Lena on 13.08.2017.
 */
import React from 'React'
import {View, Text, TouchableOpacity, Image} from 'react-native'

const ListSection = ({text, uri, width, height, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.ListStyle}>
        <Image source={{uri}}
               style={{width, height}}/>
        <Text style={styles.TextStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}


const styles = {
  ListStyle: {
    padding       : 10,
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

export {ListSection};

//const ListSection = ({uri, imageWidth, imageHeight, text}) => {
//  return (
//    <TouchableOpacity>
//      <View style={styles.ListStyle}>
//        <Image source={{uri: uri}} style={{width: {imageWidth}, height: {imageHeight}}}/>
//        <Text style={styles.TextStyle}>{text}</Text>
//      </View>
//    </TouchableOpacity>
//  )
//}