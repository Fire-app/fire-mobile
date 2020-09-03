import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import NavCard from '../../components/NavCard';
import { SCENARIOS } from '../../../data/scenarios';
import colors from '../../styles/colors';
import textStyles from '../../styles/textStyles';

export default function ScenarioListScreen({ navigation }) {
  const { t } = useTranslation();
  return (
    <FlatList
      contentContainerStyle={{ paddingVertical: 24 }}
      data={SCENARIOS}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      keyExtractor={(_, i) => `${i}`}
      ListHeaderComponent={
        <Text
          style={[textStyles.h3, { paddingBottom: 16, textAlign: 'center' }]}
        >
          {t('scenarios_subtitle')}
        </Text>
      }
      renderItem={({ item: { title, route, icon } }) => (
        <NavCard
          icon={icon}
          onPress={() => navigation.navigate(route)}
          title={t(title)}
        />
      )}
      style={styles.container}
    />
  );
}

ScenarioListScreen.propTypes = {
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
