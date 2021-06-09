import { Platform } from 'react-native';

const DEFAULT_NOTIFICATION = {
  offsetTop: Platform.OS === 'ios' ? 45 : 0,
  visibilityTime: 5000,
};

export default DEFAULT_NOTIFICATION;
