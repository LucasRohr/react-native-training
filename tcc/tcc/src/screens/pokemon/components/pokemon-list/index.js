import React from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import {PokemonRow} from '../pokemon-row';

const PokemonList = ({pokemonList, onPressPokemon}) => (
  <FlatList
    data={pokemonList}
    keyExtractor={item => `key - ${item.id}`}
    renderItem={({item, index}) => (
      <PokemonRow
        key={index + 1}
        pokemon={item}
        onPressPokemon={onPressPokemon}
      />
    )}
  />
);

PokemonList.defaultProps = {
  pokemonList: [],
};

PokemonList.propTypes = {
  pokemonList: PropTypes.array.isRequired,
  onPressPokemon: PropTypes.func.isRequired,
};

export {PokemonList};
