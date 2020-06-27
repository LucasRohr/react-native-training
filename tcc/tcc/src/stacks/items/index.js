import React from 'react';
import {COLORS} from '../../constants';
import {createStackNavigator} from '@react-navigation/stack';
import {ItemsScreen, ItemDetailsScreen} from '../../screens';

const Stack = createStackNavigator();

const ItemsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: COLORS.BLACK,

        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 3,
          backgroundColor: COLORS.TAB,
          borderBottomColor: COLORS.TAB_STRONG,
        },
      }}>
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
