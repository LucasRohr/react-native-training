import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Loader, BackButton, TypeTag} from '../../components';
import {PokemonService} from '../../services';
import {View, Image, Text} from 'react-native';
import {POKEMON_TYPES} from '../../constants';
import {Tabs} from './components';

import styles from './pokemon-details.style';

const PokemonDetailsScreen = ({route, navigation}) => {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
      {pokemon.types.map((type, index) => (
        <TypeTag key={index + 1} type={type} />
      ))}
    </View>
  );

  const renderContent = () => (
    <View
      style={[
        styles.container,
        {backgroundColor: POKEMON_TYPES[pokemon.types[0].toUpperCase()].color},
      ]}>
      <LinearGradient
        colors={[
          POKEMON_TYPES[pokemon.types[0].toUpperCase()].color,
          POKEMON_TYPES[pokemon.types[0].toUpperCase()].color,
        ]}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={styles.gradient}>
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

          <Tabs pokemon={pokemon} />
        </View>
      </LinearGradient>
    </View>
  );

  return !pokemon ? <Loader /> : renderContent();
};

export {PokemonDetailsScreen};
