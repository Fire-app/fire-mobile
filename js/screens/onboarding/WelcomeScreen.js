import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import { colors, textStyles } from '../../styles';
import OnboardingTemplate from './Template';
import OnboardingTitle from '../../components/OnboardingTitle';
import routes from '../../navigation/routes';

const IMAGE = require('../../../assets/illustration1.png');
const LOGO = require('../../../assets/logos/chirlaLogo.png');

const onboardingRoutes = routes.onboarding;

const WelcomeInfo = () => {
  const { t } = useTranslation();
  return (
    <View style={{ paddingHorizontal: 10, paddingTop: 40 }}>
      <OnboardingTitle
        alignCenter
        paddingHorizontal={20}
        paddingVertical={0}
        subtitle={t('welcome_message')}
        title={t('welcome_title')}
      />
      <View style={styles.logoNameContainer}>
        <Image
          accessibilityLabel="CHIRLA Logo"
          source={LOGO}
          style={styles.logo}
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
        onPress: () => navigation.navigate(onboardingRoutes.info),
        title: t('continue'),
      }}
    >
      <ScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-around',
        }}
      >
        <WelcomeInfo />
        <LegalInfo />
        <View style={{ paddingBottom: 10, paddingTop: 30 }}>
          <Image
            accessibilityLabel="Illustration"
            source={IMAGE}
            style={styles.image}
          />
        </View>
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
    alignSelf: 'center',
    height: 210,
    resizeMode: 'cover',
    width: 320,
  },
  legalInfoContainer: {
    backgroundColor: colors.border,
    borderRadius: 3,
    marginBottom: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  legalText: {
    paddingHorizontal: 5,
    textAlign: 'center',
  },
  logo: {
    height: 25,
    width: 25,
  },
  logoNameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
});
