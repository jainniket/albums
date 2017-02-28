import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Button = ({ onPress, children }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.buttonStyle}
  >
    <Text style={styles.textStyle}>
      {children}
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: React.PropTypes.func,
  children: React.PropTypes.node,
};

export default Button;
