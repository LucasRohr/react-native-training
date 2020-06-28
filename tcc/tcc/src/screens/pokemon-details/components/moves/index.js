import React from 'react';
import PropTypes from 'prop-types';
import {Text, FlatList, View} from 'react-native';

import styles from './moves.style';
import {TypeIcon} from '../../../../components';
import {COLORS} from '../../../../constants';

const Moves = ({moves}) => {
  const renderMove = ({name, power, type, index}) => {
    return (
      <View
        key={index}
        style={[
          styles.moveContainer,
          {
            borderBottomColor:
              index !== moves.length ? COLORS.LIGHT_GRAY : COLORS.TRANSPARENT,
          },
        ]}>
        <View style={styles.moveInfoContainer}>
          <Text style={styles.name}>{name.replace('-', ' ')}</Text>
          <Text style={styles.power}>Poder {power}</Text>
        </View>

        <TypeIcon type={type} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={moves}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `key - ${index + 1}`}
        renderItem={({item, index}) =>
          renderMove({
            name: item.name,
            power: item.power,
            type: item.type.name,
            index: index + 1,
          })
        }
      />
    </View>
  );
};

Moves.propTypes = {
  moves: PropTypes.array.isRequired,
};

export {Moves};
