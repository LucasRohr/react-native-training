import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  generalInfoContainer: {
    width: '100%',
  },

  imageContainer: {
    width,
    height: 'auto',
  },

  image: {
    width,
    height: 350,
  },

  gradient: {
    width,
    height: 350,
  },

  overviewContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 15,
    left: 15,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  genre: {
    fontSize: 19,
    lineHeight: 21,
    color: '#4A4A4A',
    marginBottom: 10,
  },

  infoText: {
    fontSize: 16,
    lineHeight: 15,
    color: '#4A4A4A',
  },

  language: {
    marginBottom: 12,
    fontSize: 16,
    marginLeft: 5,
  },

  releaseAndTimeContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  synopsisContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    padding: 15,
  },

  synopsisTitle: {
    fontSize: 20,
    lineHeight: 21,
    color: '#4A4A4A',
    fontWeight: 'bold',
    marginBottom: 15,
  },

  synopsisText: {
    fontSize: 17,
    lineHeight: 20,
    color: '#4A4A4A',
  },

  castContainer: {
    width: '100%',
  },

  castHeaderContainer: {
    width: '100%',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#0294A5',
    borderBottomWidth: 3,
  },

  castTitle: {
    fontSize: 18,
    lineHeight: 19,
    color: '#0294A5',
  },

  castListContainer: {
    padding: 15,
  },
});
