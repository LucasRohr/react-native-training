import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import styles from './artists.style';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {ArtistsService} from '../../services';
import {ArtistCard} from '../../components';

const ArtistsScreen = ({navigation}) => {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getArtists = async () => {
    setIsLoading(true);
    const result = await ArtistsService.getAllArtists();

    if (result) {
      setIsLoading(false);
      setArtists(result);
    }
  };

  useEffect(() => {
    getArtists();
  }, []);

  const onArtistCardPress = () => {
    navigation.navigate('ArtistsDetailsScreen');
  };

  const formatCard = columns => {
    const emptySpaces = columns - (artists.length % columns);
    for (let id = 0; id < emptySpaces; id++) {
      artists.push({id: `blank-${id + 1}-${Math.random()}`, empty: true});
    }

    return artists;
  };

  const renderLoader = () => (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" />
    </View>
  );

  const renderCards = () => (
    <View style={styles.listContainer}>
      <FlatList
        numColumns={3}
        data={formatCard(3)}
        showsVerticalScrollIndicator={false}
        keyExtractor={(artistItem, index) => artistItem.id}
        renderItem={({item}) => {
          return (
            <ArtistCard
              name={item.name}
              image={item.profile_path}
              empty={item.empty}
              onPress={onArtistCardPress}
            />
          );
        }}
      />
    </View>
  );

  return isLoading ? renderLoader() : renderCards();
};

export {ArtistsScreen};
