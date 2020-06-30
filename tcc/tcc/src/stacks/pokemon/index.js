import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PokemonScreen, PokemonDetailsScreen} from '../../screens';
import {HEADER_CONFIG} from '../header-config';

const Stack = createStackNavigator();

const PokemonStack = () => {
  return (
    <Stack.Navigator screenOptions={HEADER_CONFIG}>
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
