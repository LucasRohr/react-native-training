import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: COLORS.ORANGE,
    marginVertical: 16,
  },

  buttonText: {
    fontSize: 18,
    lineHeight: 24,
    color: COLORS.WHITE,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});
