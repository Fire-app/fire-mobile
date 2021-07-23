/* eslint-disable import/prefer-default-export */
import { Platform } from 'react-native';

export const DEFAULT_NOTIFICATION = {
  offsetTop: Platform.OS === 'ios' ? 45 : 0,
  visibilityTime: 5000,
};
