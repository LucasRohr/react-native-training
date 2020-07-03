import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomIcon} from './components';
import {COLORS} from './constants';
import {PokemonStack, MovesStack, ItemsStack} from './stacks';

const hiddenTabScreens = [
  'PokemonDetailsScreen',
  'MoveDetailsScreen',
  'ItemDetailsScreen',
];

const BottomTab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const getTabBarVisibility = route => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    if (hiddenTabScreens.includes(routeName)) {
      return false;
    }

    return true;
  };

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
            backgroundColor: COLORS.TAB,
            borderTopColor: COLORS.TAB_STRONG,
            borderTopWidth: 4,
            paddingTop: 14,
            paddingBottom: 6,
          },

          labelStyle: {
            fontSize: 16,
            marginTop: 3,
          },

          style: {
            height: 65,
          },
        }}>
        <BottomTab.Screen
          options={({route}) => ({
            title: 'Pokemon',
            tabBarIcon: ({focused}) => renderIcon({focused, name: 'pokemon'}),
            tabBarVisible: getTabBarVisibility(route),
          })}
          component={PokemonStack}
          name="PokemonStack"
        />

        <BottomTab.Screen
          options={({route}) => ({
            title: 'Moves',
            tabBarIcon: ({focused}) => renderIcon({focused, name: 'moves'}),
            tabBarVisible: getTabBarVisibility(route),
          })}
          component={MovesStack}
          name="MovesStack"
        />

        <BottomTab.Screen
          options={({route}) => ({
            title: 'Items',
            tabBarIcon: ({focused}) => renderIcon({focused, name: 'itens'}),
            tabBarVisible: getTabBarVisibility(route),
          })}
          component={ItemsStack}
          name="ItemsStack"
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export {App};
