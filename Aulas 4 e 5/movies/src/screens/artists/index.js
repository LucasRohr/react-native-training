import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import styles from './artists.style';
import {View, FlatList} from 'react-native';
import {ArtistsService} from '../../services';
import {ArtistCard, Loader} from '../../components';

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

  const onArtistCardPress = (artistId, artistName) => {
    navigation.navigate('ArtistsDetailsScreen', {artistId, artistName});
  };

  const formatCard = (artists, columns) => {
    const emptySpaces = columns - (artists.length % columns);
    for (let id = 0; id < emptySpaces; id++) {
      artists.push({id: `blank-${id + 1}-${Math.random()}`, empty: true});
    }

    return artists;
  };

  const renderCards = () => (
    <View style={styles.listContainer}>
      <FlatList
        numColumns={3}
        data={formatCard(artists, 3)}
        showsVerticalScrollIndicator={false}
        keyExtractor={(artistItem, index) => artistItem.id}
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
    </View>
  );

  return isLoading ? <Loader /> : renderCards();
};

export {ArtistsScreen};
