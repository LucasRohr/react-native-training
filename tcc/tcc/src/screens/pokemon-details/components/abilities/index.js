import React from 'react';
import PropTypes from 'prop-types';
import {Text, FlatList, View} from 'react-native';

import styles from './abilities.style';

const Abilities = ({abilities, pokemonColor}) => {
  const renderAbility = ({name, effect, index}) => {
    return (
      <View key={index} style={styles.abilityContainer}>
        <View style={styles.abilityInfoContainer}>
          <Text style={[styles.name, {color: pokemonColor}]}>
            {name.replace('-', ' ')}
          </Text>
          <Text style={styles.effect}> {effect}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={abilities}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `key - ${index + 1}`}
        renderItem={({item, index}) =>
          renderAbility({
            name: item.name,
            effect: item.effect,
            index: index + 1,
          })
        }
      />
    </View>
  );
};

Abilities.propTypes = {
  abilities: PropTypes.array.isRequired,
  pokemonColor: PropTypes.string.isRequired,
};

export {Abilities};
