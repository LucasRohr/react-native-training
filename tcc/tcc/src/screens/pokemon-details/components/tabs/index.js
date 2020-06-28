import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './tabs.style';
import {POKEMON_TYPES, COLORS} from '../../../../constants';
import {Abilities} from '../abilities';
import {Stats} from '../stats';
import {Moves} from '../moves';

const tabsList = ['STATS', 'ABILITIES', 'MOVES'];

const Tabs = ({pokemon}) => {
  const [currentTab, setCurrentTab] = useState(tabsList[0]);

  const {types, stats, abilities, moves} = pokemon;
  const pokemonColor = POKEMON_TYPES[types[0].toUpperCase()].color;

  const TAB_OPTIONS = {
    STATS: {
      key: 'STATS',
      content: <Stats stats={stats} pokemonColor={pokemonColor} />,
    },

    ABILITIES: {
      key: 'ABILITIES',
      content: <Abilities abilities={abilities} pokemonColor={pokemonColor} />,
    },

    MOVES: {
      key: 'MOVES',
      content: <Moves moves={moves} />,
    },
  };

  const renderTabs = () =>
    tabsList.map((tab, index) => (
      <TouchableOpacity
        key={index + 1}
        onPress={() => setCurrentTab(tab)}
        activeOpacity={0.6}
        style={[
          styles.tabTag,
          {
            backgroundColor:
              TAB_OPTIONS[currentTab].key === tab ? pokemonColor : COLORS.WHITE,
          },
        ]}>
        <Text
          style={[
            styles.tabText,
            {
              color:
                TAB_OPTIONS[currentTab].key === tab
                  ? COLORS.WHITE
                  : pokemonColor,
            },
          ]}>
          {tab}
        </Text>
      </TouchableOpacity>
    ));

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>{renderTabs()}</View>
      {TAB_OPTIONS[currentTab].content}
    </View>
  );
};

Tabs.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export {Tabs};
