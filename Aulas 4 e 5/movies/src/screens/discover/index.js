import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {View, ActivityIndicator, FlatList} from 'react-native';
import {DiscoverService} from '../../services';
import {DiscoverRow} from '../../components/discover-row/discover-row.component';

import styles from './discover.style';

const DiscoverScreen = ({navigation}) => {
  const [discoveries, setDiscoveries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getDiscoveries = async () => {
    setIsLoading(true);
    const result = await DiscoverService.getAllDiscoveries();

    if (result) {
      setIsLoading(false);
      setDiscoveries(result);
    }
  };

  useEffect(() => {
    getDiscoveries();
  }, []);

  function onCardPress() {
    navigation.navigate('MovieDetailsScreen');
  }

  const renderLoader = () => (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" />
    </View>
  );

  const renderDiscoveries = () => (
    <FlatList
      data={discoveries}
      keyExtractor={(item, index) => `key - ${index}`}
      renderItem={({item}) => (
        <DiscoverRow
          title={item.title}
          movies={item.movies}
          onPressCard={onCardPress}
        />
      )}
    />
  );

  return isLoading ? renderLoader() : renderDiscoveries();
};

export {DiscoverScreen};
