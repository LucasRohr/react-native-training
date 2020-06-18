import React from 'react';
import styles from './input.style';
import {TextInput} from 'react-native';

const Input = ({placeholder, placeholderTextColor, onChangeText}) => (
  <TextInput
    placeholder={placeholder}
    placeholderTextColor={placeholderTextColor}
    style={styles.input}
    onChangeText={onChangeText}
  />
);

export {Input};
