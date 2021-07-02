import { View } from 'react-native';
import React, { useState } from 'react';

import { NOTIFICATION_LIST } from '../../../data/notification';

import NotificationButton from '../../components/Buttons/NotificationButton';
import NotificationList from '../../components/Resources/NotificationList';

import { useTranslation } from 'react-i18next';


// State is keeping track only of app stuff.
// All data that changes and needs to be saved is in the Redux store.

// State would only be used for seen and unseen notifications.
// The notification list would probably be tracked with Redux - All data is 
//      tracked with Redux.

// Redux store will keep track of the state the user last left the app from, 
// normal state cannot keep track of that!

// First do seen/unseen, then watch redux lecture.


export default function NotificationListScreen() {

  // Will change how notifications are handled.
  let dateKey = '';
  const { t } = useTranslation();

  const notificationSorter = NOTIFICATION_LIST.reduce((obj, notification) => {
    const moment = require('moment');

    moment.locale();
    // Gets difference, in days, between curr notification date and moment.
    let now = moment(new Date())
    let momentDate = moment(notification.date)
    let duration = moment.duration(now.diff(momentDate))
    let daysDuration = duration.asDays()

    if (daysDuration < 1) {
      dateKey = t('today');
    } else if (daysDuration < 8) {
      dateKey = t('this_week');
    } else if (daysDuration < 31) {
      dateKey = t('this_month');
    } else {
      dateKey = t('earlier');
    }

    return {
      ...obj,
      [dateKey]: [...(obj[dateKey] || []), notification],
    };
  }, {});

  const sections = Object.keys(notificationSorter)
    .sort(function (a, b) {
      if (a == t('today')) {
        return -1;
      }
      if (b == t('today')) {
        return 1;
      }
      if (a == t('this_week')) {
        return -1;
      }
      if (b == t('this_week')) {
        return 1;
      }
      if (a == t('this_month')) {
        return -1;
      }
      if (b == t('this_month')) {
        return 1;
      }
      if (a == t('earlier')) {
        return -1;
      }
      if (b == t('earlier')) {
        return 1;
      }
    })
    .map((dateKey) => ({
      data: notificationSorter[dateKey],
      title: dateKey,
    }));

  return (
    <View style={{ flex: 1 }}>
      <NotificationList sections={sections}/>
      <NotificationButton/>
    </View>
  );
}
