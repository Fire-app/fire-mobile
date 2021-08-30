import { View } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NOTIFICATION_LIST, ICE, DEFAULT } from '../../../data/notification';

import NotificationButton from '../../components/Buttons/NotificationButton';
import NotificationList from '../../components/Resources/NotificationList';

import setupPush from '../../push_notifications/PushNotifications';

import registerNewToken from '../../util/registerNewExpoToken';

/* MOCK FETCH */

const moment = require('moment');

const TODAY = 'today';
const THIS_WEEK = 'this_week';
const THIS_MONTH = 'this_month';
const EARLIER = 'earlier';

export default function NotificationListScreen({ navigation }) {
  // Register expo token
  const token = 'ExponentPushToken[wY4HqoNco_fdu_DF2jmeSC]';
  const notification_types = ['alert', 'announcement', 'chirla_event'];
  const language = 'english';
  registerNewToken(token, language, notification_types);

  // Fetches most recent notifications
  fetch(
    `https://fire-app-staging.herokuapp.com/recent-notifications?expoToken=${token}&language=english`,
    {
      method: 'GET',
    }
  )
    .then((response) => response.json())
    .then((jsonObj) => console.log(jsonObj));

  // const [testhaha, settest] = useState([]);

  // fetch('/api/notifications')
  //   .then((res) => res.json())
  //   .then((json) => settest(json.notifications))
  //   .catch((err) => console.log(err));

  // try {
  //   fetch('/api/notifications')
  //     .then((res) => res.json())
  //     .then((json) => settest(json.notifications))
  //     .catch((err) => console.log(err));
  //   console.log("lol")
  // } catch {
  //   console.log(testhaha);
  // }

  const [notificationArr, setNotificationArr] = useState(NOTIFICATION_LIST);

  const iceState = useSelector((state) => state.notifications.ice_notification);
  const defaultState = useSelector(
    (state) => state.notifications.default_notifications
  );

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

    /* THIS CODE MAKES IT SO NotificationSet toggles what shows in the notification page

    if (iceState === false && notification.type === ICE) {
      return { ...obj };
    }
    if (defaultState === false && notification.type === DEFAULT) {
      return { ...obj };
    } */
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
