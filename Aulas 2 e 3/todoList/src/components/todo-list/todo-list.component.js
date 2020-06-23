import React from 'react';
import {ListItem} from './components';
import {FlatList} from 'react-native';

const TodoList = ({todoList = [], checkTodo, removeTodo}) => (
  <FlatList
    data={todoList}
    showsVerticalScrollIndicator={false}
    renderItem={({item}) => (
      <ListItem
        id={item.id}
        todo={item.todo}
        isChecked={item.isChecked}
        checkTodo={checkTodo}
        removeTodo={removeTodo}
      />
    )}
  />
);

export {TodoList};
