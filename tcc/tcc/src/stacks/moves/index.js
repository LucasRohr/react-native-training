import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MovesScreen, MoveDetailsScreen} from '../../screens';
import {HEADER_CONFIG} from '../header-config';

const Stack = createStackNavigator();

const MovesStack = () => {
  return (
    <Stack.Navigator screenOptions={HEADER_CONFIG}>
      <Stack.Screen
        options={{title: 'Moves'}}
        component={MovesScreen}
        name="MovesScreen"
      />
      <Stack.Screen
        options={{headerShown: false}}
        component={MoveDetailsScreen}
        name="MoveDetailsScreen"
      />
    </Stack.Navigator>
  );
};

export {MovesStack};
