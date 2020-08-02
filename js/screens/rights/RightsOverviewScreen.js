/* eslint-disable global-require */
import React from 'react';
import { ScrollView, StyleSheet, StatusBar, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import NavCard from '../../components/NavCard';
import routes from '../../navigation/routes';
import { colors } from '../../styles';

const IMAGE = require('../../../assets/illustration1.png');

export default function RightsOverviewScreen({ navigation }) {
  const { t } = useTranslation();
  return (
    <ScrollView
      alwaysBounceVertical={false}
      contentContainerStyle={styles.container}
    >
      <StatusBar barStyle="dark-content" />
      <NavCard
        title={t('scenarios_title')}
        description={t('scenarios_description')}
        onPress={() => {
          navigation.navigate(routes.scenarios.overviewList);
        }}
      />
      <View style={{ height: 16 }} />
      <NavCard
        title={t('videos_title')}
        description={t('videos_description')}
        onPress={() => {
          navigation.navigate(routes.videos.overviewList);
        }}
      />
    </ScrollView>
  );
}

RightsOverviewScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: colors.backgroundColor,
    // justifyContent: 'space-between',
  },
  image: {
    height: 180,
    width: 280,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
});
