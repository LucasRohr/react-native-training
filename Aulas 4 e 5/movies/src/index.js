import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {DiscoverStack, ArtistsStack} from './stacks';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BottomTab = createBottomTabNavigator();

export default function App() {
  const renderIcon = ({focused, name}) => (
    <Icon name={name} size={25} color={focused ? '#0294A5' : '#DADADA'} />
  );

  return (
    <NavigationContainer>
      <BottomTab.Navigator
        tabBarOptions={{
          inactiveTintColor: '#DADADA',
          activeTintColor: '#0294A5',
          tabStyle: {
            elevation: 0,
            shadowOpacity: 1,
            paddingTop: 20,
          },

          labelStyle: {
            fontSize: 16,
            marginVertical: 10,
          },
        }}>
        <BottomTab.Screen
          options={{
            title: 'Discover',
            tabBarIcon: ({focused}) =>
              renderIcon({focused, name: 'view-module'}),
          }}
          component={DiscoverStack}
          name="DiscoverStack"
        />

        <BottomTab.Screen
          options={{
            title: 'Artists',
            tabBarIcon: ({focused}) =>
              renderIcon({focused, name: 'account-circle'}),
          }}
          component={ArtistsStack}
          name="ArtistsStack"
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
