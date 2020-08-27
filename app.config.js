import 'dotenv/config';

export default {
  android: {
    package: 'com.firemobileapp.fire',
    versionCode: 370000001,
  },
  assetBundlePatterns: ['**/*'],
  extra: {
    SENTRY_DSN: process.env.SENTRY_DSN,
  },
  hooks: {
    postPublish: [],
  },
  icon: './assets/icon.png',
  ios: {
    buildNumber: '0.0.1',
    bundleIdentifier: 'com.firemobileapp.fire',
    supportsTablet: false,
  },
  name: 'Fire',
  orientation: 'portrait',
  platforms: ['ios', 'android', 'web'],
  privacy: 'unlisted',
  slug: 'fire',
  splash: {
    backgroundColor: '#ffffff',
    image: './assets/icon_transparent.png',
    resizeMode: 'contain',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  version: '0.0.1',
};
