import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Loader} from '../../components';
import {PokemonService} from '../../services';
import {PokemonList} from './components';

import styles from './pokemon.styles';

const PokemonScreen = ({navigation}) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPokemonList = async () => {
    setIsLoading(true);
    const result = await PokemonService.getAllPokemon();

    if (result) {
      setPokemonList(result.pokemons);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  const navigateToPokemonDetails = pokemonId => {
    navigation.navigate('PokemonDetailsScreen', {pokemonId});
  };

  const renderContent = () => (
    <View style={styles.container}>
      <PokemonList
        pokemonList={pokemonList}
        onPressPokemon={navigateToPokemonDetails}
      />
    </View>
  );

  return isLoading ? <Loader /> : renderContent();
};

export {PokemonScreen};
