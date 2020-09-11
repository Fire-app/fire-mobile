// https://ethercreative.github.io/react-native-shadow-generator/
import { StyleSheet } from 'react-native';

const shadowStyles = StyleSheet.create({
  // Depth 5
  default: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default shadowStyles;
