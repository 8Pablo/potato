/**
 * Created by Lena on 21.08.2017.
 */
import React, {Component} from 'React';
import {Text, View} from 'react-native';



class ListItem extends Component {

  render() {
    const {name} = this.props.candidate;

    return (
        <View>
          <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </View>
        </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize   : 18,
    paddingLeft: 15
  },
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
export {ListItem};