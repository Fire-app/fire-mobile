import { useSelector, useDispatch } from 'react-redux';
// import { useTranslation } from 'react-i18next';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import NotificationSwitch from '../../components/NotificationSwitch';
import { colors } from '../../styles';
import setAnnouncementsAction from '../../store/actions/setAnnouncementsAction';
import setArrestAlertsAction from '../../store/actions/setArrestAlertsAction';
import setEventAlertsAction from '../../store/actions/setEventAlertsAction';

const NotificationsScreen = () => {
  // const { t } = useTranslation();
  const announcements = useSelector(
    (state) => state.notifications.announcements
  );

  const arrestAlerts = useSelector((state) => state.notifications.arrestAlerts);

  const eventAlerts = useSelector((state) => state.notifications.eventAlerts);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {/* TODO: finalize and localize strings */}
      <NotificationSwitch
        subtitle="Description"
        title="Verified ICE Arrest Alerts"
        toggleValue={() => {
          dispatch(setArrestAlertsAction(!arrestAlerts));
        }}
        value={arrestAlerts}
      />
      <View style={{ height: 10 }} />
      <NotificationSwitch
        subtitle="Description"
        title="CHIRLA Events"
        toggleValue={() => {
          dispatch(setEventAlertsAction(!eventAlerts));
        }}
        value={eventAlerts}
      />
      <View style={{ height: 10 }} />
      <NotificationSwitch
        subtitle="Description"
        title="Announcements"
        toggleValue={() => {
          dispatch(setAnnouncementsAction(!announcements));
        }}
        value={announcements}
      />
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 20,
    paddingTop: 30,
  },
});
