import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';

import { RESOURCES_LIST } from '../../../data/resources';
import NavCard from '../../components/NavCard';
import routes from '../../navigation/routes';

import colors from '../../styles/colors';
import textStyles from '../../styles/textStyles';

export default function ResourcesListScreen({ navigation }) {
  const { t } = useTranslation();
  const route = routes.resources.details; // navigate to generic DetailScreen page

  return (
    <FlatList
      contentContainerStyle={{ paddingVertical: 36 }}
      data={RESOURCES_LIST}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      keyExtractor={(_, i) => `${i}`}
      ListHeaderComponent={
        <Text
          style={[
            textStyles.h2,
            {
              paddingBottom: 16,
              textAlign: 'left',
            },
          ]}
        >
          {t('resources_subtitle')}
        </Text>
      }
      renderItem={({ item: { shortName, fullName } }) => (
        <NavCard
          description={t(fullName)}
          onPress={() => navigation.navigate(route, { mapId: shortName })}
          title={t(shortName)}
        />
      )}
      style={styles.container}
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
    backgroundColor: colors.backgroundColor,
    flex: 1,
    paddingHorizontal: 24,
  },
});