/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import routes from '../../navigation/routes';
import { screenStyles, colors, textStyles } from '../../styles';
import PrimaryButton from '../../components/PrimaryButton';

const onboardingRoutes = routes.onboarding;

const InfoSection = ({ title, subtitle, iconName }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingLeft: 40,
        paddingRight: 50,
        paddingVertical: 20,
      }}
    >
      <MaterialCommunityIcons
        name={iconName}
        style={{ color: colors.primary, fontSize: 40, padding: 15 }}
      />
      <View>
        <Text
          style={[
            textStyles.h1,
            { paddingTop: 10, paddingBottom: 10, color: colors.charcoalGrey },
          ]}
        >
          {title}
        </Text>
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
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          <MaterialCommunityIcons
            name="circle"
            style={{ fontSize: 16, color: colors.primary, padding: 8 }}
          />
          <MaterialCommunityIcons
            name="circle"
            style={{ fontSize: 16, color: colors.border, padding: 8 }}
          />
        </View>
      </View>
      <PrimaryButton
        title={t('continue')}
        onPress={() => navigation.navigate(onboardingRoutes.toolkitIntro)}
        disabled={false}
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
