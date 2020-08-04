import { StyleSheet } from 'react-native';
import colors from './colors';

const textStyles = StyleSheet.create({
  h1: {
    fontFamily: 'Roboto_900Black',
    fontSize: 24,
    fontStyle: 'normal',
    color: colors.charcoalGrey,
    lineHeight: 33.8,
  },
  h2: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
    fontStyle: 'normal',
    color: colors.charcoalGrey,
  },
  h3: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    fontStyle: 'normal',
    color: colors.charcoalGrey,
  },
  h4: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    fontStyle: 'normal',
    color: colors.charcoalGrey,
  },
  h5: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 16,
    color: colors.charcoalGrey,
  },
  body1: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    fontStyle: 'normal',
    color: colors.charcoalGrey,
    lineHeight: 24,
  },
  body2: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    fontStyle: 'normal',
    color: colors.charcoalGrey,
    lineHeight: 17.5,
  },
  textStyle: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 10,
    letterSpacing: 0.5,
    color: colors.charcoalGrey,
    lineHeight: 14.1,
  },
  headerBackStyle: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    fontStyle: 'normal',
  },
  freeLabel: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 10,
    fontStyle: 'normal',
    letterSpacing: 1,
  },
});

export default textStyles;
