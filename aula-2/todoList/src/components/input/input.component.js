import React from 'react';
import styles from './input.style';
import {TextInput} from 'react-native';

const Input = ({
  additionalStyle,
  placeholder,
  placeholderTextColor,
  onChangeText,
  ...props
}) => (
  <TextInput
    placeholder={placeholder}
    placeholderTextColor={placeholderTextColor}
    style={[styles.input, additionalStyle]}
    onChangeText={onChangeText}
    {...props}
  />
);

export {Input};
