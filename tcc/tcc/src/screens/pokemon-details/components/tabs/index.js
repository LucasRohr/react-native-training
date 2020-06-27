import React from 'react';
import {View, Text} from 'react-native';

import styles from './tabs.style';

const Tabs = () => {
  const tabs = ['stats', 'abilities', 'moves'];

  const renderTabs = () =>
    tabs.map(tab => (
      <View style={styles.tabContainer}>
        <Text style={styles.tabText}> {tab} </Text>
      </View>
    ));

  return <View style={styles.container}>{renderTabs()}</View>;
};

export {Tabs};
