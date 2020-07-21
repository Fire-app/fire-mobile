/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import routes from '../../navigation/routes';
import { textStyles, screenStyles, colors } from '../../styles';
import NavigationButtons from '../../components/Buttons/NavigationButtons';
import ProgressCircles from '../../components/ProgressCircles';

const onboardingRoutes = routes.onboarding;

const ToolkitInfoSection = ({ title, subtitle, iconName }) => {
  return (
    <View style={styles.infoContainer}>
      <MaterialCommunityIcons name={iconName} style={styles.infoIcon} />
      <View>
        <Text style={[textStyles.h3, styles.infoTitle]}>{title}</Text>
        <Text style={textStyles.body1}>{subtitle}</Text>
      </View>
    </View>
  );
};

ToolkitInfoSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

const ToolkitTitleInfo = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.titleContainer}>
      <View style={styles.alertIconContainer}>
        <MaterialCommunityIcons name="alert-outline" style={styles.alertIcon} />
      </View>
      <Text style={[textStyles.h1, styles.title]}>
        {t('your_emergency_toolkit')}
      </Text>
      <Text style={[textStyles.body1, styles.subtitle]}>
        {t('your_emergency_toolkit_note')}
      </Text>
    </View>
  );
};

const ToolkitIntroScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <View style={screenStyles.container}>
      <View style={screenStyles.contentContainer}>
        <View style={{ padding: 20 }} />
        <ToolkitTitleInfo />
        <ToolkitInfoSection
          title={t('emergency_hotline')}
          subtitle={t('emergency_hotline_note')}
          iconName="phone-outline"
        />
        <ToolkitInfoSection
          title={t('rights_card')}
          subtitle={t('rights_card_note')}
          iconName="credit-card-outline"
        />
        <ProgressCircles numSteps={2} step={2} />
      </View>
      <NavigationButtons
        onSecondaryPress={() => navigation.pop()}
        onPrimaryPress={() => navigation.navigate(onboardingRoutes.hotline)}
        secondaryTitle={t('back')}
        primaryTitle={t('next')}
      />
    </View>
  );
};

ToolkitIntroScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default ToolkitIntroScreen;

const styles = StyleSheet.create({
  circleIndicatorContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  titleContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  alertIconContainer: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    padding: 15,
  },
  alertIcon: {
    fontSize: 50,
    color: 'white',
  },
  title: {
    padding: 5,
    paddingTop: 30,
  },
  subtitle: {
    color: colors.textLight,
    textAlign: 'center',
    padding: 5,
  },
  infoTitle: {
    paddingTop: 10,
    paddingBottom: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  infoIcon: {
    color: colors.charcoalGrey,
    fontSize: 20,
    padding: 10,
  },
});