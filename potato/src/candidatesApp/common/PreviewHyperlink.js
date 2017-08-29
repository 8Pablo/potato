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
      flexDirection: 'row',
      alignItems: 'flex-start',
      alignSelf : 'stretch',
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 15
    }}>
      <Text style={titleStyle}>{title}</Text>
      <Hyperlink>
        <Text         style={detailStyle}
                      value={value}/>
      </Hyperlink>
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
    flex: 3,
    elevation: 10
  },
  titleStyle    : {
    color       : '#3c3c3c',
    fontSize    : 18,
    lineHeight  : 23,
    flex: 1,
    alignSelf: 'center',
    fontWeight: 3,
  }
};

export {PreviewHyperlink};