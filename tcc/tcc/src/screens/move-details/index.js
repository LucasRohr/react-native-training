import React, {useState, useEffect, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text} from 'react-native';
import {MovesService} from '../../services';
import {Loader, BackButton, TypeIcon, TypeTag} from '../../components';
import {POKEMON_TYPES} from '../../constants';
import {MoveStats} from './components';
import {hexToRGB} from '../../helpers';

import styles from './move-details.style';

const MoveDetailsScreen = ({navigation, route}) => {
  const [move, setMove] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const {moveId} = route.params;
  const moveColor = move && POKEMON_TYPES[move.type.name.toUpperCase()].color;

  const getMoveById = async () => {
    setIsLoading(true);
    const result = await MovesService.getMoveDetailsById(moveId);

    if (result) {
      setMove(result);
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      const parent = navigation.dangerouslyGetParent();
      if (parent) {
        parent.setOptions({
          tabBarVisible: false,
        });
      }

      return () => {
        if (parent) {
          parent.setOptions({
            tabBarVisible: true,
          });
        }
      };
    }, [navigation.dangerouslyGetParent]),
  );

  useEffect(() => {
    getMoveById();
  }, []);

  const renderContent = () => (
    <View style={[styles.container, {backgroundColor: moveColor}]}>
      <LinearGradient
        colors={[moveColor, hexToRGB({hex: moveColor, whiteAdditional: 50})]}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={styles.gradient}>
        <View style={styles.backContainer}>
          <BackButton navigation={navigation} />
        </View>

        <TypeIcon
          additionalStyle={styles.typeIcon}
          iconSize={30}
          type={move.type.name}
        />

        <View style={styles.content}>
          <View style={styles.nameTypeContainer}>
            <Text style={styles.name}>{move.name.replace('-', ' ')}</Text>
            <TypeTag type={move.type.name} />
          </View>

          <Text style={styles.effect}>{move.effect}</Text>

          <MoveStats
            power={move.power}
            accuracy={move.accuracy}
            pp={move.pp}
            moveColor={moveColor}
          />
        </View>
      </LinearGradient>
    </View>
  );

  return isLoading ? <Loader /> : renderContent();
};

export {MoveDetailsScreen};
