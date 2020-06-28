import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomColor: COLORS.LIGHT_GRAY,
    borderBottomWidth: 1,
  },

  name: {
    fontSize: 20,
    lineHeight: 22,
    fontWeight: 'bold',
    color: COLORS.DARK_GRAY,
    textTransform: 'capitalize',
  },
});
