import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Loader} from '../../components';
import {MovesService} from '../../services';
import {MovesList} from './components';

import styles from './moves.style';

const MovesScreen = ({navigation}) => {
  const [movesList, setMovesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMovesList = async () => {
    setIsLoading(true);
    const result = await MovesService.getAllMoves();

    if (result) {
      setMovesList(result);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovesList();
  }, []);

  const navigateToMoveDetails = moveId => {
    navigation.navigate('MoveDetailsScreen', {moveId});
  };

  const renderContent = () => (
    <View style={styles.container}>
      <MovesList movesList={movesList} onPressMove={navigateToMoveDetails} />
    </View>
  );

  return isLoading ? <Loader /> : renderContent();
};

export {MovesScreen};
