import React, {useState, useEffect, useRef, useMemo} from 'react';
import 'react-native-gesture-handler';
import {FlatList, Animated} from 'react-native';
import {DiscoverService} from '../../services';
import {DiscoverRow, Loader} from '../../components';

import styles from './discover.style';

const DiscoverScreen = ({navigation}) => {
  const [discoveries, setDiscoveries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const animatedValue = useRef(new Animated.Value(0)).current;

  const animation = useMemo(
    () =>
      Animated.spring(animatedValue, {
        toValue: 1,
        tension: 20,
        useNativeDriver: true,
      }),
    [animatedValue],
  );

  const getDiscoveries = async () => {
    setIsLoading(true);
    const result = await DiscoverService.getAllDiscoveries();

    if (result) {
      setIsLoading(false);
      setDiscoveries(result);
      animation.start();
    }
  };

  useEffect(() => {
    getDiscoveries();
  }, [animation]);

  const onCardPress = (movieId, movieName) => {
    navigation.navigate('MovieDetailsScreen', {movieId, movieName});
  };

  const renderDiscoveries = () => (
    <FlatList
      data={discoveries}
      keyExtractor={(item, index) => `key - ${index}`}
      renderItem={({item, index}) => (
        <DiscoverRow
          title={item.title}
          movies={item.movies}
          onPressCard={onCardPress}
          index={index}
          animatedValue={animatedValue}
        />
      )}
    />
  );

  return isLoading ? <Loader /> : renderDiscoveries();
};

export {DiscoverScreen};
