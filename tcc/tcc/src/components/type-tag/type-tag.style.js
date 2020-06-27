import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 35,
    width: 110,
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 15,
    alignItems: 'center',
    shadowOffset: {
      width: 10,
      height: 8,
    },
    shadowOpacity: 0.8,
    shadowRadius: 25,
    elevation: 10,
    borderRadius: 16,
    marginHorizontal: 8,
  },

  type: {
    fontSize: 13,
    lineHeight: 14,
    textTransform: 'uppercase',
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
});
