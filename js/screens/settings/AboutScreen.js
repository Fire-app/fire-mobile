import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Row, Divider } from '../../components/SettingsSelector';
import routes from '../../navigation/routes';

const EmergencyToolkitScreen = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Divider />
      <Row
        title={t('privacy_policy')}
        onPress={() => navigation.navigate(routes.settings.privacy_policy)}
      />
      <Divider />
      <Row
        title={t('terms_of_service')}
        onPress={() => navigation.navigate(routes.settings.terms_of_service)}
      />
      <Divider />
      <Row
        title={t('rrn_partners')}
        onPress={() => navigation.navigate(routes.settings.partners)}
      />
      <Divider />
      <Row
        title={t('acknowledgements')}
        onPress={() => navigation.navigate(routes.settings.acknowledgements)}
      />
      <Divider />
    </View>
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
    flex: 1,
    backgroundColor: 'white',
  },
});
