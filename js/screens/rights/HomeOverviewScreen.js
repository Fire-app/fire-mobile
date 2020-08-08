import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import NavCard from '../../components/NavCard';
import { HOME_SCENARIOS } from '../../../data/scenarios';
import { textStyles, colors } from '../../styles';

export default function HomeOverviewScreen({ navigation }) {
  const { t } = useTranslation();
  return (
    <FlatList
      keyExtractor={(_, i) => `${i}`}
      style={styles.container}
      contentContainerStyle={{ paddingVertical: 24 }}
      data={HOME_SCENARIOS}
      ListHeaderComponent={
        <Text style={[textStyles.h3, { paddingBottom: 16 }]}>
          {t('select_scenario')}
        </Text>
      }
      renderItem={({ item: { title, route } }) => (
        <NavCard
          title={t(title)}
          onPress={() => navigation.navigate(route)}
          smallMode
        />
      )}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
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
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.backgroundColor,
  },
});
