import { Text, View, Image, Button } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import Toast from 'react-native-toast-message';
import { colors } from '../styles';
import textStyles from '../styles/textStyles';

import FireIcon, { ICON_NAMES, IconNamePropType } from './FireIcon';

export default function NotificationCard({
  title,
  description,
  smallMode,
  time,
  image,
  date,
}) {
  return (
    <View style={smallMode ? { padding: 10, paddingLeft: 16 } : { padding: 4 }}>
      <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
        <View style={{ flex: 1, paddingLeft: 12 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <FireIcon color={colors.primary} name={ICON_NAMES.HELP} size={20} />
            <Text style={smallMode ? textStyles.h3 : textStyles.h2}>
              {title}
            </Text>
          </View>
          {description && (
            <Text style={[textStyles.body2, { paddingTop: 4 }]}>
              {description}
            </Text>
          )}
          <Text style={[textStyles.notificationTime, { paddingTop: 4 }]}>
            {date}
            {' at '}
            {time}
          </Text>
        </View>
      </View>
    </View>
  );
}

NotificationCard.propTypes = {
  description: PropTypes.string,
  smallMode: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

NotificationCard.defaultProps = {
  smallMode: false,
};
