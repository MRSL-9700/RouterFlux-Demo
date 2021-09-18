import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
  const {cardWrapper} = CardStyle; /* Css */
  return <View style={cardWrapper}>{props.children}</View>;
};

const CardStyle = StyleSheet.create({
  cardWrapper: {
    width: 'auto',
    height: 'auto',
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 10,
    padding: 15,
    margin: 20,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export {Card};
