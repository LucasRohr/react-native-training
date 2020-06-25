import React, {useRef, useEffect} from 'react';
import {TouchableOpacity, Image, Text, View, Animated} from 'react-native';

import styles from './artist-card.style';

const ArtistCard = ({id, image, name, onPress, empty = false, index}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const startAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    startAnimation();
  }, [index, animatedValue]);

  return empty ? (
    <View style={[styles.container, styles.blankCard]} />
  ) : (
    <TouchableOpacity
      onPress={() => onPress(id, name)}
      style={styles.container}>
      <Animated.View style={[styles.animatedContainer, {opacity}]}>
        <View style={styles.imageContainer}>
          <Image source={{uri: image}} style={styles.image} />
        </View>

        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>{name}</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export {ArtistCard};
