import React, {useEffect, useState, useLayoutEffect} from 'react';
import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, ScrollView, ImageBackground} from 'react-native';
import {ArtistsService} from '../../services';
import {Loader} from '../../components';

import styles from './artists-details.style';

const ArtistsDetailsScreen = ({route, navigation}) => {
  const [artist, setArtist] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const {artistId, artistName} = route.params;

  const getArtist = async () => {
    setIsLoading(true);
    const result = await ArtistsService.getArtistById(artistId);

    if (result) {
      setArtist(result);
      setIsLoading(false);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({title: artistName});
  }, []);

  useEffect(() => {
    if (artistId) {
      getArtist();
    }
  }, [artistId]);

  const renderArtistOverview = () => (
    <Text style={styles.overview}>
      {artist.known_for_department} | {artist.birthday}
    </Text>
  );

  const renderContent = () => (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.generalInfoContainer}>
          <ImageBackground
            resizeMode="cover"
            style={styles.image}
            source={{uri: artist.profile_path}}>
            <LinearGradient
              colors={['transparent', '#333333']}
              style={styles.gradient}
            />
          </ImageBackground>

          <View style={styles.overviewContainer}>
            <Text style={styles.name}>{artist.name}</Text>
            {renderArtistOverview()}
          </View>
        </View>

        <View style={styles.summaryHeader}>
          <Text style={styles.summaryText}>Summary</Text>
        </View>

        <View style={styles.summaryContainer}>
          <Text style={[styles.text, styles.placeOfBirth]}>
            {artist.place_of_birth}
          </Text>
          <Text style={styles.text}> {artist.biography} </Text>
        </View>
      </View>
    </ScrollView>
  );

  return isLoading ? <Loader /> : renderContent();
};

export {ArtistsDetailsScreen};
