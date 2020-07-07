/* eslint-disable global-require */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTranslation } from 'react-i18next';
import routes from '../../navigation/routes';
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

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.contentContainer}>
            <OnboardingTitle
              title={t('select_attorney')}
              subtitle={t('select_attorney_subtitle')}
            />
            <AttorneyForm shouldFormSubmit={shouldFormSubmit} />
          </View>
          <View style={styles.buttonContainer}>
            <OnboardingButtons
              onRightPress={() => navigation.pop()}
              onLeftPress={onSubmit}
              rightTitle={t('back')}
              leftTitle={t('next')}
              nextIsDisabled={false}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentContainer: {
    width: '100%',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    height: '8%',
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
