import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import { textStyles, colors } from '../../styles';
import { Divider, Row } from '../../components/SettingsSelector';
import formattedVersionInfo from '../../util/versionInfo';
import resetOnboardingAction from '../../store/actions/resetOnboarding';
import routes from '../../navigation/routes';
import { ICON_NAMES } from '../../components/FireIcon';

const SettingsOverviewScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const resetOnboarding = () => dispatch(resetOnboardingAction());

  const announcements = useSelector(
    (state) => state.notifications.announcements
  );

  const arrestAlerts = useSelector((state) => state.notifications.arrestAlerts);

  const eventAlerts = useSelector((state) => state.notifications.eventAlerts);

  return (
    <ScrollView
      alwaysBounceVertical={false}
      contentContainerStyle={styles.container}
    >
      <Divider />
      <Row
        hasIcon
        iconName={ICON_NAMES.ALERT}
        onPress={() => navigation.navigate(routes.settings.hotline)}
        title={t('emergency_hotline')}
      />
      <Divider />
      <Row
        iconName={ICON_NAMES.GLOBE}
        onPress={() => navigation.navigate(routes.settings.language)}
        title={t('language')}
      />
      <Divider />
      <Row
        iconName={ICON_NAMES.BELL}
        onPress={() => navigation.navigate(routes.settings.notifications)}
        title={t('notifications')}
      />
      <Divider />
      <Row
        iconName={ICON_NAMES.INFO}
        onPress={() => navigation.navigate(routes.settings.about)}
        title={t('about')}
      />
      <Divider />
      {__DEV__ && (
        <>
          <Row
            iconName={ICON_NAMES.ROTATE_CCW}
            onPress={resetOnboarding}
            title="Restart Set-Up"
          />
          <Divider />
        </>
      )}
      {__DEV__ && (
        <>
          <Text>{'Notifications State:'}</Text>
          <Text>{'Arrest Alerts:'}</Text>
          {arrestAlerts ? <Text>{'  true'}</Text> : <Text>{'  false'}</Text>}
          <Text>{'Event Alerts:'}</Text>
          {eventAlerts ? <Text>{' true'}</Text> : <Text>{'  false'}</Text>}
          <Text>{'Announcements:'}</Text>
          {announcements ? <Text>{' true'}</Text> : <Text>{'  false'}</Text>}
        </>
      )}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: 30,
          paddingVertical: 8,
        }}
      >
        <Text style={[textStyles.h3, { textAlign: 'center' }]}>
          {formattedVersionInfo()}
        </Text>
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
    backgroundColor: colors.white,
    flexGrow: 1,
  },
});
