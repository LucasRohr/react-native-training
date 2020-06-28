import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  statContainer: {
    width: '33%',
    height: 90,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRightWidth: 1,
    borderRightColor: COLORS.LIGHT_GRAY,
  },

  statLabel: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 18,
    textTransform: 'capitalize',
    marginBottom: 8,
    textAlign: 'center',
  },

  statValue: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 22,
    color: COLORS.DARK_GRAY,
  },
});
