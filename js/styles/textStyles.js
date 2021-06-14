import { StyleSheet } from 'react-native';
import colors from './colors';

const textStyles = StyleSheet.create({
  body1: {
    color: colors.charcoalGrey,
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 24,
  },
  body2: {
    color: colors.charcoalGrey,
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 17.5,
  },
  h1: {
    color: colors.charcoalGrey,
    fontFamily: 'Roboto_900Black',
    fontSize: 24,
    fontStyle: 'normal',
    lineHeight: 33.8,
  },
  h2: {
    color: colors.charcoalGrey,
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
    fontStyle: 'normal',
  },
  h3: {
    color: colors.charcoalGrey,
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    fontStyle: 'normal',
  },
  h4: {
    color: colors.charcoalGrey,
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    fontStyle: 'normal',
  },
  h5: {
    color: colors.charcoalGrey,
    fontFamily: 'Roboto_700Bold',
    fontSize: 16,
  },
  headerBackStyle: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    fontStyle: 'normal',
  },
  textStyle: {
    color: colors.charcoalGrey,
    fontFamily: 'Roboto_700Bold',
    fontSize: 10,
    letterSpacing: 0.5,
    lineHeight: 14.1,
  },
});

export default textStyles;
