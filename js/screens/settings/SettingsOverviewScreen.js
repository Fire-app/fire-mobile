import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import resetOnboardingAction from '../../store/actions/resetOnboarding';
import { Row, Divider } from '../../components/SettingsSelector';
import { textStyles } from '../../styles';
import routes from '../../navigation/routes';
import formattedVersionInfo from '../../util/versionInfo';

const SettingsOverviewScreen = ({ navigation }) => {
  const { t } = useTranslation();

  // TODO: temporary hack to test onboarding
  const dispatch = useDispatch();
  const resetOnboarding = () => dispatch(resetOnboardingAction());

  return (
    <View style={styles.container}>
      <Divider />
      <Row
        hasIcon
        iconName="alert"
        title={t('emergency_toolkit')}
        onPress={() => navigation.navigate(routes.settings.toolkit)}
      />
      <Divider />
      <Row
        hasIcon
        iconName="earth"
        title={t('language')}
        onPress={() => navigation.navigate(routes.settings.language)}
      />
      <Divider />
      <Row
        hasIcon
        iconName="alarm"
        title={t('notifications')}
        onPress={() => {
          // TODO
        }}
      />
      <Divider />
      {__DEV__ && (
        <>
          <Row
            hasIcon
            iconName="backup-restore"
            title="Restart Set-Up"
            onPress={resetOnboarding}
          />
          <Divider />
        </>
      )}
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <View style={{ paddingVertical: 8, marginBottom: 30 }}>
          <Text style={[textStyles.h3, { textAlign: 'center' }]}>
            {formattedVersionInfo()}
          </Text>
        </View>
      </View>
    </View>
  );
};

SettingsOverviewScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SettingsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
