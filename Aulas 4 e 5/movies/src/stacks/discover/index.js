import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {
  DiscoverScreen,
  MovieDetailsScreen,
  ArtistsDetailsScreen,
} from '../../screens';

const Stack = createStackNavigator();

export const DiscoverStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#4F4F4F',
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      }}>
      <Stack.Screen
        options={{title: 'Discover'}}
        component={DiscoverScreen}
        name="DiscoverScreen"
      />
      <Stack.Screen
        options={{title: 'Movie name'}}
        component={MovieDetailsScreen}
        name="MovieDetailsScreen"
      />
      <Stack.Screen
        options={{title: 'Artist Name', headerTitleAlign: 'center'}}
        component={ArtistsDetailsScreen}
        name="ArtistsDetailsScreen"
      />
    </Stack.Navigator>
  );
};
