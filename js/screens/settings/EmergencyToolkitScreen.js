import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import { Divider, Row } from '../../components/SettingsSelector';
import routes from '../../navigation/routes';

const EmergencyToolkitScreen = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Divider />
      <Row
        onPress={() => navigation.navigate(routes.settings.hotline)}
        title={t('emergency_hotline')}
      />
      <Divider />
      <Row
        onPress={() => navigation.navigate(routes.settings.rights_card)}
        title={t('rights_card')}
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
    backgroundColor: 'white',
    flex: 1,
  },
});
