import 'dotenv/config';

export default ({ config }) => ({
  android: {
    package: 'com.fireapp.fire',
    versionCode: config.android.versionCode,
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
    buildNumber: config.ios.buildNumber,
    bundleIdentifier: 'com.fireapp.fire',
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
  version: config.version,
});
