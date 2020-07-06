import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import routes from '../../navigation/routes';
import NavCard from '../../components/NavCard';
import textStyles from '../../styles/textStyles';
import colors from '../../styles/colors';

const caseRoutes = routes.scenarios.cases;

const SCENARIOS = [
  {
    title: 'Home',
    route: caseRoutes.insideHome,
    icon: 'home-outline',
  },
  {
    title: 'Work',
    route: caseRoutes.work,
    icon: 'briefcase-outline',
  },
  {
    title: 'Street',
    route: caseRoutes.street,
    icon: 'walk',
  },
  {
    title: 'Driving',
    route: caseRoutes.driving,
    icon: 'car',
  },
  {
    title: 'Public_Transit',
    route: caseRoutes.publicTransport,
    icon: 'subway-variant',
  },
];

export default function ScenarioListScreen({ navigation }) {
  const { t } = useTranslation();
  return (
    <FlatList
      keyExtractor={(_, i) => `${i}`}
      style={styles.container}
      contentContainerStyle={{ paddingVertical: 24 }}
      data={SCENARIOS}
      ListHeaderComponent={
        <Text
          style={[textStyles.h3, { textAlign: 'center', paddingBottom: 16 }]}
        >
          {t('scenarios_subtitle')}
        </Text>
      }
      renderItem={({ item: { title, description, route, icon } }) => (
        <NavCard
          title={t(title)}
          onPress={() => navigation.navigate(route)}
          icon={icon}
        />
      )}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
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
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.backgroundColor,
  },
});
