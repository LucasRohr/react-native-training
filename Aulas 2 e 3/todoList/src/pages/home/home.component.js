import React, {useState, useEffect} from 'react';
import styles from './home.style';
import {View} from 'react-native';
import {Button, Input, TodoList} from '../../components';
import {COLORS} from '../../constants';
import {createAlert, StorageHelper} from '../../helpers';

const Home = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getStoredTodoList();
  }, []);

  useEffect(() => {
    setStoredTodoList();
  }, [todoList]);

  const getStoredTodoList = async () => {
    await StorageHelper.getItem('todoList').then(todoList => {
      setTodoList(todoList);
    });
  };

  const setStoredTodoList = async () => {
    await StorageHelper.setItem('todoList', todoList);
  };

  const onAddTodo = () => {
    const isTodoValid = title && description;

    if (isTodoValid) {
      setTodoList(prevTodoList => [
        ...prevTodoList,
        {
          key: `key ${todoList.length + 1}`,
          id: todoList.length + 1,
          todo: {title, description},
          isChecked: false,
        },
      ]);
    } else {
      createAlert({
        title: 'Erro ao adicionar tarefa',
        message:
          'Você deve preencher os campos de To Do e Descrição para adicionar uma tarefa.',
        rightButtonConfig: {label: 'Ok ,entendi!'},
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
        onChangeText={setTitle}
      />

      <Input
        additionalStyle={styles.descriptionInput}
        placeholder="Descrição"
        placeholderTextColor={COLORS.GRAY}
        multiline
        onChangeText={setDescription}
      />

      <Button title="Adicionar" onPress={onAddTodo} />

      <View style={styles.separator} />

      <View style={styles.content}>
        <TodoList
          todoList={todoList}
          checkTodo={checkTodo}
          removeTodo={removeTodo}
        />
      </View>
    </View>
  );
};

export {Home};
