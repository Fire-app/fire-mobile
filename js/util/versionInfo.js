import Constants from 'expo-constants';

export function getReleaseChannel() {
  const { releaseChannel } = Constants.manifest;
  if (releaseChannel === undefined) return 'development';
  return releaseChannel;
}

function getVersion() {
  return Constants.manifest.version;
}

export default function formattedVersionInfo() {
  const version = getVersion();
  const releaseChannel = getReleaseChannel();
  const versionInfo = `Version ${version}`;
  if (releaseChannel.indexOf('prod') !== -1) {
    return versionInfo;
  }
  return `${versionInfo} (${releaseChannel})`;
}
