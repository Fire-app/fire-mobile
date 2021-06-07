import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';

import { NOTIFICATION_LIST } from '../../../data/notification';
import NotificationCard from '../../components/NotificationCard';

import colors from '../../styles/colors';
import textStyles from '../../styles/textStyles';

export default function NotificationListScreen({ navigation }) {
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
        renderItem={({ item: { title, message, date } }) => (
          setCurrTitle(title),
          setCurrMessage(message),
          (
            <NotificationCard
              date={date}
              description={t(message)}
              title={t(title)}
            />
          )
        )}
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
              topOffset: 10,
              visibilityTime: 5000,
            });
          }
        }}
        title="Toast Notification Test"
      />
    </View>
  );
}

NotificationListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    paddingHorizontal: 24,
  },
  notTest: {
    backgroundColor: 'blue',
    flex: 2,
    height: 10,
    width: 100,
  },
});
