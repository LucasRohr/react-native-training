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

  itemImageNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  image: {
    width: 40,
    height: 40,
  },

  name: {
    fontSize: 20,
    lineHeight: 22,
    fontWeight: 'bold',
    color: COLORS.DARK_GRAY,
    textTransform: 'capitalize',
    marginLeft: 15,
  },

  itemCostContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cost: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '500',
    color: COLORS.GRAY,
  },
});
