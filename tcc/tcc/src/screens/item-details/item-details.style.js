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

  image: {
    width: 120,
    height: 120,
    position: 'absolute',
    top: -60,
    left: '40%',
  },

  name: {
    fontWeight: 'bold',
    fontSize: 40,
    lineHeight: 45,
    color: COLORS.DARK_GRAY,
    textTransform: 'capitalize',
    marginTop: 15,
  },

  effect: {
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 18,
    color: COLORS.DARK_GRAY,
    textAlign: 'center',
  },

  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  itemCostContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
  },

  cost: {
    fontSize: 22,
    lineHeight: 18,
    fontWeight: '600',
    color: COLORS.GRAY,
  },
});
