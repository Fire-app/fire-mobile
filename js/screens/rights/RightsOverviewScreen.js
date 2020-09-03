import { Image, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import NavCard from '../../components/NavCard';
import { colors } from '../../styles';
import routes from '../../navigation/routes';

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
        description={t('scenarios_description')}
        onPress={() => {
          navigation.navigate(routes.scenarios.overviewList);
        }}
        title={t('scenarios_title')}
      />
      <View style={{ height: 8 }} />
      <NavCard
        description={t('videos_description')}
        onPress={() => {
          navigation.navigate(routes.videos.overviewList);
        }}
        title={t('videos_title')}
      />
      <View
        style={{ flexGrow: 1, justifyContent: 'flex-end', paddingBottom: 10 }}
      >
        <Image
          accessibilityLabel="Illustration"
          source={IMAGE}
          style={styles.image}
        />
      </View>
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
    backgroundColor: colors.backgroundColor,
    flexGrow: 1,
    padding: 20,
  },
  image: {
    alignSelf: 'center',
    height: 180,
    resizeMode: 'cover',
    width: 280,
  },
});
