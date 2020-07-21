/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import routes from '../../navigation/routes';
import { screenStyles, colors, textStyles } from '../../styles';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import ProgressCircles from '../../components/ProgressCircles';

const onboardingRoutes = routes.onboarding;

const InfoSection = ({ title, subtitle, iconName }) => {
  return (
    <View style={styles.infoSectionContainer}>
      <MaterialCommunityIcons name={iconName} style={styles.icon} />
      <View>
        <Text style={[textStyles.h1, styles.title]}>{title}</Text>
        <Text style={[textStyles.body1, { color: colors.textLight }]}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

InfoSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

const IntroScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <View style={screenStyles.container}>
      <View style={screenStyles.contentContainer}>
        <View style={{ padding: 20 }} />
        <InfoSection
          title={t('know_your_rights')}
          subtitle={t('know_your_rights_sub')}
          iconName="shield-home"
        />
        <InfoSection
          title={t('protect_yourself')}
          subtitle={t('protect_yourself_sub')}
          iconName="alert-outline"
        />
        <InfoSection
          title={t('connect_with_orgs')}
          subtitle={t('connect_with_orgs_sub')}
          iconName="file-document-outline"
        />
        <ProgressCircles numSteps={2} step={1} />
      </View>
      <PrimaryButton
        title={t('continue')}
        onPress={() => navigation.navigate(onboardingRoutes.toolkitIntro)}
      />
    </View>
  );
};

IntroScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default IntroScreen;

const styles = StyleSheet.create({
  circleIndicatorContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  infoSectionContainer: {
    flexDirection: 'row',
    paddingLeft: 40,
    paddingRight: 50,
    paddingVertical: 20,
  },
  icon: {
    color: colors.primary,
    fontSize: 40,
    padding: 15,
  },
  title: {
    paddingVertical: 10,
  },
});
