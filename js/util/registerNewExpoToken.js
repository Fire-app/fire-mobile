import PropTypes from 'prop-types';
import React from 'react';

async function registerNewToken(token, language, notificationTypes) {
  try {
    const result = await fetch(
      'https://fire-app-staging.herokuapp.com/new-expo-token',
      {
        body: JSON.stringify({
          language,
          notification_types: notificationTypes,
          token,
        }),
        method: 'POST',
      }
    );
    const data = await result.json();
    return data;
  } catch (e) {
    console.error(`Failed to Fetch: ${e}`);
    return null;
  }
}

registerNewToken.propTypes = {
  language: PropTypes.string.isRequired,
  notificationTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  token: PropTypes.string.isRequired,
};

export default registerNewToken;
