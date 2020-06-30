import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import styles from './ability-item.style';

const AbilityItem = ({name, effect, pokemonColor, index}) => {
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

AbilityItem.propTypes = {
  name: PropTypes.string.isRequired,
  effect: PropTypes.string.isRequired,
  pokemonColor: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export {AbilityItem};
