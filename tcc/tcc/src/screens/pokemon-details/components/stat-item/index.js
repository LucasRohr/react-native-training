import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {STATS} from '../../../../constants';
import {hexToRGB} from '../../../../helpers';

import styles from './stat-item.style';

const MIN_STAT_LENGTH = 1;
const MED_STAT_LENGTH = 2;

const StatItem = ({stat, value, pokemonColor, index}) => {
  const formatStat = stat => {
    const stringStat = stat.toString();

    if (stringStat.length === MIN_STAT_LENGTH) {
      return `00${stringStat}`;
    } else if (stringStat.length === MED_STAT_LENGTH) {
      return `0${stringStat}`;
    }

    return `${stringStat}`;
  };

  return (
    <View style={styles.statContainer} key={index}>
      <View style={styles.statInfoContainer}>
        <Text style={[styles.statName, {color: pokemonColor}]}>
          {STATS[stat]}
        </Text>
        <Text style={styles.statValue}> {formatStat(value)} </Text>
      </View>

      <View style={styles.statBarContainer}>
        <LinearGradient
          colors={[
            hexToRGB({hex: pokemonColor, whiteAdditional: 45}),
            pokemonColor,
          ]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={[styles.gradient, {width: `${(value * 100) / 110}%`}]}>
          <View style={[styles.statBar, {width: `${(value * 100) / 110}%`}]} />
        </LinearGradient>
      </View>
    </View>
  );
};

StatItem.propTypes = {
  stat: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  pokemonColor: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export {StatItem};
