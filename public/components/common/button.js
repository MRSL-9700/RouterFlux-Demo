import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

const Buton = ({title, onPress}) => {
  return (
    <View style={btn.ButtonStyle}>
      <Button
        style={btn.ButtonTypeStyle}
        /* color="rgba(255,0,0,0.7)" */
        onPress={onPress}
        title={title}
        accessibilityLabel="Test"
      />
    </View>
  );
};

const btn = StyleSheet.create({
  ButtonStyle: {
    width: '40%',
    borderRadius: 20,
    height: 'auto',
    margin: 15,
    marginHorizontal: 2.5,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  ButtonTypeStyle: {
    height: '100%',
    backgroundColor: 'rgba(255,0,0,0.7)',
  },
});

export {Buton};
