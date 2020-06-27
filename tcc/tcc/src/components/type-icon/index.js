import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {POKEMON_TYPES, COLORS} from '../../constants';
import {CustomIcon} from '../custom-icon';

import styles from './type-icon.style';

const TypeIcon = ({type}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: POKEMON_TYPES[type.toUpperCase()].color,
          shadowColor: POKEMON_TYPES[type.toUpperCase()].color,
        },
      ]}>
      <CustomIcon name={type} size={15} color={COLORS.WHITE} />
    </View>
  );
};

TypeIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export {TypeIcon};
