import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'relative',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 10,
      height: 8,
    },
    shadowOpacity: 0.8,
    shadowRadius: 25,
    elevation: 10,
    borderRadius: 25,
    marginHorizontal: 8,
  },
});
