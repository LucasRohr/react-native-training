import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, STATS} from '../../../../constants';

import styles from './stats.style';

const MIN_STAT_LENGTH = 1;
const MED_STAT_LENGTH = 2;

const Stats = ({stats, pokemonColor}) => {
  const formatStat = stat => {
    const stringStat = stat.toString();

    if (stringStat.length === MIN_STAT_LENGTH) {
      return `00${stringStat}`;
    } else if (stringStat.length === MED_STAT_LENGTH) {
      return `0${stringStat}`;
    }

    return `${stringStat}`;
  };

  const renderStat = ({stat, value, key}) => (
    <View style={styles.statContainer} key={key}>
      <View style={styles.statInfoContainer}>
        <Text style={[styles.statName, {color: pokemonColor}]}>
          {STATS[stat]}
        </Text>
        <Text style={styles.statValue}> {formatStat(value)} </Text>
      </View>

      <View style={styles.statBarContainer}>
        <LinearGradient
          colors={[COLORS.LIGHT_GRAY, pokemonColor]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={[styles.gradient, {width: `${value}%`}]}>
          <View style={[styles.statBar, {width: `${value}%`}]} />
        </LinearGradient>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={stats}
        keyExtractor={(item, index) => `key - ${index + 1}`}
        renderItem={({item, index}) =>
          renderStat({stat: item.name, value: item.value, key: index + 1})
        }
      />
    </View>
  );
};

Stats.propTypes = {
  stats: PropTypes.array.isRequired,
  pokemonColor: PropTypes.string.isRequired,
};

export {Stats};
