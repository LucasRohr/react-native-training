import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  content: {
    position: 'relative',
    width: '100%',
    height: '80%',
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

  typeIcon: {
    width: 85,
    height: 85,
    position: 'absolute',
    top: 85,
    left: '38%',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.WHITE,
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
    marginBottom: 20,
    marginTop: 15,
  },

  effect: {
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 18,
    color: COLORS.DARK_GRAY,
    textAlign: 'center',
    marginBottom: 40,
  },

  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
