import 'dotenv/config';

export default {
  name: 'Fire',
  slug: 'fire',
  platforms: ['ios', 'android', 'web'],
  privacy: 'unlisted',
  version: '0.0.1',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/icon_transparent.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: false,
    bundleIdentifier: 'com.firemobileapp.fire',
    buildNumber: '0.0.1',
  },
  android: {
    package: 'com.firemobileapp.fire',
    versionCode: 370000001,
  },
  hooks: {
    postPublish: [],
  },
  extra: {
    SENTRY_DSN: process.env.SENTRY_DSN,
  },
};
