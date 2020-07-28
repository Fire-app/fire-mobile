import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import resetOnboardingAction from '../../store/actions/resetOnboarding';
import { Row, Divider } from '../../components/SettingsSelector';
import { FEATHER, IONICONS } from '../../../data/fontFamilies';
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
        icon={{
          name: 'alert-triangle',
          family: FEATHER,
        }}
        title={t('emergency_toolkit')}
        onPress={() => navigation.navigate(routes.settings.toolkit)}
      />
      <Divider />
      <Row
        hasIcon
        icon={{
          name: 'md-globe',
          family: IONICONS,
        }}
        title={t('language')}
        onPress={() => navigation.navigate(routes.settings.language)}
      />
      <Divider />
      <Row
        hasIcon
        icon={{
          name: 'bell',
          family: FEATHER,
        }}
        title={t('notifications')}
        onPress={() => {
          // TODO
        }}
      />
      <Divider />
      <Row
        hasIcon
        icon={{
          name: 'info',
          family: FEATHER,
        }}
        title={t('about')}
        onPress={() => navigation.navigate(routes.settings.about)}
      />
      <Divider />
      {__DEV__ && (
        <>
          <Row
            hasIcon
            icon={{
              name: 'rotate-ccw',
              family: FEATHER,
            }}
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
