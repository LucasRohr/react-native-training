import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {ArtistsScreen, ArtistsDetailsScreen} from '../../screens';

const Stack = createStackNavigator();

export function ArtistsStack() {
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
        options={{title: 'Artists', headerTitleAlign: 'center'}}
        component={ArtistsScreen}
        name="ArtistsScreen"
      />
      <Stack.Screen
        options={{title: 'Artist Name', headerTitleAlign: 'center'}}
        component={ArtistsDetailsScreen}
        name="ArtistsDetailsScreen"
      />
    </Stack.Navigator>
  );
}
