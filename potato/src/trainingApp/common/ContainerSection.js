/**
 * Created by Lena on 09.07.2017.
 */
import React from 'react';
import {View} from 'react-native';

const ContainerSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle: {
    flex: 0.5,
    elevation: 10,
    padding: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 10},
    shadowOpacity: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  }
}

export {ContainerSection};