import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const Spinner = () => {
  return (
    <View style={style.Spinner}>
      <ActivityIndicator size="large" color="#6E60AD" />
    </View>
  );
};

const style = StyleSheet.create({
  Spinner: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    width: '100%',
    backgroundColor: 'transparent',
    margin: 10,
  },
});

export {Spinner};
