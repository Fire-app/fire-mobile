import { View, Button } from 'react-native';
import React, { useState, useRef } from 'react';

import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NOTIFICATION_LIST, ICE, DEFAULT } from '../../../data/notification';

import NotificationButton from '../../components/Buttons/NotificationButton';
import NotificationList from '../../components/Resources/NotificationList';

import setupPush from '../../push_notifications/PushNotifications';

import toggleIceNotification from '../../store/actions/notification/toggleIceAction';

import toggleDefaultNotification from '../../store/actions/notification/toggleDefaultAction';

const moment = require('moment');

export default function NotificationListScreen({ navigation }) {
  
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef(null);

  setupPush(
    setExpoPushToken,
    setNotification,
    notificationListener,
    responseListener,
    navigation,
  );

  // NOTIFICATION STATE
  const [notificationArr, setNotificationArr] = useState(NOTIFICATION_LIST);

  // TYPE OF NOTIFICATION TO BE SEEN HANDLER: MOVE THIS TO A DIFF SCREEN LATER
  const dispatch = useDispatch();
  const toggleIce = () => dispatch(toggleIceNotification());
  const toggleDefault = () => dispatch(toggleDefaultNotification());

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
      dateKey = t('today');
    } else if (daysDuration < 8) {
      dateKey = t('this_week');
    } else if (daysDuration < 31) {
      dateKey = t('this_month');
    } else {
      dateKey = t('earlier');
    }

    if (iceState === false && notification.type === ICE) {
      return { ...obj };
    }
    if (defaultState === false && notification.type === DEFAULT) {
      return { ...obj };
    }
    return {
      ...obj,
      [dateKey]: [...(obj[dateKey] || []), notification],
    };
  }, {});

  const sections = Object.keys(notificationSorter)
    .sort(() => (a, b) => {
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
      <Button color="#841584" onPress={toggleIce} title="toggle Ice" />
      <Button color="green" onPress={toggleDefault} title="toggle Default" />
    </View>
  );
}
