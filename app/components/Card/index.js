import React from 'react';
import { View } from 'react-native';
import {styles} from './styles';

const Card = (props) => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);

Card.propTypes = {
  children: React.PropTypes.node,
};

export default Card;
