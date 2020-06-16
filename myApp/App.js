import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';

const MAX_VALUE = 10;

const App = () => {
  const [counter, setCounter] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('grey');

  useEffect(() => {
    if (counter === MAX_VALUE - 1) {
      createAlert({
        title: 'Atenção',
        message:
          'No pŕoximo clique após o valor de número 10, os estados serão resetados.',
        confirmButtonLabel: 'Certinho!',
      });
    }
  }, [counter]);

  const createAlert = ({title, message, confirmButtonLabel}) =>
    Alert.alert(title, message, [{text: confirmButtonLabel}], {
      cancelable: false,
    });

  const generateColor = () => {
    const colorCode =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';

    setBackgroundColor(colorCode);
  };

  const incrementCounter = () => {
    if (counter === MAX_VALUE - 1) {
      setBackgroundColor('grey');
      setCounter(0);
    } else {
      generateColor();
      setCounter(counter + 1);
    }
  };

  const decrementCounter = () => {
    generateColor();
    setCounter(counter - 1);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.content, {backgroundColor}]}>
        <Text style={[styles.text, {color: counter < 0 ? 'red' : 'black'}]}>
          Counter = {counter}
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={decrementCounter}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={incrementCounter}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  content: {
    width: 300,
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  text: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },

  buttonsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
  },

  button: {
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderColor: 'black',
    borderWidth: 2,
  },
});

export default App;

/*
- change color on click
- chegou no 9, mostrar alerta com o aviso do change do 10
- chegou 10, no próximo click, reinicia contagem pra 0 e fundo cinza
*/
