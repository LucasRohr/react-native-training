import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    minWidth: 130,
    maxWidth: 130,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    backgroundColor: 'white',
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 4,
  },

  bottomTextContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    height: 45,
    justifyContent: 'flex-end',
  },

  movieTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
  },

  movieVotes: {
    textAlign: 'center',
    fontSize: 13,
    color: 'grey',
    fontWeight: '200',
    marginTop: 5,
  },

  imageContainer: {
    height: 115,
  },

  image: {
    flex: 1,
  },
});
