import { FlatList, StyleSheet, View, Button } from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';

import { NOTIFICATION_LIST } from '../../../data/notification';
import NotificationCard from '../../components/NotificationCard';

import colors from '../../styles/colors';
import { DEFAULT_NOTIFICATION } from '../../../data/notificationOptions';

export default function NotificationListScreen() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={{ paddingVertical: 36 }}
        data={NOTIFICATION_LIST}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        keyExtractor={(_, i) => `${i}`}
        renderItem={({ item: { title, message, date } }) => (
          <NotificationCard date={date} description={message} title={title} />
        )}
        style={styles.container}
      />
      <Button
        color="rgba(0,0,0,0.85)"
        onPress={() => {
          Toast.show({
            autoHide: true,
            text1: 'example title',
            text2: 'example message',
            topOffset: DEFAULT_NOTIFICATION.offsetTop,
            visibilityTime: DEFAULT_NOTIFICATION.visibilityTime,
          });
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
