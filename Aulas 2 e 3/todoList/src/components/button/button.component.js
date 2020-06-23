import React from 'react';
import styles from './button.style';
import {TouchableOpacity, Text} from 'react-native';

const Button = ({title, onPress, ...props}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.6}
    style={styles.button}
    {...props}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export {Button};
