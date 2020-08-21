/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { colors } from '../../styles';

const Socials = ({ onPress, iconName }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ paddingHorizontal: 10, paddingVertical: 5 }}
    >
      <Feather name={iconName} size={25} color={colors.primary} />
    </TouchableOpacity>
  );
};

Socials.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default function ResourcesSocials({
  facebookUrl,
  instagramUrl,
  twitterUrl,
  youtubeUrl,
}) {
  // returns null instead of padding space if no props passed
  if (!(facebookUrl || instagramUrl || twitterUrl || youtubeUrl)) {
    return null;
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingTop: 38,
        paddingBottom: 58,
      }}
    >
      {facebookUrl ? (
        <Socials
          onPress={() => WebBrowser.openBrowserAsync(facebookUrl)}
          iconName="facebook"
        />
      ) : null}
      {instagramUrl ? (
        <Socials
          onPress={() => WebBrowser.openBrowserAsync(instagramUrl)}
          iconName="instagram"
        />
      ) : null}
      {twitterUrl ? (
        <Socials
          onPress={() => WebBrowser.openBrowserAsync(twitterUrl)}
          iconName="twitter"
        />
      ) : null}
      {youtubeUrl ? (
        <Socials
          onPress={() => WebBrowser.openBrowserAsync(youtubeUrl)}
          iconName="youtube"
        />
      ) : null}
    </View>
  );
}

ResourcesSocials.propTypes = {
  facebookUrl: PropTypes.string,
  instagramUrl: PropTypes.string,
  twitterUrl: PropTypes.string,
  youtubeUrl: PropTypes.string,
};
