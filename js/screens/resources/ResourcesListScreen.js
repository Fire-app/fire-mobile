/* eslint-disable global-require */
import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import routes from '../../navigation/routes';
import NavCard from '../../components/NavCard';
import textStyles from '../../styles/textStyles';
import colors from '../../styles/colors';

const caseRoutes = routes.resources.cases;

const ORGANIZATIONS = [
  {
    title: 'AAAJ',
    description: 'Asian Americans Advancing Justice',
    route: caseRoutes.AAAJ,
  },
  {
    title: 'CARECEN',
    description: 'Central American Resource Center',
    route: caseRoutes.CARECEN,
  },
  {
    title: 'CHIRLA',
    description: 'Coalition for Humane Immigrant Rights',
    route: caseRoutes.CHIRLA,
  },
];

export default function ResourcesListScreen({ navigation }) {
  const { t } = useTranslation();

  return (
    <FlatList
      keyExtractor={(_, i) => `${i}`}
      style={styles.container}
      contentContainerStyle={{ paddingVertical: 24 }}
      data={ORGANIZATIONS}
      ListHeaderComponent={
        <Text style={[textStyles.h2, { textAlign: 'left', paddingBottom: 16 }]}>
          {t('resources_subtitle')}
        </Text>
      }
      renderItem={({ item: { title, description, route } }) => (
        <NavCard
          title={t(title)}
          description={t(description)}
          onPress={() => navigation.navigate(route)}
        />
      )}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
    />
  );
}

ResourcesListScreen.propTypes = {
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
