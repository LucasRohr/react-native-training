import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {TypeIcon} from '../../../../components';

import styles from './move-item.style';

const EMPTY_POWER_TEXT = 'Nulo';

const MoveItem = ({name, power, type, borderBottomColor, index}) => {
  return (
    <View key={index} style={[styles.moveContainer, {borderBottomColor}]}>
      <View style={styles.moveInfoContainer}>
        <Text style={styles.name}>{name.replace('-', ' ')}</Text>
        <Text style={styles.power}>Poder {power || EMPTY_POWER_TEXT}</Text>
      </View>

      <TypeIcon type={type} />
    </View>
  );
};

MoveItem.propTypes = {
  name: PropTypes.string.isRequired,
  power: PropTypes.number,
  type: PropTypes.string.isRequired,
  borderBottomColor: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export {MoveItem};
