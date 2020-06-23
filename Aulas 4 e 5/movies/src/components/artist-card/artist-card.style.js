import {StyleSheet} from 'react-native';

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 4,
  },

  bottomTextContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    height: 45,
    justifyContent: 'center',
  },

  bottomText: {
    textAlign: 'center',
    fontSize: 14,
  },

  imageContainer: {
    height: 115,
  },

  image: {
    flex: 1,
  },

  name: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
  },

  blankCard: {
    backgroundColor: 'transparent',
  },
}));
