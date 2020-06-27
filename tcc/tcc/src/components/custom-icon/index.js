import React from 'react';
import PropTypes from 'prop-types';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
import {COLORS, noopFunction} from '../../constants';

const CustomIcon = ({size, color, onPress, ...props}) => {
  const Icon = createIconSetFromIcoMoon(icoMoonConfig);

  return <Icon size={size} color={color} {...props} onPress={onPress} />;
};

CustomIcon.defaultProps = {
  size: 25,
  color: COLORS.BLACK,
  onPress: noopFunction,
};

CustomIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export {CustomIcon};