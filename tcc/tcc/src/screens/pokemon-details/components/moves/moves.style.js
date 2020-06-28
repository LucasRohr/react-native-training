import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../constants';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 180,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },

  moveContainer: {
    width: width - 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: COLORS.LIGHT_GRAY,
    borderBottomWidth: 1,
    paddingVertical: 12,
  },

  moveInfoContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  name: {
    fontSize: 19,
    lineHeight: 22,
    fontWeight: 'bold',
    color: COLORS.DARK_GRAY,
    textTransform: 'capitalize',
    marginBottom: 5,
  },

  power: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '500',
    color: COLORS.GRAY,
  },
});
