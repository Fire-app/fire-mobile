import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import { HOME_SCENARIOS } from '../../../data/scenarios';
import { colors, textStyles } from '../../styles';
import NavCard from '../../components/NavCard';

export default function HomeOverviewScreen({ navigation }) {
  const { t } = useTranslation();
  return (
    <FlatList
      contentContainerStyle={{ paddingVertical: 24 }}
      data={HOME_SCENARIOS}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      keyExtractor={(_, i) => `${i}`}
      ListHeaderComponent={
        <Text style={[textStyles.h3, { paddingBottom: 16 }]}>
          {t('select_scenario')}
        </Text>
      }
      renderItem={({ item: { title, route } }) => (
        <NavCard
          onPress={() => navigation.navigate(route)}
          smallMode
          title={t(title)}
        />
      )}
      style={styles.container}
    />
  );
}

HomeOverviewScreen.propTypes = {
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
