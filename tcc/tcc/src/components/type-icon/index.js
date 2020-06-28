import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {POKEMON_TYPES, COLORS} from '../../constants';
import {CustomIcon} from '../custom-icon';

import styles from './type-icon.style';

const TypeIcon = ({additionalStyle, iconSize, type}) => (
  <View
    style={[
      styles.container,
      additionalStyle,
      {
        backgroundColor: POKEMON_TYPES[type.toUpperCase()].color,
        shadowColor: POKEMON_TYPES[type.toUpperCase()].color,
      },
    ]}>
    <CustomIcon name={type} size={iconSize} color={COLORS.WHITE} />
  </View>
);

TypeIcon.defaultProps = {
  iconSize: 15,
};

TypeIcon.propTypes = {
  type: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
  additionalStyle: PropTypes.object,
};

export {TypeIcon};
