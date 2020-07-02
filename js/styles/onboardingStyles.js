import { StyleSheet } from 'react-native';

const onboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    height: '8%',
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default onboardingStyles;
