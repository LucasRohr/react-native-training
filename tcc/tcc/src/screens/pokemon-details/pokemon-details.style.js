import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../constants';

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
    justifyContent: 'flex-start',
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
    width: 180,
    height: 180,
    position: 'absolute',
    top: 30,
    left: 120,
    elevation: 0.1,
    shadowOpacity: 0,
    shadowColor: COLORS.TRANSPARENT,
  },

  image: {
    flex: 1,
  },

  nameTypeContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 35,
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
    marginBottom: 30,
  },

  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
