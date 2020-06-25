import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    minWidth: 130,
    maxWidth: 130,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 22,
    backgroundColor: 'white',
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 4,
  },

  bottomTextContainer: {
    height: 45,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
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
    width: '100%',
    height: 185,
    marginBottom: 5,
  },

  image: {
    flex: 1,
  },
});
