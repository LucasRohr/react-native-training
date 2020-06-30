import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ItemsScreen, ItemDetailsScreen} from '../../screens';
import {HEADER_CONFIG} from '../header-config';

const Stack = createStackNavigator();

const ItemsStack = () => {
  return (
    <Stack.Navigator screenOptions={HEADER_CONFIG}>
      <Stack.Screen
        options={{title: 'Items'}}
        component={ItemsScreen}
        name="ItemsScreen"
      />
      <Stack.Screen
        options={{headerShown: false}}
        component={ItemDetailsScreen}
        name="ItemDetailsScreen"
      />
    </Stack.Navigator>
  );
};

export {ItemsStack};
