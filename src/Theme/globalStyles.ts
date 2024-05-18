import { StyleSheet } from 'react-native';

export const customColors = {
  primaryLight: '#7878FA',
  primaryDark: '#6262D9',
  snowWhite: '#F2F2FA',
  black: '#16171A',
  darkGrey: '#232336',
};

export default StyleSheet.create({
  font: {
    fontFamily: 'NunitoSans_10pt-Regular',
  },
  title: {
    fontFamily: 'NunitoSans_10pt-Regular',
    fontSize: 22,
    color: customColors.snowWhite,
    fontWeight: 'bold',
  },
  alignmentAllCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
