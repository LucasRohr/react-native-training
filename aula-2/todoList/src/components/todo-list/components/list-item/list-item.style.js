import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';

export default StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    padding: 20,
    marginBottom: 12,
  },

  itemText: {
    flex: 1,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    marginHorizontal: 12,
  },
});
