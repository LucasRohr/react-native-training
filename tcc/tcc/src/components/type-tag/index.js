import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {POKEMON_TYPES, COLORS} from '../../constants';
import {CustomIcon} from '../custom-icon';

import styles from './type-tag.style';

const TypeTag = ({type}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: POKEMON_TYPES[type.toUpperCase()].color,
        },
      ]}>
      <CustomIcon name={type} size={15} color={COLORS.WHITE} />
      <Text style={styles.type}> {type} </Text>
    </View>
  );
};

TypeTag.propTypes = {
  type: PropTypes.string.isRequired,
};

export {TypeTag};
