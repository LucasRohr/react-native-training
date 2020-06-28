import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Loader} from '../../components';
import {ItemsService} from '../../services';
import {ItemsList} from './components';

import styles from './items.style';

const ItemsScreen = ({navigation}) => {
  const [itemsList, setItemsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getItemsList = async () => {
    setIsLoading(true);
    const result = await ItemsService.getAllItems();

    if (result) {
      setItemsList(result);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getItemsList();
  }, []);

  const navigateToItemDetails = itemId => {
    navigation.navigate('ItemDetailsScreen', {itemId});
  };

  const renderContent = () => (
    <View style={styles.container}>
      <ItemsList itemsList={itemsList} onPressItem={navigateToItemDetails} />
    </View>
  );

  return isLoading ? <Loader /> : renderContent();
};

export {ItemsScreen};
