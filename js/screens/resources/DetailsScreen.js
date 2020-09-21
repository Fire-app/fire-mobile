import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';

import { RESOURCES_MAP } from '../../../data/resources';
import ContactButtons from '../../components/Resources/ContactButtons';
import Languages from '../../components/Resources/ResourcesLanguages';
import Description from '../../components/Resources/ResourcesDescription';
import Name from '../../components/Resources/ResourcesName';
import Services from '../../components/Resources/Services/ServiceList';
import Socials from '../../components/Resources/ResourcesSocials';

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
    languages,
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
        leftDisabled={false}
        leftTitle={t('resources_call_button')}
        onLeftPress={() => Linking.openURL(phone)}
        onRightPress={() => WebBrowser.openBrowserAsync(website)}
        rightDisabled={false} // TODO: add to data file in case orgs do not have website/phone
        rightTitle={t('resources_website_button')}
      />
      <Languages
        languages={languages}
        title={t('resources_languages_supported')}
      />
      <Description text={t(description)} title={t('resources_about')} />
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
    backgroundColor: colors.backgroundColor,
    flex: 1,
    padding: 26,
    paddingTop: 36,
  },
  services: {
    flex: 1,
    width: '100%',
  },
});
