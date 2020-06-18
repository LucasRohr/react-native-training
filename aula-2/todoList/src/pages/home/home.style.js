import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DARK_GRAY,
    paddingHorizontal: 30,
    paddingTop: 30,
  },

  separator: {
    borderTopWidth: 1,
    borderTopColor: COLORS.WHITE,
    marginBottom: 20,
  },

  content: {
    flex: 1,
  },
});
