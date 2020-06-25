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
    position: 'absolute',
    bottom: 15,
    left: 15,
  },

  name: {
    fontSize: 35,
    lineHeight: 35,
    color: '#FFFFFF',
  },

  overview: {
    fontSize: 18,
    lineHeight: 35,
    color: '#FFFFFF',
  },

  summaryHeader: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: '#0294A5',
    borderBottomWidth: 3,
    padding: 15,
  },

  summaryText: {
    fontSize: 18,
    lineHeight: 19,
    color: '#0294A5',
  },

  summaryContainer: {
    color: '#EEEEEE',
    padding: 15,
  },

  text: {
    fontSize: 17,
    lineHeight: 20,
    color: '#4A4A4A',
    textAlign: 'left',
  },

  placeOfBirth: {
    marginBottom: 20,
  },
});
