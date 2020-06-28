import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';

export default StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  statContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  statInfoContainer: {
    width: '22%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  statName: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginRight: 10,
  },

  statValue: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 0.5,
    color: COLORS.DARK_GRAY,
    textAlign: 'left',
    marginRight: 5,
  },

  statBarContainer: {
    width: '78%',
    height: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT_GRAY,
    borderRadius: 12,
  },

  gradient: {
    height: 10,
    borderRadius: 12,
  },

  statBar: {
    height: 10,
    flex: 1,
    borderRadius: 12,
  },
});
