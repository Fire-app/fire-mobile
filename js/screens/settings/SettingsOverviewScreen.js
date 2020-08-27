import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import { textStyles } from '../../styles';
import { FEATHER, IONICONS } from '../../../data/fontFamilies';
import { Divider, Row } from '../../components/SettingsSelector';
import formattedVersionInfo from '../../util/versionInfo';
import resetOnboardingAction from '../../store/actions/resetOnboarding';
import routes from '../../navigation/routes';

const SettingsOverviewScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const resetOnboarding = () => dispatch(resetOnboardingAction());

  return (
    <ScrollView
      alwaysBounceVertical={false}
      contentContainerStyle={styles.container}
    >
      <Divider />
      <Row
        hasIcon
        icon={{
          family: FEATHER,
          name: 'alert-triangle',
        }}
        onPress={() => navigation.navigate(routes.settings.toolkit)}
        title={t('emergency_toolkit')}
      />
      <Divider />
      <Row
        hasIcon
        icon={{
          family: IONICONS,
          name: 'md-globe',
        }}
        onPress={() => navigation.navigate(routes.settings.language)}
        title={t('language')}
      />
      <Divider />
      <Row
        hasIcon
        icon={{
          family: FEATHER,
          name: 'bell',
        }}
        onPress={() => {
          // TODO
        }}
        title={t('notifications')}
      />
      <Divider />
      <Row
        hasIcon
        icon={{
          family: FEATHER,
          name: 'info',
        }}
        onPress={() => navigation.navigate(routes.settings.about)}
        title={t('about')}
      />
      <Divider />
      {__DEV__ && (
        <>
          <Row
            hasIcon
            icon={{
              family: FEATHER,
              name: 'rotate-ccw',
            }}
            onPress={resetOnboarding}
            title="Restart Set-Up"
          />
          <Divider />
        </>
      )}
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <View style={{ marginBottom: 30, paddingVertical: 8 }}>
          <Text style={[textStyles.h3, { textAlign: 'center' }]}>
            {formattedVersionInfo()}
          </Text>
        </View>
      </View>
    </ScrollView>
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
    backgroundColor: 'white',
    flexGrow: 1,
  },
});
