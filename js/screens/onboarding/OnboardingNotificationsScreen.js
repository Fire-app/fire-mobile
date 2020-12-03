import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { View } from 'react-native';
import OnboardingTemplate from './Template';
import OnboardingTitle from '../../components/OnboardingTitle';
import NotificationSwitch from '../../components/NotificationSwitch';
import routes from '../../navigation/routes';
import setAnnouncementsAction from '../../store/actions/setAnnouncementsAction';
import setArrestAlertsAction from '../../store/actions/setArrestAlertsAction';
import setEventAlertsAction from '../../store/actions/setEventAlertsAction';

const onboardingRoutes = routes.onboarding;

const NotificationsScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [arrestAlerts, setArrestAlerts] = useState(true);
  const [eventAlerts, setEventAlerts] = useState(true);
  const [announcements, setAnnouncements] = useState(true);

  const dispatch = useDispatch();
  const saveNotifications = () => {
    dispatch(setAnnouncementsAction(announcements));
    dispatch(setArrestAlertsAction(arrestAlerts));
    dispatch(setEventAlertsAction(eventAlerts));
    navigation.navigate(onboardingRoutes.complete);
  };

  return (
    <OnboardingTemplate
      primaryButton={{
        onPress: saveNotifications,
        title: t('finish'),
      }}
      secondaryButton={{
        onPress: () => navigation.pop(),
        title: t('back'),
      }}
    >
      <OnboardingTitle
        subtitle={t('select_notifications')}
        title={t('opt_in_to_push_notifications')}
      />
      {/* TODO: finalize and localize strings */}
      <NotificationSwitch
        subtitle="Description"
        title="Verified ICE Arrest Alerts"
        toggleValue={() => setArrestAlerts((prevState) => !prevState)}
        value={arrestAlerts}
      />
      <View style={{ height: 10 }} />
      <NotificationSwitch
        subtitle="Description"
        title="CHIRLA Events"
        toggleValue={() => setEventAlerts((prevState) => !prevState)}
        value={eventAlerts}
      />
      <View style={{ height: 10 }} />
      <NotificationSwitch
        subtitle="Description"
        title="Announcements"
        toggleValue={() => setAnnouncements((prevState) => !prevState)}
        value={announcements}
      />
    </OnboardingTemplate>
  );
};

NotificationsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default NotificationsScreen;
