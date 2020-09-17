import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import NavCard from '../../../components/NavCard';
import { SCENARIO_MAP } from '../../../../data/scenarios';
import colors from '../../../styles/colors';
import textStyles from '../../../styles/textStyles';
import routes from '../../../navigation/routes';

export default function ScenarioSublistScreen({
  navigation,
  route: {
    params: { scenarios },
  },
}) {
  const { t } = useTranslation();
  return (
    <FlatList
      contentContainerStyle={{ paddingVertical: 24 }}
      data={scenarios}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      keyExtractor={(_, i) => `${i}`}
      ListHeaderComponent={
        <Text style={[textStyles.h3, { paddingBottom: 16 }]}>
          {t('select_scenario')}
        </Text>
      }
      renderItem={({ item: scenarioId }) => (
        <NavCard
          onPress={() =>
            navigation.navigate(routes.scenarios.details, { scenarioId })
          }
          smallMode
          title={t(SCENARIO_MAP[scenarioId].title)}
        />
      )}
      style={styles.container}
    />
  );
}

ScenarioSublistScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      scenarios: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    paddingHorizontal: 24,
  },
});
