import React from 'react';
import styles from './button.style';
import {TouchableOpacity, Text} from 'react-native';

const Button = ({title, onPress}) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={styles.button}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export {Button};
