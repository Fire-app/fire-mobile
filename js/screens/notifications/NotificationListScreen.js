import { View } from 'react-native';
import React, { useState, useRef } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NOTIFICATION_LIST, ICE, DEFAULT } from '../../../data/notification';

import NotificationButton from '../../components/Buttons/NotificationButton';
import NotificationList from '../../components/Resources/NotificationList';

import setupPush from '../../push_notifications/PushNotifications';

const moment = require('moment');

const TODAY = 'today';
const THIS_WEEK = 'this_week';
const THIS_MONTH = 'this_month';
const EARLIER = 'earlier';

export default function NotificationListScreen({ navigation }) {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef(null);

  // setupPush(
  //   setExpoPushToken,
  //   setNotification,
  //   notificationListener,
  //   responseListener,
  //   navigation,
  // );

  let dateKey = '';
  const { t } = useTranslation();

  const notificationSorter = notificationArr.reduce((obj, notification) => {
    moment.locale();
    // Gets difference, in days, between curr notification date and moment.
    const now = moment(new Date());
    const momentDate = moment(notification.date);
    const duration = moment.duration(now.diff(momentDate));
    const daysDuration = duration.asDays();

    if (daysDuration < 1) {
      dateKey = t(TODAY);
    } else if (daysDuration < 8) {
      dateKey = t(THIS_WEEK);
    } else if (daysDuration < 31) {
      dateKey = t(THIS_MONTH);
    } else {
      dateKey = t(EARLIER);
    }
  
    /*
    if (iceState === false && notification.type === ICE) {
      return { ...obj };
    }
    if (defaultState === false && notification.type === DEFAULT) {
      return { ...obj };
    }*/
    return {
      ...obj,
      [dateKey]: [...(obj[dateKey] || []), notification],
    };
  }, {});

  const sections = Object.keys(notificationSorter)
    .sort(() => (a, b) => {
      if (a == t(TODAY)) {
        return -1;
      }
      if (b == t(TODAY)) {
        return 1;
      }
      if (a == t(THIS_WEEK)) {
        return -1;
      }
      if (b == t(THIS_WEEK)) {
        return 1;
      }
      if (a == t(THIS_MONTH)) {
        return -1;
      }
      if (b == t(THIS_MONTH)) {
        return 1;
      }
      if (a == t(EARLIER)) {
        return -1;
      }
      if (b == t(EARLIER)) {
        return 1;
      }
      return 1;
    })
    .map((dateKey) => ({
      data: notificationSorter[dateKey],
      title: dateKey,
    }));

  return (
    <View style={{ flex: 1 }}>
      <NotificationList sections={sections} />
      <NotificationButton
        addNotification={setNotificationArr}
        currNotification={notificationArr}
      />
    </View>
  );
}
