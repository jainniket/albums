import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

const CardSection = (props) => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>);

CardSection.propTypes = {
  children: React.PropTypes.node,
};

export default CardSection;
