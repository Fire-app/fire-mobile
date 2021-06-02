import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { colors } from '../styles';
import textStyles from '../styles/textStyles';

import Card from './Card';
import FireIcon, { ICON_NAMES, IconNamePropType } from './FireIcon';

import LastSeen from '../screens/notifications/LastSeen'

var temp = new Date();

export default function NotificationCard({
  title,
  description,
  smallMode,
  time,
  image,
  date,
}) {
  return (
    <Card
      style={smallMode ? { padding: 10, paddingLeft: 16 } : { padding: 24 }}
    >
      <View style={{ alignItems: 'flex-start', flexDirection: 'column' }}>
        <View style={{ flex: 1, paddingLeft: 12 }}>

          <Text style={smallMode ? textStyles.h3 : textStyles.h2}>{title}</Text>
          {description && (
            <Text style={[textStyles.body2, { paddingTop: 4 }]}>
              {description}
            </Text> 
          )}
        </View>
        <View style={{ flex: 2, paddingLeft: 12}}>
            <Text style={[textStyles.notificationTime, { paddingTop: 4 }]}>
              {date} at {time}
            </Text>
        </View>
        <View>{LastSeen(temp)}</View>
      </View>
    </Card>
  );
}

NotificationCard.propTypes = {
  description: PropTypes.string,
  smallMode: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

//define default props: smallMode = false.
