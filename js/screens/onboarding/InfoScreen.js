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

const TitleSection = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.titleContainer}>
      <View style={styles.alertIconContainer}>
        <FireIcon name={ICON_NAMES.ALERT} size={24} style={styles.alertIcon} />
      </View>
      <View style={{ height: 15 }} />
      <OnboardingTitle
        alignCenter
        paddingVertical={0}
        subtitle={t('protect_yourself_note')}
        title={t('protect_yourself')}
      />
    </View>
  );
};

const InfoSection = ({ title, subtitle, iconName }) => {
  return (
    <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
      <FireIcon
        name={iconName}
        size={28}
        style={{ color: colors.primary, paddingTop: 5 }}
      />
      <View style={{ width: 12 }} />
      <View style={{ flex: 1 }}>
        <Text style={[textStyles.h1, { paddingBottom: 5 }]}>{title}</Text>
        <Text style={[textStyles.body1, { color: colors.textLight }]}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

InfoSection.propTypes = {
  iconName: IconNamePropType.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const InfoScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <OnboardingTemplate
      primaryButton={{
        onPress: () => navigation.navigate(onboardingRoutes.hotline),
        title: t('continue'),
      }}
    >
      <ScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <TitleSection />
        <InfoSection
          iconName={ICON_NAMES.SHIELD}
          subtitle={t('know_your_rights_note')}
          title={t('know_your_rights')}
        />
        <View style={{ height: 40 }} />
        <InfoSection
          iconName={ICON_NAMES.USERS}
          subtitle={t('connect_with_orgs_note')}
          title={t('connect_with_orgs')}
        />
      </ScrollView>
    </OnboardingTemplate>
  );
};

InfoScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default InfoScreen;

const styles = StyleSheet.create({
  alertIcon: {
    color: 'white',
  },
  alertIconContainer: {
    alignItems: 'center',
    aspectRatio: 1,
    backgroundColor: colors.primary,
    borderRadius: 300,
    justifyContent: 'center',
    padding: 8,
  },
  titleContainer: {
    alignItems: 'center',
    paddingVertical: 50,
  },
});
