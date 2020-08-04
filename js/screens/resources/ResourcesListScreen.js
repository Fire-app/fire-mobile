import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import routes from '../../navigation/routes';
import NavCard from '../../components/NavCard';
import { RESOURCES_LIST } from '../../../data/resources';

import textStyles from '../../styles/textStyles';
import colors from '../../styles/colors';

export default function ResourcesListScreen({ navigation }) {
  const { t } = useTranslation();
  const route = routes.resources.details; // navigate to generic DetailScreen page

  return (
    <FlatList
      keyExtractor={(_, i) => `${i}`}
      style={styles.container}
      contentContainerStyle={{ paddingVertical: 36 }}
      data={RESOURCES_LIST}
      ListHeaderComponent={
        <Text
          style={[
            textStyles.h2,
            {
              textAlign: 'left',
              paddingBottom: 16,
            },
          ]}
        >
          {t('resources_subtitle')}
        </Text>
      }
      renderItem={({ item: { shortName, fullName } }) => (
        <NavCard
          title={t(shortName)}
          description={t(fullName)}
          onPress={() => navigation.navigate(route, { mapId: shortName })}
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
