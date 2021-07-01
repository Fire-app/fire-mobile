import React from 'react';
import { SectionList, Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import NotificationCard from '../NotificationCard';
import colors from '../../styles/colors';
import { useTranslation } from 'react-i18next';



// State is keeping track only of app stuff.
// All data that changes and needs to be saved is in the Redux store.

// State would only be used for seen and unseen notifications.
// The notification list would probably be tracked with Redux - All data is
//      tracked with Redux.

// Redux store will keep track of the state the user last left the app from,
// normal state cannot keep track of that!

// First do seen/unseen, then watch redux lecture.

// moment.locale sets the local the user is in.
const moment = require('moment');

moment.locale();

const renderItem = ({ item: { title, message, date } }) => (
  <NotificationCard date={date} description={message} title={title} />
);

const NotificationList = (props) => {
  let dateKey = '';
  const { t } = useTranslation();

  const notificationSorter = props.notifications.reduce((obj, notification) => {

    // Gets difference, in days, between curr notification date and moment.
    let now = moment(new Date())
    let momentDate = moment(notification.date)
    let duration = moment.duration(now.diff(momentDate))
    let daysDuration = duration.asDays()

    if (daysDuration < 1) {
      dateKey = t('Today');
    } else if (daysDuration < 8) {
      dateKey = t('This Week');
    } else if (daysDuration < 31) {
      dateKey = t('This Month');
    } else {
      dateKey = t('Earlier');
    }

    return {
      ...obj,
      [dateKey]: [...(obj[dateKey] || []), notification],
    };
  }, {});

  // Gets each letter from the section above, and creates an obj
  // Very dumb sorting function, how can I improve it??
  const sections = Object.keys(notificationSorter)
    .sort(function (a, b) {
      if (a == t('Today')) {
        return -1;
      }
      if (b == t('Today')) {
        return 1;
      }
      if (a == t('This Week')) {
        return -1;
      }
      if (b == t('This Week')) {
        return 1;
      }
      if (a == t('This Month')) {
        return -1;
      }
      if (b == t('This Month')) {
        return 1;
      }
      if (a == t('Earlier')) {
        return -1;
      }
      if (b == t('Earlier')) {
        return 1;
      }
    })
    .map((dateKey) => ({
      data: notificationSorter[dateKey],
      title: dateKey,
    }));

  return (
    <SectionList
      contentContainerStyle={{ paddingVertical: 36 }}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      keyExtractor={(_, i) => `${i}`}
      renderItem={renderItem}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
      sections={sections}
      style={styles.container}
    />
  );
};

NotificationList.propTypes = {
  notifications: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    color: 'blue',
    fontSize: 25,
  },
});

export default NotificationList;
