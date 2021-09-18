import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import {Actions} from 'react-native-router-flux';

class About extends Component {
  render() {
    return (
      <View style={AboutStyles.View}>
        <Text>About</Text>
        <Button
          onPress={() => {
            Actions.home();
          }}
          title="Home"
        />
      </View>
    );
  }
}

const AboutStyles = StyleSheet.create({
  View: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {},
});

export default About;
