import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import routes from '../../navigation/routes';
import NavCard from '../../components/NavCard';
import textStyles from '../../styles/textStyles';
import colors from '../../styles/colors';

// const caseRoutes = routes.scenarios.cases;

const SCENARIOS = [
  {
    title: 'Agent is outside my home',
    route: routes.scenarios.cases.outsideHome,
  },
  {
    title: 'Agent is inside my home',
    route: routes.scenarios.cases.insideHome,
  },
  {
    title: 'Agent arrests me',
    route: routes.scenarios.cases.homeArrest,
  },
];

export default function HomeOverviewScreen({ navigation }) {
  const { t } = useTranslation();
  return (
    <FlatList
      keyExtractor={(_, i) => `${i}`}
      style={styles.container}
      contentContainerStyle={{ paddingVertical: 24 }}
      data={SCENARIOS}
      ListHeaderComponent={
        <Text style={[textStyles.h3, { paddingBottom: 16 }]}>
          {'Select a scenario:'}
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
