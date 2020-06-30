import React from 'react';
import PropTypes from 'prop-types';
import {View, FlatList} from 'react-native';

import styles from './stats.style';
import {StatItem} from '../stat-item';

const Stats = ({stats, pokemonColor}) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={stats}
        keyExtractor={(item, index) => `key - ${index + 1}`}
        renderItem={({item, index}) => (
          <StatItem
            stat={item.name}
            value={item.value}
            pokemonColor={pokemonColor}
            index={index + 1}
          />
        )}
      />
    </View>
  );
};

Stats.propTypes = {
  stats: PropTypes.array.isRequired,
  pokemonColor: PropTypes.string.isRequired,
};

export {Stats};
