import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../constants';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },

  content: {
    width: '100%',
    height: '75%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 45,
  },

  backContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },

  imageContainer: {
    width: 130,
    height: 130,
    position: 'absolute',
    top: -80,
    left: 150,
  },

  image: {
    flex: 1,
  },

  nameTypeContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    fontWeight: 'bold',
    fontSize: 35,
    lineHeight: 45,
    color: COLORS.DARK_GRAY,
    textTransform: 'capitalize',
  },

  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },

  description: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 18,
    color: COLORS.DARK_GRAY,
    textAlign: 'center',
  },
});
