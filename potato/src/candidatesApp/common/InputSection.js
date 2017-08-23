/**
 * Created by Lena on 18.08.2017.
 */
import React from 'react';
import {TextInput, View, Text} from 'react-native';


const InputSection = ({value, onChangeText, title, placeholder, secureTextEntry}) => {
  const {inputStyle, password, textStyle} = styles;
  return (
    <View style={{
      alignItems: 'flex-start',
      alignSelf : 'stretch',
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 15
    }}>
      <Text style={textStyle}>{title}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        password={password}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid='rgba(0,0,0,0)'
      />
    </View>
  );
};

const styles = {
  inputStyle    : {
    color       : '#1d1d1d',
    paddingRight: 5,
    paddingLeft : 5,
    fontSize    : 18,
    lineHeight  : 23,
    alignSelf   : 'stretch',
    backgroundColor: '#fff',
    elevation: 10
  },
  textStyle    : {
    color       : '#3c3c3c',
    fontSize    : 18,
    lineHeight  : 23,
    alignSelf   : 'stretch',
  }
};

export {InputSection};