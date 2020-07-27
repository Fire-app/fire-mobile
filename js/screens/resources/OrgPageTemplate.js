/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

import ContactButtons from '../../components/Resources/ContactButtons';
import OrgName from '../../components/Resources/OrgName';
import OrgDescription from '../../components/Resources/OrgDescription';
import OrgServices from '../../components/Resources/OrgServices/ServiceList';
import OrgSocials from '../../components/Resources/OrgSocials';

import colors from '../../styles/colors';

export default function OrgPageTemplate({
  name,
  website,
  phone,
  description,
  services,
  facebookUrl,
  instagramUrl,
  twitterUrl,
  youtubeUrl,
}) {
  const { t } = useTranslation();
  return (
    <ScrollView style={styles.container}>
      <OrgName text={name} />
      <ContactButtons
        onRightPress={() => WebBrowser.openBrowserAsync(website)}
        onLeftPress={() => Linking.openURL(phone)}
        rightTitle={t('Website')}
        leftTitle={t('Call')}
        callDisabled={false}
        websiteDisabled={false}
      />
      <OrgDescription text={description} />
      <View style={styles.services}>
        <OrgServices services={services} />
      </View>
      <OrgSocials
        facebookUrl={facebookUrl}
        instagramUrl={instagramUrl}
        twitterUrl={twitterUrl}
        youtubeUrl={youtubeUrl}
      />
    </ScrollView>
  );
}

OrgPageTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  facebookUrl: PropTypes.string,
  instagramUrl: PropTypes.string,
  twitterUrl: PropTypes.string,
  youtubeUrl: PropTypes.string,
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
