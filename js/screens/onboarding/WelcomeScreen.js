/* eslint-disable global-require */
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import routes from '../../navigation/routes';
import { textStyles, screenStyles } from '../../styles';
import PrimaryButton from '../../components/PrimaryButton';

const onBoardingRoutes = routes.onboarding;

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={screenStyles.container}>
      <View style={screenStyles.contentContainer}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={textStyles.h1}>{'Welcome to Fire!'}</Text>
        </View>
      </View>
      <PrimaryButton
        title="Continue"
        onPress={() => navigation.navigate(onBoardingRoutes.language)}
        disabled={false}
      />
    </View>
  );
};

WelcomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default WelcomeScreen;
