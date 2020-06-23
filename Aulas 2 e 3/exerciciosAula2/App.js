/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content} />

      <View style={styles.contentContainer}>
        <View style={styles.content} />
        <View style={styles.content} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    color: '#EEEEEE',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    padding: 20,
  },

  contentContainer: {
    flex: 70,
    flexDirection: 'row',
    backgroundColor: 'red',
  },

  content: {
    display: 'flex',
    flex: 30,
    // width: 100,
    // height: 100,
    backgroundColor: '#183159',
    margin: 10,
  },
});

export default App;
