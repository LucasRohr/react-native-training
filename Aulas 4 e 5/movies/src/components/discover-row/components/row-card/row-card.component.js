import React from 'react';
import styles from './row-card.style';
import {View, TouchableOpacity, Image, Text} from 'react-native';

const RowCard = ({id, image, title, voteAverage, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={{uri: image}} style={styles.image} />
    </View>
    <View style={styles.bottomTextContainer}>
      <Text numberOfLines={2} style={styles.movieTitle}>
        {title}
      </Text>
      <Text style={styles.movieVotes}>Média: {voteAverage}</Text>
    </View>
  </TouchableOpacity>
);

export {RowCard};
