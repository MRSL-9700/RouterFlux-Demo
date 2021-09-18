import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Buton} from '../components/common';
class Home extends Component {
  render() {
    const {
      title = 'About',
      onPress = () => {
        Actions.about();
      },
    } = Buton;
    return (
      <View style={HomeStyles.View}>
        <Text>Home</Text>
        <Button onPress={onPress} title={title} />
      </View>
    );
  }
}

const HomeStyles = StyleSheet.create({
  View: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {},
});

export default Home;
