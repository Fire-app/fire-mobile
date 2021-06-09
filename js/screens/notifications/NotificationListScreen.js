import { FlatList, StyleSheet, View, Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import Toast from 'react-native-toast-message';

import { NOTIFICATION_LIST } from '../../../data/notification';
import NotificationCard from '../../components/NotificationCard';

import colors from '../../styles/colors';
import { DEFAULT_NOTIFICATION } from '../../../data/notificationOptions';

export default function NotificationListScreen() {
  const { t } = useTranslation();

  const [currTitle, setCurrTitle] = useState('empty');
  const [currMessage, setCurrMessage] = useState('empty');

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={{ paddingVertical: 36 }}
        data={NOTIFICATION_LIST}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        keyExtractor={(_, i) => `${i}`}
        renderItem={({ item: { title, message, date } }) => [
          setCurrTitle(title),
          setCurrMessage(message),
          <NotificationCard
            date={date}
            description={t(message)}
            title={t(title)}
          />,
        ]}
        style={styles.container}
      />
      <Button
        color="rgba(0,0,0,0.85)"
        onPress={() => {
          {
            Toast.show({
              autoHide: true,
              text1: currTitle,
              text2: currMessage,
              topOffset: DEFAULT_NOTIFICATION.offsetTop,
              visibilityTime: DEFAULT_NOTIFICATION.visibilityTime,
            });
          }
        }}
        title="Toast Notification Test"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    paddingHorizontal: 24,
  },
});
