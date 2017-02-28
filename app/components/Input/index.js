import React from 'react';
import { TextInput, View, Text } from 'react-native';
import {styles} from './styles';

const Input = ({ placeholder, secureTextEntry, label, value, onChangeText, autoCorrect }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={autoCorrect}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

Input.propTypes = {
  placeholder: React.PropTypes.string,
  secureTextEntry: React.PropTypes.bool,
  label: React.PropTypes.string,
  value: React.PropTypes.string,
  onChangeText: React.PropTypes.func,
  autoCorrect: React.PropTypes.bool,
};

export default Input;
