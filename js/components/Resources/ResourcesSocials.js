import * as WebBrowser from 'expo-web-browser';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { colors, textStyles } from '../../styles';
import FireIcon, { IconNamePropType, ICON_NAMES } from '../FireIcon';

const Socials = ({ onPress, iconName }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{ paddingHorizontal: 10, paddingVertical: 5 }}
  >
    <FireIcon color={colors.primary} name={iconName} size={25} />
  </TouchableOpacity>
);

Socials.propTypes = {
  iconName: IconNamePropType.isRequired,
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
    <View style={{ paddingTop: 50 }}>
      <Text style={[textStyles.h2, colors.charcoalGrey, { paddingBottom: 10 }]}>
        {'Connect on social media'}
      </Text>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        {facebookUrl && (
          <Socials
            iconName={ICON_NAMES.FACEBOOK}
            onPress={() => WebBrowser.openBrowserAsync(facebookUrl)}
          />
        )}
        {instagramUrl && (
          <Socials
            iconName={ICON_NAMES.INSTAGRAM}
            onPress={() => WebBrowser.openBrowserAsync(instagramUrl)}
          />
        )}
        {twitterUrl && (
          <Socials
            iconName={ICON_NAMES.TWITTER}
            onPress={() => WebBrowser.openBrowserAsync(twitterUrl)}
          />
        )}
        {youtubeUrl && (
          <Socials
            iconName={ICON_NAMES.YOUTUBE}
            onPress={() => WebBrowser.openBrowserAsync(youtubeUrl)}
          />
        )}
      </View>
    </View>
  );
}

ResourcesSocials.propTypes = {
  facebookUrl: PropTypes.string,
  instagramUrl: PropTypes.string,
  twitterUrl: PropTypes.string,
  youtubeUrl: PropTypes.string,
};
