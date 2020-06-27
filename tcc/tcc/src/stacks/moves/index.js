import React from 'react';
import {COLORS} from '../../constants';
import {createStackNavigator} from '@react-navigation/stack';
import {MovesScreen, MoveDetailsScreen} from '../../screens';

const Stack = createStackNavigator();

const MovesStack = () => {
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
