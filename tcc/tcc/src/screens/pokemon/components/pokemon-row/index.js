import React from 'react';
import PropTypes from 'prop-types';
import {Image, View, Text, TouchableHighlight} from 'react-native';
import {TypeIcon} from '../../../../components';

import styles from './pokemon-row.style';
import {POKEMON_TYPES} from '../../../../constants';

const MIN_ID_LENGTH = 1;
const MED_ID_LENGTH = 2;

const PokemonRow = ({pokemon, onPressPokemon}) => {
  const {id, name, types, image} = pokemon;

  const formatPokemonId = () => {
    if (id.length === MIN_ID_LENGTH) {
      return `#00${id}`;
    } else if (id.length === MED_ID_LENGTH) {
      return `#0${id}`;
    }

    return `#${id}`;
  };

  const renderTypeIcons = () =>
    types.map((type, index) => <TypeIcon key={index + 1} type={type} />);

  return (
    <TouchableHighlight
      onPress={() => onPressPokemon(id)}
      style={styles.container}
      underlayColor={POKEMON_TYPES[types[0].toUpperCase()].color}>
      <>
        <View style={styles.pokemonContent}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: image}} />
          </View>

          <View style={styles.pokemonInfoContainer}>
            <Text style={styles.name}> {name} </Text>
            <Text style={styles.id}> {formatPokemonId()} </Text>
          </View>
        </View>

        <View style={styles.typesContainer}>{renderTypeIcons()}</View>
      </>
    </TouchableHighlight>
  );
};

PokemonRow.defaultProps = {
  pokemon: {},
};

PokemonRow.propTypes = {
  pokemon: PropTypes.object.isRequired,
  onPressPokemon: PropTypes.func.isRequired,
};

export {PokemonRow};
