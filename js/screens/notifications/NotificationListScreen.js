import { View } from 'react-native';
import React, { useState } from 'react';

import { NOTIFICATION_LIST } from '../../../data/notification';

import NotificationButton from '../../components/Buttons/NotificationButton';
import NotificationList from '../../components/Resources/NotificationList';

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

  return (
    <View style={{ flex: 1 }}>
      <NotificationList notifications={NOTIFICATION_LIST}/>
      <NotificationButton/>
    </View>
  );
}
