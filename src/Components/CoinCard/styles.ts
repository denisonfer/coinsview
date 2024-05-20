import { StyleSheet } from 'react-native';
import { customColors } from '../../Theme/globalStyles';

export const styles = StyleSheet.create({
  card: {
    width: 327,
    height: 75,
    backgroundColor: customColors.darkGrey,
    marginTop: 24,
    borderRadius: 5,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 32,
    height: 32,
  },
  nameView: {
    flex: 1,
    marginLeft: 12,
  },
  textHeading: {
    color: customColors.LightGrey,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  textSubHeading: {
    color: customColors.stormGrey,
    fontSize: 15,
  },
});
