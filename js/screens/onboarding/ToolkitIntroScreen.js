/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import routes from '../../navigation/routes';
import { textStyles, colors } from '../../styles';
import OnboardingTemplate from './Template';
import OnboardingTitle from '../../components/OnboardingTitle';

const onboardingRoutes = routes.onboarding;

const ToolkitTitleInfo = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.titleContainer}>
      <View style={{ height: 30 }} />
      <View style={styles.alertIconContainer}>
        <MaterialCommunityIcons name="alert-outline" style={styles.alertIcon} />
      </View>
      <View style={{ height: 30 }} />
      <OnboardingTitle
        title={t('your_emergency_toolkit')}
        subtitle={t('your_emergency_toolkit_note')}
        alignCenter
        paddingHorizontal={10}
        paddingVertical={0}
      />
    </View>
  );
};

const ToolkitInfoSection = ({ title, subtitle, iconName }) => {
  return (
    <View style={styles.infoContainer}>
      <MaterialCommunityIcons name={iconName} style={styles.infoIcon} />
      <View style={{ flex: 1, paddingRight: 10 }}>
        <Text style={[textStyles.h5, styles.infoTitle]}>{title}</Text>
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

const ToolkitIntroScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <OnboardingTemplate
      step={2}
      primaryButton={{
        title: t('next'),
        onPress: () => navigation.navigate(onboardingRoutes.hotline),
      }}
      secondaryButton={{
        title: t('back'),
        onPress: () => navigation.pop(),
      }}
    >
      <ScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
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
      </ScrollView>
    </OnboardingTemplate>
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
  titleContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  alertIconContainer: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    padding: 12,
  },
  alertIcon: {
    fontSize: 35,
    color: 'white',
  },
  infoTitle: {
    paddingTop: 10,
    paddingBottom: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'flex-start',
  },
  infoIcon: {
    color: colors.charcoalGrey,
    fontSize: 20,
    padding: 10,
  },
});
