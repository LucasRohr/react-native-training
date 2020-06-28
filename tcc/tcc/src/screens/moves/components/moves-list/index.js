import React from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import {MoveRow} from '../move-row';

const MovesList = ({movesList, onPressMove}) => (
  <FlatList
    data={movesList}
    showsVerticalScrollIndicator={false}
    keyExtractor={item => `key - ${item.id}`}
    renderItem={({item, index}) => (
      <MoveRow key={index + 1} move={item} onPressMove={onPressMove} />
    )}
  />
);

MovesList.defaultProps = {
  movesList: [],
};

MovesList.propTypes = {
  movesList: PropTypes.array.isRequired,
  onPressMove: PropTypes.func.isRequired,
};

export {MovesList};
