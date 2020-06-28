import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {COLORS} from '../../../../constants';

import styles from './move-stats.style';

const MOVE_STATS = {
  POWER: 'move power',
  ACCURACY: 'accuracy',
  PP: 'PP',
};

const EMPTY_STAT_TEXT = 'X';

const MoveStats = ({power, accuracy, pp, moveColor}) => {
  const renderStat = ({label, value, hasBorder = true}) => (
    <View
      style={[
        styles.statContainer,
        {borderRightColor: hasBorder ? COLORS.LIGHT_GRAY : COLORS.TRANSPARENT},
      ]}>
      <Text style={[styles.statLabel, {color: moveColor}]}> {label} </Text>
      <Text style={styles.statValue}> {value || EMPTY_STAT_TEXT} </Text>
    </View>
  );

  return (
    <View style={[styles.container]}>
      {renderStat({label: MOVE_STATS.POWER, value: power})}
      {renderStat({label: MOVE_STATS.ACCURACY, value: accuracy})}
      {renderStat({label: MOVE_STATS.PP, value: pp, hasBorder: false})}
    </View>
  );
};

MoveStats.propTypes = {
  power: PropTypes.number,
  accuracy: PropTypes.number,
  pp: PropTypes.number,
  moveColor: PropTypes.string.isRequired,
};

export {MoveStats};
