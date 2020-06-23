import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {DiscoverStack, ArtistsStack} from './stacks';

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          options={{title: 'Discover'}}
          component={DiscoverStack}
          name="DiscoverStack"
        />
        <BottomTab.Screen
          options={{title: 'Artists'}}
          component={ArtistsStack}
          name="ArtistsStack"
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
