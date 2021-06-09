import { Platform } from 'react-native';

export default const DEFAULT_NOTIFICATION = {
  offsetTop: Platform.OS === 'ios' ? 45 : 0,
  visibilityTime: 5000,
};
