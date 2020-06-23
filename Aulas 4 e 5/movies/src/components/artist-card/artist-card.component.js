import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';

import styles from './artist-card.style';

const ArtistCard = ({image, name, onPress, empty = false}) => {
  return empty ? (
    <View style={[styles.container, styles.blankCard]} />
  ) : (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {ArtistCard};
