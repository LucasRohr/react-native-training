import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import styles from './loader.style';

const Loader = () => (
  <View style={styles.loaderContainer}>
    <ActivityIndicator size="large" />
  </View>
);

export {Loader};
