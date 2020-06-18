import React from 'react';
import styles from './list-item.style';
import {View, Text} from 'react-native';
import {MyIcon} from '../../../my-icon';
import {COLORS} from '../../../../constants';

const ListItem = ({id, description, isChecked, checkTodo, removeTodo}) => {
  return (
    <View style={[styles.listItem, {opacity: isChecked ? 0.8 : 1}]}>
      <MyIcon
        name="check"
        color={isChecked ? COLORS.BLACK : COLORS.GREEN}
        onPress={() => checkTodo(id)}
      />

      <Text
        style={[
          styles.itemText,
          {textDecorationLine: isChecked ? 'line-through' : 'none'},
        ]}>
        {description}
      </Text>

      <MyIcon
        name="trash"
        color={isChecked ? COLORS.BLACK : COLORS.RED}
        onPress={() => removeTodo(id)}
      />
    </View>
  );
};

export {ListItem};
