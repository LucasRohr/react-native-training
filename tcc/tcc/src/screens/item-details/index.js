import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, Image} from 'react-native';
import {ItemsService} from '../../services';
import {Loader, BackButton, CustomIcon} from '../../components';
import {COLORS} from '../../constants';

import styles from './item-details.style';

const ItemDetailsScreen = ({navigation, route}) => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const {itemId} = route.params;

  const getItemById = async () => {
    setIsLoading(true);
    const result = await ItemsService.getItemDetailsById(itemId);

    if (result) {
      setItem(result);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getItemById();
  }, []);

  const renderContent = () => (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.OCEAN_GREEN, COLORS.LIGHT_GREEN]}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={styles.gradient}>
        <View style={styles.backContainer}>
          <BackButton navigation={navigation} />
        </View>

        <View style={styles.content}>
          <Image style={styles.image} source={{uri: item.image}} />

          <Text style={styles.name}>{item.name.replace('-', ' ')}</Text>

          <View style={styles.itemCostContainer}>
            <Text style={styles.cost}> {item.cost} </Text>
            <CustomIcon name="coin" size={20} color={COLORS.GRAY} />
          </View>

          <Text style={styles.effect}>{item.effect.replace('.', '.\n')}</Text>
        </View>
      </LinearGradient>
    </View>
  );

  return isLoading ? <Loader /> : renderContent();
};

export {ItemDetailsScreen};
