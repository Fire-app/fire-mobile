/* eslint-disable global-require */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTranslation } from 'react-i18next';
import routes from '../../navigation/routes';
import { screenStyles } from '../../styles';
import OnboardingTitle from '../../components/OnboardingTitle';
import OnboardingButtons from '../../components/OnboardingButtons';
import AttorneyForm from '../../components/AttorneyForm';

const onBoardingRoutes = routes.onboarding;

const AttorneyScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const [shouldFormSubmit, setShouldFormSubmit] = useState(false);
  const onSubmit = () => {
    setShouldFormSubmit(true);
    navigation.navigate(onBoardingRoutes.complete);
  };

  const [inputValidated, setInputValidated] = useState(false);

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={screenStyles.container}>
          <View style={screenStyles.onboardingContentContainer}>
            <OnboardingTitle
              title={t('select_attorney')}
              subtitle={t('select_attorney_subtitle')}
            />
            <AttorneyForm
              shouldFormSubmit={shouldFormSubmit}
              setInputValidated={setInputValidated}
            />
          </View>
          <View style={screenStyles.onboardingButtonContainer}>
            <OnboardingButtons
              onRightPress={() => navigation.pop()}
              onLeftPress={onSubmit}
              rightTitle={t('back')}
              leftTitle={t('next')}
              nextIsDisabled={!inputValidated}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

AttorneyScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default AttorneyScreen;
