import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

import ContactButtons from '../../components/Resources/ContactButtons';
import Name from '../../components/Resources/ResourcesName';
import Description from '../../components/Resources/ResourcesDescription';
import Services from '../../components/Resources/Services/ServiceList';
import Socials from '../../components/Resources/ResourcesSocials';
import { RESOURCES_MAP } from '../../../data/resources';

import colors from '../../styles/colors';

export default function DetailsScreen({
  route: {
    params: { mapId }, // same as const { mapId } = route.params
  },
}) {
  const { t } = useTranslation();
  const {
    fullName,
    website,
    phone,
    description,
    services,
    facebookUrl,
    instagramUrl,
    twitterUrl,
    youtubeUrl,
  } = RESOURCES_MAP[mapId];

  return (
    <ScrollView style={styles.container}>
      <Name text={fullName} />
      <ContactButtons
        onRightPress={() => WebBrowser.openBrowserAsync(website)}
        onLeftPress={() => Linking.openURL(phone)}
        rightTitle={t('Website')}
        leftTitle={t('Call')}
        callDisabled={false}
        websiteDisabled={false}
      />
      <Description text={t(description)} />
      <View style={styles.services}>
        <Services services={services} />
      </View>
      <Socials
        facebookUrl={facebookUrl}
        instagramUrl={instagramUrl}
        twitterUrl={twitterUrl}
        youtubeUrl={youtubeUrl}
      />
    </ScrollView>
  );
}

DetailsScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36,
    padding: 26,
    backgroundColor: colors.backgroundColor,
  },
  services: {
    flex: 1,
    width: '100%',
  },
});
