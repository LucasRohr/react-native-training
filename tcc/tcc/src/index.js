import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomIcon} from './components';
import {COLORS} from './constants';
import {PokemonStack, MovesStack, ItemsStack} from './stacks';

const BottomTab = createBottomTabNavigator();

const App = () => {
  const renderIcon = ({focused, name}) => (
    <CustomIcon
      name={name}
      size={25}
      color={focused ? COLORS.BLACK : COLORS.GRAY}
    />
  );

  return (
    <NavigationContainer>
      <BottomTab.Navigator
        tabBarOptions={{
          inactiveTintColor: COLORS.GRAY,
          activeTintColor: COLORS.BLACK,

          tabStyle: {
            elevation: 0,
            shadowOpacity: 1,
            paddingTop: 20,
            backgroundColor: COLORS.TAB,
            borderTopColor: COLORS.TAB_STRONG,
            borderTopWidth: 4,
          },

          labelStyle: {
            fontSize: 16,
            marginVertical: 10,
          },
        }}>
        <BottomTab.Screen
          options={{
            title: 'Pokemon',
            tabBarIcon: ({focused}) => renderIcon({focused, name: 'pokemon'}),
          }}
          component={PokemonStack}
          name="PokemonStack"
        />

        <BottomTab.Screen
          options={{
            title: 'Moves',
            tabBarIcon: ({focused}) => renderIcon({focused, name: 'moves'}),
          }}
          component={MovesStack}
          name="MovesStack"
        />

        <BottomTab.Screen
          options={{
            title: 'Items',
            tabBarIcon: ({focused}) => renderIcon({focused, name: 'itens'}),
          }}
          component={ItemsStack}
          name="ItemsStack"
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export {App};
