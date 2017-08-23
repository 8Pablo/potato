/**
 * Created by Lena on 14.07.2017.
 */
import React from 'react';
import {TextInput, View} from 'react-native';

const Input = ({value, onChangeText, placeholder, secureTextEntry}) => {
  const {inputStyle, containerStyle, password} = styles;
  return (
    <View style={containerStyle}>
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
  inputStyle: {
    color: '#1d1d1d',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight:23,
    flex: 2,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  }
};

export {Input};