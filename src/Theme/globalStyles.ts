import { StyleSheet } from 'react-native';

export const customColors = {
  primaryLight: '#7878FA',
  primaryDark: '#6262D9',
  purple: '#9D62D9',
  black: '#16171A',
  darkGrey: '#232336',
  snowWhite: '#F2F2FA',
  LightGrey: '#E4E4F0',
  dustyGrey: '#D5D5E0',
  stormGrey: '#A7A7CC',
};

export default StyleSheet.create({
  font: {
    fontFamily: 'NunitoSans_10pt-Regular',
  },
  title: {
    fontFamily: 'NunitoSans_10pt-Regular',
    fontSize: 34,
    color: customColors.snowWhite,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
  alignmentAllCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
