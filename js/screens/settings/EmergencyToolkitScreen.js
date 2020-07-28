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
        title={t('emergency_hotline')}
        onPress={() => navigation.navigate(routes.settings.hotline)}
      />
      <Divider />
      <Row
        title={t('rights_card')}
        onPress={() => navigation.navigate(routes.settings.rights_card)}
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
