/* eslint-disable global-require */
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import routes from '../../navigation/routes';
import { textStyles, colors } from '../../styles';
import OnboardingTemplate from './Template';
import OnboardingTitle from '../../components/OnboardingTitle';

const IMAGE = require('../../../assets/welcomeImage.png');
const LOGO = require('../../../assets/chirlaLogo.png');

const onboardingRoutes = routes.onboarding;

const WelcomeInfo = () => {
  const { t } = useTranslation();
  return (
    <View style={{ paddingTop: 40, paddingHorizontal: 10 }}>
      <OnboardingTitle
        title={t('welcome_to_fire')}
        subtitle={t('welcome_message')}
        alignCenter
        paddingHorizontal={20}
        paddingBottom={0}
      />
      <View style={styles.logoNameContainer}>
        <Image
          style={styles.logo}
          source={LOGO}
          accessibilityLabel="CHIRLA Logo"
        />
        <Text style={[textStyles.body2, { padding: 5 }]}>
          {t('a_chirla_project')}
        </Text>
      </View>
    </View>
  );
};

const LegalInfo = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.legalInfoContainer}>
      <Text style={[textStyles.body2, styles.legalText]}>
        {t('must_be_over_13')}
      </Text>
      <View style={{ height: 10 }} />
      <Text style={[textStyles.body2, styles.legalText]}>
        {t('verify_over_13')}
      </Text>
    </View>
  );
};

const WelcomeScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <OnboardingTemplate
      primaryButton={{
        title: t('continue'),
        onPress: () => navigation.navigate(onboardingRoutes.intro),
      }}
      secondaryButton={{
        title: t('not_over_13'),
        onPress: () => navigation.pop(),
      }}
    >
      <ScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={{
          justifyContent: 'space-between',
          flexGrow: 1,
        }}
      >
        <View style={{ paddingTop: 35 }}>
          <Image
            style={styles.image}
            source={IMAGE}
            accessibilityLabel="Illustration of people"
          />
          <WelcomeInfo />
        </View>
        <LegalInfo />
      </ScrollView>
    </OnboardingTemplate>
  );
};

WelcomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 340,
    backgroundColor: 'white',
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  legalInfoContainer: {
    borderRadius: 3,
    backgroundColor: colors.border,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  legalText: {
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  logoNameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  logo: {
    height: 25,
    width: 25,
  },
});
