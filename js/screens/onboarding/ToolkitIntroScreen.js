/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import routes from '../../navigation/routes';
import { screenStyles } from '../../styles';
import NavigationButtons from '../../components/NavigationButtons';

const onboardingRoutes = routes.onboarding;

const ToolkitIntroScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <View style={screenStyles.container}>
      <View style={screenStyles.contentContainer}>
        <Text>{'Toolkit Intro'}</Text>
      </View>
      <NavigationButtons
        onRightPress={() => navigation.pop()}
        onLeftPress={() => navigation.navigate(onboardingRoutes.hotline)}
        rightTitle={t('back')}
        leftTitle={t('next')}
        nextIsDisabled={false}
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
