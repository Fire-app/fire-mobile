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
      renderItem={({ item: { shortName, fullName, image } }) => (
        <NavCard
          description={t(fullName)}
          image={image}
          onPress={() =>
            navigation.navigate(routes.resources.details, {
              resourceId: shortName,
            })
          }
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
