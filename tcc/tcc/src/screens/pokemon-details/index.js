import React, {useState, useEffect} from 'react';
import {Loader, BackButton, TypeTag} from '../../components';
import {PokemonService} from '../../services';
import {View, Image, Text} from 'react-native';

import styles from './pokemon-details.style';
import {POKEMON_TYPES} from '../../constants';

const PokemonDetailsScreen = ({route, navigation}) => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {pokemonId} = route.params;

  const getPokemonById = async () => {
    setIsLoading(true);
    const result = await PokemonService.getPokemonDetailsById(pokemonId);

    if (result) {
      setPokemon(result);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPokemonById();
  }, []);

  const renderTypesTags = () => (
    <View style={styles.tagsContainer}>
      {pokemon.types.map(type => (
        <TypeTag type={type} />
      ))}
    </View>
  );

  const renderContent = () => (
    <View
      style={[
        styles.container,
        {backgroundColor: POKEMON_TYPES[pokemon.types[0].toUpperCase()].color},
      ]}>
      <View style={styles.backContainer}>
        <BackButton navigation={navigation} />
      </View>

      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: pokemon.image}} />
        </View>

        <View style={styles.nameTypeContainer}>
          <Text style={styles.name}>{pokemon.name}</Text>

          {renderTypesTags()}
        </View>

        <Text style={styles.description}>{pokemon.description}</Text>
      </View>
    </View>
  );

  return isLoading ? <Loader /> : renderContent();
};

export {PokemonDetailsScreen};
