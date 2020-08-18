/* eslint-disable no-console */
import * as Sentry from 'sentry-expo';
import Constants from 'expo-constants';
import { getReleaseChannel } from '../util/versionInfo';

export function initialize() {
  Sentry.init({
    dsn: Constants.manifest.extra.SENTRY_DSN,
    enableInExpoDevelopment: true,
    debug: true,
  });

  Sentry.setTags({
    environment: getReleaseChannel(),
  });
  // Needed for source Maps
  Sentry.setRelease(Constants.manifest.revisionId);
}

export function logMessage(message) {
  // Default is SentrySeverity.Error
  Sentry.captureMessage(message, {
    level: Sentry.Severity.Info,
  });
}

export function logError(error, errorType, extraData) {
  if (__DEV__) {
    console.log(errorType, { error, extraData });
  }

  Sentry.captureException(error);

  Sentry.withScope((scope) => {
    scope.setTag('errorType', errorType);
    scope.setFingerprint([errorType]);

    if (extraData && Object.keys(extraData).length) {
      Object.keys(extraData).forEach((key) => {
        scope.setExtra(key, extraData[key]);
      });
    }

    Sentry.captureException(error);
  });
}
