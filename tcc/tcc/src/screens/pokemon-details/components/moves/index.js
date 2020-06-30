import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';
import {MoveItem} from '../move-item';
import {COLORS} from '../../../../constants';

import styles from './moves.style';

const Moves = ({moves}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={moves}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `key - ${index + 1}`}
        renderItem={({item, index}) => (
          <MoveItem
            name={item.name}
            power={item.power}
            type={item.type.name}
            borderBottomColor={
              index !== moves.length ? COLORS.LIGHT_GRAY : COLORS.TRANSPARENT
            }
            index={index + 1}
          />
        )}
      />
    </View>
  );
};

Moves.propTypes = {
  moves: PropTypes.array.isRequired,
};

export {Moves};
