import { StyleSheet } from 'react-native';

const screenStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'flex-start',
  },
  onboardingContentContainer: {
    flex: 1,
    flexGrow: 12,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },
  onboardingButtonContainer: {
    justifyContent: 'space-between',
    flex: 1,
    flexGrow: 1,
    alignSelf: 'stretch',
    margin: 10,
  },
});

export default screenStyles;
