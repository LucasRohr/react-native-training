import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 35,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 16,
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
    fontSize: 12,
    lineHeight: 14,
    textTransform: 'uppercase',
    color: COLORS.WHITE,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});
