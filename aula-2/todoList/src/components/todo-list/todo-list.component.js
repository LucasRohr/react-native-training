import React from 'react';
import styles from './todo-list.style';
import {ListItem} from './components';

const TodoList = ({todoList = [], checkTodo, removeTodo}) => {
  return todoList.map((todo, key) => (
    <ListItem
      key={key}
      id={todo.id}
      description={todo.description}
      isChecked={todo.isChecked}
      checkTodo={checkTodo}
      removeTodo={removeTodo}
    />
  ));
};

export {TodoList};
