/**
 * Created by Lena on 29.08.2017.
 */
/**
 * Created by Lena on 29.08.2017.
 */
/**
 * Created by Lena on 28.08.2017.
 */
import React from 'react';
import {View, Text} from 'react-native';
import Hyperlink from 'react-native-hyperlink'


const PreviewHyperlink = ({value, title}) => {
  const {detailStyle, titleStyle} = styles;
  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      alignSelf : 'stretch',
      marginLeft: 15,
      marginRight: 15,
      margin: 10
    }}>
      <Text style={titleStyle}>{title}</Text>
      <Hyperlink linkDefault={true}>
        <Text  style={detailStyle}>{value}</Text>
      </Hyperlink>
    </View>
  );
};

const styles = {
  detailStyle    : {
    paddingRight: 5,
    paddingLeft : 5,
    fontSize    : 18,
    lineHeight  : 23,
    flex: 1.5,
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


export {PreviewHyperlink};