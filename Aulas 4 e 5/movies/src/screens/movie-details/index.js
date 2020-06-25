import React, {useEffect, useState, useLayoutEffect} from 'react';
import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {MoviesService} from '../../services';
import {Loader, ArtistCard} from '../../components';
import {ScrollView, View, ImageBackground, Text, FlatList} from 'react-native';

import styles from './movie-details.style';

const MovieDetailsScreen = ({route, navigation}) => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const {movieId, movieName} = route.params;

  const getMovie = async () => {
    setIsLoading(true);
    const result = await MoviesService.getMovieById(movieId);

    if (result) {
      setMovie(result);
      setIsLoading(false);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({title: movieName});
  }, []);

  useEffect(() => {
    if (movieId) {
      getMovie();
    }
  }, [movieId]);

  const formatCard = (artists, columns) => {
    const emptySpaces = columns - (artists.length % columns);
    for (let id = 0; id < emptySpaces; id++) {
      artists.push({id: `blank-${id + 1}-${Math.random()}`, empty: true});
    }

    return artists;
  };

  const onArtistCardPress = (artistId, artistName) => {
    navigation.navigate('ArtistsDetailsScreen', {artistId, artistName});
  };

  const renderCast = () => (
    <FlatList
      numColumns={3}
      data={formatCard(movie.cast, 3)}
      showsVerticalScrollIndicator={false}
      keyExtractor={artistItem => artistItem.id}
      renderItem={({item, index}) => {
        return (
          <ArtistCard
            id={item.id}
            name={item.name}
            image={item.profile_path}
            empty={item.empty}
            onPress={onArtistCardPress}
            index={index}
          />
        );
      }}
    />
  );

  const renderContent = () => {
    const renderGenres = () => {
      const genres = movie.genres.map((genre, index) =>
        index !== movie.genres.length - 1
          ? `${genre.name} | `
          : `${genre.name}`,
      );

      return <Text style={styles.genre}> {genres} </Text>;
    };

    const getMovieDuration = runtime => {
      const hours = parseInt(runtime / 60);
      const minutes = runtime - hours * 60;
      return `${hours}h ${minutes}min`;
    };

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.generalInfoContainer}>
            <ImageBackground
              resizeMode="cover"
              style={styles.image}
              source={{uri: movie.backdrop_path}}>
              <LinearGradient
                colors={['transparent', '#FFFFFF']}
                style={styles.gradient}
              />
            </ImageBackground>

            <View style={styles.overviewContainer}>
              {renderGenres()}
              <Text style={(styles.infoText, styles.language)}>
                Language: {movie.original_language.toUpperCase()}
              </Text>

              <View style={styles.releaseAndTimeContainer}>
                <Text style={styles.infoText}> {movie.release_date} </Text>
                <Text style={styles.infoText}>
                  {getMovieDuration(movie.runtime)}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.synopsisContainer}>
            <Text style={styles.synopsisTitle}> Synopsis </Text>
            <Text style={styles.synopsisText}> {movie.overview} </Text>
          </View>

          <View style={styles.castContainer}>
            <View style={styles.castHeaderContainer}>
              <Text style={styles.castTitle}>Cast</Text>
            </View>
            <View style={styles.castListContainer}>{renderCast()}</View>
          </View>
        </View>
      </ScrollView>
    );
  };

  return isLoading ? <Loader /> : renderContent();
};

export {MovieDetailsScreen};
