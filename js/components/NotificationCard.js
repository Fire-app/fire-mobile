import { Text, View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import TimeAgo from 'react-native-timeago';
import { colors } from '../styles';
import textStyles from '../styles/textStyles';

export default function NotificationCard({ title, description, date, type }) {
  
  const test_icon_ice = '../../assets/notificationIcons/ice.png';
  const test_icon_default = '../../assets/notificationIcons/default.png';
  // Only new notifications will appear as unread. Like, new popups :D
  // Would have groups of notification, one group for today, one for this week,
  // one for this month, one for older...

  // Sorting can be done simply, do not overthing, be dumb dumb.

  // Probably wont need redux, can do sorting on front end.

  // What happens if you get a message while in the notifications tab?

  return (
    <View
      style={{
        backgroundColor: colors.backgroundColor,
        justifyContent: 'flex-start',
        padding: 12,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={
            type === 'default'
              ? require(test_icon_default)
              : require(test_icon_ice)
          }
          style={styles.notificationIcon}
        />
        <Text style={textStyles.h5}> {title} </Text>
      </View>
      {description && (
        <Text style={[textStyles.body2, { paddingLeft: 4, paddingTop: 4 }]}>
          {description}
        </Text>
      )}
      <Text 
        style={[textStyles.body1, { paddingLeft: 4, paddingTop: 4 }]}
      >
        <TimeAgo interval={20000} time={date} />
      </Text>
    </View>
  );
}

NotificationCard.propTypes = {
  date: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  notificationIcon: {
    width: 25,
    height: 25,
    paddingBottom: 25,
    top: -2,
  }
})
