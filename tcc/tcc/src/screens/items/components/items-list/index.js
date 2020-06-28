import React from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import {ItemRow} from '../item-row';

const ItemsList = ({itemsList, onPressItem}) => (
  <FlatList
    data={itemsList}
    showsVerticalScrollIndicator={false}
    keyExtractor={item => `key - ${item.id}`}
    renderItem={({item, index}) => (
      <ItemRow key={index + 1} item={item} onPressItem={onPressItem} />
    )}
  />
);

ItemsList.defaultProps = {
  itemsList: [],
};

ItemsList.propTypes = {
  itemsList: PropTypes.array.isRequired,
  onPressItem: PropTypes.func.isRequired,
};

export {ItemsList};
