import React, {useState} from 'react';
import styles from './home.style';
import {View, ScrollView, Alert} from 'react-native';
import {Button, Input, TodoList} from '../../components';
import {COLORS} from '../../constants';

const Home = () => {
  const [todoText, setTodoText] = useState('');
  const [todoList, setTodoList] = useState([]);

  const createAlert = ({title, message, confirmButtonLabel}) =>
    Alert.alert(title, message, [{text: confirmButtonLabel}], {
      cancelable: false,
    });

  const onAddTodo = () => {
    if (todoText) {
      setTodoList(prevTodoList => [
        ...prevTodoList,
        {id: todoList.length + 1, description: todoText, isChecked: false},
      ]);
    } else {
      createAlert({
        title: 'Erro ao adicionar tarefa',
        message: 'Você deve preencher o campo de tarefa para adicionar uma.',
        confirmButtonLabel: 'Ok ,entendi!',
      });
    }
  };

  const checkTodo = todoId => {
    const mappedList = todoList.map(todoItem => {
      if (todoItem.id === todoId) {
        todoItem.isChecked = !todoItem.isChecked;
      }
      return todoItem;
    });

    setTodoList(mappedList);
  };

  const removeTodo = todoId => {
    const newList = todoList.filter(todo => todo.id !== todoId);
    setTodoList(newList);
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="To do..."
        placeholderTextColor={COLORS.GRAY}
        onChangeText={setTodoText}
      />

      <Button title="Adicionar" onPress={onAddTodo} />

      <View style={styles.separator} />

      <ScrollView>
        <View style={styles.content}>
          <TodoList
            todoList={todoList}
            checkTodo={checkTodo}
            removeTodo={removeTodo}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export {Home};
