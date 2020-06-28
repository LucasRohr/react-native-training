import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {CustomIcon} from '../../../../components';

import styles from './item-row.style';
import {COLORS} from '../../../../constants';

const ItemRow = ({item, onPressItem}) => {
  const {id, name, image, cost} = item;

  return (
    <TouchableOpacity onPress={() => onPressItem(id)} style={styles.container}>
      <View style={styles.itemImageNameContainer}>
        <Image style={styles.image} source={{uri: image}} />
        <Text style={styles.name}> {name.replace('-', ' ')} </Text>
      </View>

      <View style={styles.itemCostContainer}>
        <Text style={styles.cost}> {cost} </Text>
        <CustomIcon name="coin" size={20} color={COLORS.DARK_GRAY} />
      </View>
    </TouchableOpacity>
  );
};

ItemRow.defaultProps = {
  item: {},
};

ItemRow.propTypes = {
  item: PropTypes.object.isRequired,
  onPressItem: PropTypes.func.isRequired,
};

export {ItemRow};
