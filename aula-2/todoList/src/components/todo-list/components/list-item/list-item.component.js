import React from 'react';
import styles from './list-item.style';
import {Text, TouchableOpacity} from 'react-native';
import {MyIcon} from '../../../my-icon';
import {COLORS} from '../../../../constants';
import {createAlert} from '../../../../helpers';

const ListItem = ({id, todo, isChecked, checkTodo, removeTodo}) => {
  const renderTodoAlert = () => {
    createAlert({
      title: todo.title,
      message: todo.description,

      leftButtonConfig: {
        label: isChecked ? 'Desfazer' : 'Feito',
        onPress: () => checkTodo(id),
        style: styles.alertButtonText,
      },

      rightButtonConfig: {
        label: 'Excluir',
        onPress: () => removeTodo(id),
        style: styles.alertButtonText,
      },
    });
  };

  return (
    <TouchableOpacity
      onPress={renderTodoAlert}
      activeOpacity={0.7}
      style={styles.listItem}>
      <MyIcon
        name="check"
        color={isChecked ? COLORS.BLACK : COLORS.GREEN}
        onPress={() => checkTodo(id)}
      />

      <Text
        style={[
          styles.itemText,
          {
            textDecorationLine: isChecked ? 'line-through' : 'none',
            color: isChecked ? COLORS.GRAY : COLORS.BLACK,
          },
        ]}>
        {todo.title}
      </Text>

      <MyIcon
        name="trash"
        color={isChecked ? COLORS.BLACK : COLORS.RED}
        onPress={() => removeTodo(id)}
      />
    </TouchableOpacity>
  );
};

export {ListItem};
