import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderBottomColor: COLORS.LIGHT_GRAY,
    borderBottomWidth: 1,
  },

  pokemonContent: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  imageContainer: {
    width: 70,
    marginRight: 25,
  },

  image: {
    flex: 1,
  },

  pokemonInfoContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  name: {
    fontWeight: '500',
    fontSize: 19,
    lineHeight: 22,
    color: COLORS.DARK_GRAY,
    marginBottom: 3,
    textTransform: 'capitalize',
  },

  id: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 18,
    color: COLORS.GRAY,
  },

  typesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
