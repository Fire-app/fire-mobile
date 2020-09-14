import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import { colors, textStyles } from '../../styles';
import OnboardingTemplate from './Template';
import OnboardingTitle from '../../components/OnboardingTitle';
import routes from '../../navigation/routes';
import FireIcon, {
  ICON_NAMES,
  IconNamePropType,
} from '../../components/FireIcon';

const onboardingRoutes = routes.onboarding;

const ToolkitTitleInfo = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.titleContainer}>
      <View style={{ height: 30 }} />
      <View style={styles.alertIconContainer}>
        <FireIcon name={ICON_NAMES.ALERT} size={32} style={styles.alertIcon} />
      </View>
      <View style={{ height: 30 }} />
      <OnboardingTitle
        alignCenter
        paddingHorizontal={10}
        paddingVertical={0}
        subtitle={t('your_emergency_toolkit_note')}
        title={t('your_emergency_toolkit')}
      />
    </View>
  );
};

const ToolkitInfoSection = ({ title, subtitle, iconName }) => (
  <View style={styles.infoContainer}>
    <FireIcon name={iconName} size={24} style={styles.infoIcon} />
    <View style={{ flex: 1, paddingRight: 10 }}>
      <Text style={[textStyles.h5, styles.infoTitle]}>{title}</Text>
      <Text style={textStyles.body1}>{subtitle}</Text>
    </View>
  </View>
);

ToolkitInfoSection.propTypes = {
  iconName: IconNamePropType.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const ToolkitIntroScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <OnboardingTemplate
      primaryButton={{
        onPress: () => navigation.navigate(onboardingRoutes.hotline),
        title: t('next'),
      }}
      secondaryButton={{
        onPress: () => navigation.pop(),
        title: t('back'),
      }}
      step={2}
    >
      <ScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <ToolkitTitleInfo />
        <ToolkitInfoSection
          iconName={ICON_NAMES.PHONE}
          subtitle={t('emergency_hotline_note')}
          title={t('emergency_hotline')}
        />
        <ToolkitInfoSection
          iconName={ICON_NAMES.CREDIT_CARD}
          subtitle={t('rights_card_note')}
          title={t('rights_card')}
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
  alertIcon: {
    color: 'white',
    fontSize: 35,
  },
  alertIconContainer: {
    alignItems: 'center',
    aspectRatio: 1,
    backgroundColor: colors.primary,
    borderRadius: 30,
    justifyContent: 'center',
    padding: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 15,
  },
  infoIcon: {
    color: colors.charcoalGrey,
    fontSize: 20,
    padding: 10,
  },
  infoTitle: {
    paddingBottom: 5,
    paddingTop: 10,
  },
  titleContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
