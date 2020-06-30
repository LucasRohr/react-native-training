import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';

export default StyleSheet.create({
  abilityContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 15,
  },

  abilityInfoContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  name: {
    fontSize: 18,
    lineHeight: 18,
    fontWeight: 'bold',
    color: COLORS.DARK_GRAY,
    textTransform: 'capitalize',
    marginBottom: 8,
  },

  effect: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '500',
    color: COLORS.DARK_GRAY,
    paddingStart: 0,
  },
});
