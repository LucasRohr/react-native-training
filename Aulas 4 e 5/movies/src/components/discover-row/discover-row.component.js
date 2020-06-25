import React from 'react';
import styles from './discover-row.style';
import {View, Text, FlatList} from 'react-native';
import {RowCard} from './components';

const DiscoverRow = ({title, movies, onPressCard, index, animatedValue}) => (
  <View style={styles.container}>
    <Text style={styles.title}> {title} </Text>
    <FlatList
      horizontal
      data={movies}
      showsHorizontalScrollIndicator={false}
      keyExtractor={discoverItem => `key - ${discoverItem.id}`}
      renderItem={({item}) => (
        <RowCard
          id={item.id}
          image={item.poster_path}
          title={item.title}
          voteAverage={item.vote_average}
          onPress={onPressCard}
          index={index}
          animatedValue={animatedValue}
        />
      )}
    />
  </View>
);

export {DiscoverRow};
