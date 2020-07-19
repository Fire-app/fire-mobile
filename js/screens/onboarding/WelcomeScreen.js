/* eslint-disable global-require */
import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import routes from '../../navigation/routes';
import { textStyles, screenStyles, colors } from '../../styles';
import NavigationButtons from '../../components/NavigationButtons';

const IMAGE = require('../../../assets/welcomeImage.png');
const LOGO = require('../../../assets/chirlaLogo.png');

const onboardingRoutes = routes.onboarding;

const WelcomeInfo = () => {
  const { t } = useTranslation();
  return (
    <View
      style={{
        alignItems: 'center',
      }}
    >
      <Text
        style={[
          textStyles.h1,
          { padding: 5, paddingTop: 30, color: colors.charcoalGrey },
        ]}
      >
        {t('welcome_to_fire')}
      </Text>
      <Text
        style={[
          textStyles.body1,
          { color: colors.textLight, textAlign: 'center', padding: 5 },
        ]}
      >
        {t('welcome_message')}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20,
          paddingBottom: 30,
        }}
      >
        <Image
          style={{ height: 25, width: 25 }}
          source={LOGO}
          accessibilityLabel="CHIRLA Logo"
        />
        <Text
          style={[
            textStyles.body2,
            { paddingLeft: 10, color: colors.charcoalGrey },
          ]}
        >
          {t('a_chirla_project')}
        </Text>
      </View>
    </View>
  );
};

const LegalInfo = () => {
  const { t } = useTranslation();
  return (
    <View
      style={{
        borderRadius: 3,
        backgroundColor: colors.border,
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginTop: 20,
      }}
    >
      <Text
        style={[
          textStyles.body2,
          {
            textAlign: 'center',
            color: colors.charcoalGrey,
            paddingBottom: 15,
            paddingHorizontal: 5,
          },
        ]}
      >
        {t('must_be_over_13')}
      </Text>
      <Text
        style={[
          textStyles.body2,
          {
            textAlign: 'center',
            color: colors.charcoalGrey,
            paddingHorizontal: 5,
          },
        ]}
      >
        {t('verify_over_13')}
      </Text>
    </View>
  );
};

const WelcomeScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <View style={screenStyles.container}>
      <View style={screenStyles.contentContainer}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 50,
          }}
        >
          <Image
            style={styles.image}
            source={IMAGE}
            accessibilityLabel="Illustration of people"
          />
          <WelcomeInfo />
          <LegalInfo />
        </View>
      </View>
      <NavigationButtons
        // TODO: figure out what to display for not over 13
        onRightPress={() => navigation.pop()}
        onLeftPress={() => navigation.navigate(onboardingRoutes.intro)}
        rightTitle={t('not_over_13')}
        leftTitle={t('continue')}
        nextIsDisabled={false}
        hasLongTitle
      />
    </View>
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
    height: Dimensions.get('window').width - 150,
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    alignSelf: 'center',
    resizeMode: 'cover',
  },
});
