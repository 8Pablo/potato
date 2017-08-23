/**
 * Created by Lena on 10.07.2017.
 */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {

  const {buttonStyle, textStyle} = styles;

  return (
    <TouchableOpacity style={buttonStyle}>
      <Text onPress={onPress} style={textStyle}>{children}</Text>
    </TouchableOpacity>
  )
};

  const styles = {
    textStyle  : {
      alignSelf    : 'center',
      color        : '#fff',
      fontSize     : 15,
      fontWeight   : '400',
      paddingTop   : 10,
      paddingBottom: 10,
    },
    buttonStyle: {
      backgroundColor: 'transparent',
      padding: 5,
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: {width: 5, height: 10},
      shadowOpacity: 0.5,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      position: 'relative',
    }
  }

export {Button};