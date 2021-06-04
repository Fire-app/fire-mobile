import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { NOTIFICATION_LIST } from '../../../data/notification';
import NotificationCard from '../../components/NotificationCard';

import colors from '../../styles/colors';
import textStyles from '../../styles/textStyles';

export default function NotificationListScreen({ navigation }) {
  const { t } = useTranslation();
  return (
    <FlatList
      contentContainerStyle={{ paddingVertical: 36 }}
      data={NOTIFICATION_LIST}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      keyExtractor={(_, i) => `${i}`}
      renderItem={({ item: { title, message, date } }) => (
        <NotificationCard
          date={date}
          description={t(message)}
          title={t(title)}
        />
      )}
      style={styles.container}
    />
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
});