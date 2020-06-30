import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';

import styles from './abilities.style';
import {AbilityItem} from '../ability-item';

const Abilities = ({abilities, pokemonColor}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={abilities}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `key - ${index + 1}`}
        renderItem={({item, index}) => (
          <AbilityItem
            name={item.name}
            effect={item.effect}
            pokemonColor={pokemonColor}
            index={index + 1}
          />
        )}
      />
    </View>
  );
};

Abilities.propTypes = {
  abilities: PropTypes.array.isRequired,
  pokemonColor: PropTypes.string.isRequired,
};

export {Abilities};
