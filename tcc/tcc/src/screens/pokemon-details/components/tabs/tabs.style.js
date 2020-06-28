import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },

  tabTag: {
    width: 120,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabText: {
    textTransform: 'uppercase',
  },
});
