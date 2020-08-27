import * as WebBrowser from 'expo-web-browser';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { colors } from '../../styles';

const Socials = ({ onPress, iconName }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ paddingHorizontal: 10, paddingVertical: 5 }}
    >
      <Feather color={colors.primary} name={iconName} size={25} />
    </TouchableOpacity>
  );
};

Socials.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
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
        paddingBottom: 58,
        paddingTop: 38,
      }}
    >
      {facebookUrl ? (
        <Socials
          iconName="facebook"
          onPress={() => WebBrowser.openBrowserAsync(facebookUrl)}
        />
      ) : null}
      {instagramUrl ? (
        <Socials
          iconName="instagram"
          onPress={() => WebBrowser.openBrowserAsync(instagramUrl)}
        />
      ) : null}
      {twitterUrl ? (
        <Socials
          iconName="twitter"
          onPress={() => WebBrowser.openBrowserAsync(twitterUrl)}
        />
      ) : null}
      {youtubeUrl ? (
        <Socials
          iconName="youtube"
          onPress={() => WebBrowser.openBrowserAsync(youtubeUrl)}
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
