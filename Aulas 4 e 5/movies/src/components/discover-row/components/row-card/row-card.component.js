import React from 'react';
import styles from './row-card.style';
import {View, TouchableOpacity, Image, Text, Animated} from 'react-native';

const RowCard = ({
  id,
  image,
  title,
  voteAverage,
  onPress,
  index,
  animatedValue,
}) => {
  const initialTranslation = (index + 1) * 250;
  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [initialTranslation, 2],
  });

  const animationStyle = {
    transform: [{translateX}],
    opacity: animatedValue,
  };

  return (
    <Animated.View style={animationStyle}>
      <TouchableOpacity
        onPress={() => onPress(id, title)}
        style={styles.container}>
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
    </Animated.View>
  );
};

export {RowCard};
