import { ScrollView, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import { Divider, Row } from '../../components/SettingsSelector';
import routes from '../../navigation/routes';

const EmergencyToolkitScreen = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <ScrollView
      alwaysBounceVertical={false}
      contentContainerStyle={styles.container}
    >
      <Divider />
      <Row
        onPress={() => navigation.navigate(routes.settings.privacy_policy)}
        title={t('privacy_policy')}
      />
      <Divider />
      <Row
        onPress={() => navigation.navigate(routes.settings.terms_of_service)}
        title={t('terms_of_service')}
      />
      <Divider />
      <Row
        onPress={() => navigation.navigate(routes.settings.partners)}
        title={t('rrn_partners')}
      />
      <Divider />
      <Row
        onPress={() => navigation.navigate(routes.settings.acknowledgements)}
        title={t('acknowledgements')}
      />
      <Divider />
    </ScrollView>
  );
};

EmergencyToolkitScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default EmergencyToolkitScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexGrow: 1,
  },
});
