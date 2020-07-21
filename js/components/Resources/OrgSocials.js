/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';

export default function OrgSocials({ facebook, instagram, twitter, youtube }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingTop: 38,
      }}
    >
      {facebook ? (
        <SocialIcon
          type="facebook"
          onPress={() => WebBrowser.openBrowserAsync(facebook)}
        />
      ) : null}
      {instagram ? (
        <SocialIcon
          type="instagram"
          onPress={() => WebBrowser.openBrowserAsync(instagram)}
        />
      ) : null}
      {twitter ? (
        <SocialIcon
          type="twitter"
          onPress={() => WebBrowser.openBrowserAsync(twitter)}
        />
      ) : null}
      {youtube ? (
        <SocialIcon
          type="youtube"
          onPress={() => WebBrowser.openBrowserAsync(youtube)}
        />
      ) : null}
    </View>
  );
}

OrgSocials.propTypes = {
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  twitter: PropTypes.string,
  youtube: PropTypes.string,
};
