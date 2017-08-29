/**
 * Created by Lena on 29.08.2017.
 */
/**
 * Created by Lena on 28.08.2017.
 */
import React from 'react';
import {View, Text} from 'react-native';


const PreviewText = ({value, title}) => {
  const {detailStyle, titleStyle} = styles;
  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      alignSelf : 'stretch',
      marginLeft: 15,
      marginRight: 15,
      margin: 10
    }}>
      <Text style={titleStyle}>{title}: </Text>
      <Text style={detailStyle}>{value}</Text>
    </View>
  );
};

const styles = {
  detailStyle    : {
    color       : '#1d1d1d',
    paddingRight: 5,
    paddingLeft : 5,
    fontSize    : 18,
    lineHeight  : 23,
    flex: 1.5,
    elevation: 10,
    alignSelf: 'center'
  },
  titleStyle    : {
    color       : '#3c3c3c',
    fontSize    : 18,
    lineHeight  : 23,
    flex: 1,
    alignSelf: 'center',
    fontWeight: 'bold',
  }
};

export {PreviewText};