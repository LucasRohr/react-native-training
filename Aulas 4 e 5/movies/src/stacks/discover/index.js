import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {DiscoverScreen, MovieDetailsScreen} from '../../screens';

const Stack = createStackNavigator();

export const DiscoverStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{title: 'Discover', headerTitleAlign: 'center'}}
        component={DiscoverScreen}
        name="DiscoverScreen"
      />
      <Stack.Screen
        options={{title: 'Movie name', headerTitleAlign: 'center'}}
        component={MovieDetailsScreen}
        name="MovieDetailsScreen"
      />
    </Stack.Navigator>
  );
};
