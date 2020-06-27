import React from 'react';
import {COLORS} from '../../constants';
import {createStackNavigator} from '@react-navigation/stack';
import {PokemonScreen, PokemonDetailsScreen} from '../../screens';

const Stack = createStackNavigator();

const PokemonStack = () => {
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
        options={{title: 'Pokemon'}}
        component={PokemonScreen}
        name="PokemonScreen"
      />
      <Stack.Screen
        options={{headerShown: false}}
        component={PokemonDetailsScreen}
        name="PokemonDetailsScreen"
      />
    </Stack.Navigator>
  );
};

export {PokemonStack};
