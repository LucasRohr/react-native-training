import React from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';

export const MyIcon = ({size = 25, color = '#000000', onPress, ...props}) => {
  const Icon = createIconSetFromIcoMoon(icoMoonConfig);

  return <Icon size={size} color={color} {...props} onPress={onPress} />;
};
