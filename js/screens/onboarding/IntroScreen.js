import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import OnboardingTemplate from './Template';
import { colors, textStyles } from '../../styles';
import routes from '../../navigation/routes';
import FireIcon, { IconNamePropType } from '../../components/FireIcon';

const onboardingRoutes = routes.onboarding;

const InfoSection = ({ title, subtitle, iconName }) => {
  return (
    <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
      <FireIcon name={iconName} size={24} style={styles.icon} />
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

const IntroScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <OnboardingTemplate
      primaryButton={{
        onPress: () => navigation.navigate(onboardingRoutes.toolkitIntro),
        title: t('continue'),
      }}
      step={1}
    >
      <ScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          paddingTop: 50,
        }}
      >
        <InfoSection
          iconName="shield"
          subtitle={t('know_your_rights_sub')}
          title={t('know_your_rights')}
        />
        <View style={{ height: 40 }} />
        <InfoSection
          iconName="alert-triangle"
          subtitle={t('protect_yourself_sub')}
          title={t('protect_yourself')}
        />
        <View style={{ height: 40 }} />
        <InfoSection
          iconName="users"
          subtitle={t('connect_with_orgs_sub')}
          title={t('connect_with_orgs')}
        />
      </ScrollView>
    </OnboardingTemplate>
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
  icon: {
    color: colors.primary,
    fontSize: 40,
    paddingTop: 5,
  },
});
