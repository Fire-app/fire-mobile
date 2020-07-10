import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import { TouchableHighlight } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import resetOnboardingAction from '../../store/actions/resetOnboarding';

import { textStyles, colors } from '../../styles';
import routes from '../../navigation/routes';
import formattedVersionInfo from '../../util/versionInfo';

const SettingsIcon = ({ name }) => (
  <View
    style={{
      height: 34,
      width: 34,
      borderRadius: 34,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primaryLighter,
      marginRight: 8,
    }}
  >
    <MaterialCommunityIcons name={name} size={24} color={colors.primary} />
  </View>
);

SettingsIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

const Divider = () => (
  <View
    style={{ borderColor: 'gray', borderWidth: StyleSheet.hairlineWidth }}
  />
);

const Row = ({ iconName, title, onPress }) => (
  <TouchableHighlight underlayColor={colors.primaryLighter} onPress={onPress}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 24,
      }}
    >
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        {/* TODO: real icons */}
        <SettingsIcon name={iconName} />
        <Text style={textStyles.h3}>{title}</Text>
      </View>
      <MaterialCommunityIcons
        name="chevron-right"
        size={34}
        color={colors.primary}
      />
    </View>
  </TouchableHighlight>
);
Row.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const SettingsOverviewScreen = ({ navigation }) => {
  const { t } = useTranslation();

  // TODO: temporary hack to test onboarding
  const dispatch = useDispatch();
  const resetOnboarding = () => dispatch(resetOnboardingAction());

  return (
    <View style={styles.container}>
      <Divider />
      <Row iconName="pin" title={t('location')} onPress={() => {}} />
      <Divider />
      <Row
        iconName="earth"
        title={t('language')}
        onPress={() => navigation.navigate(routes.settings.language)}
      />
      <Divider />
      <Row
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
