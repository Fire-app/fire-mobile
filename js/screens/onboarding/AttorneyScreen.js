/* eslint-disable global-require */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTranslation } from 'react-i18next';
import routes from '../../navigation/routes';
import { textStyles, colors } from '../../styles';
import OnboardingTitle from '../../components/OnboardingTitle';
import OnboardingButtons from '../../components/OnboardingButtons';
import AttorneyForm from '../../components/AttorneyForm';
import AttorneyModal from '../../components/AttorneyModal';

const onBoardingRoutes = routes.onboarding;

const AttorneyScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [defaultUsed, setDefaultUsed] = useState(false);

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onModalSubmit = () => {
    setDefaultUsed(true);
    setModalVisible(false);
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <AttorneyModal
        isVisible={modalVisible}
        setIsVisible={setModalVisible}
        onSubmit={onModalSubmit}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.contentContainer}>
            <OnboardingTitle
              title={t('select_attorney')}
              subtitle={t('select_attorney_subtitle')}
            />
            <AttorneyForm
              name={name}
              setName={setName}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              isLocked={defaultUsed}
            />
            <TouchableOpacity
              style={styles.noAttorney}
              onPress={() => setModalVisible(true)}
            >
              <Text style={[textStyles.h3, { color: colors.primary }]}>
                {t('no_attorney')}
              </Text>
            </TouchableOpacity>
            <Text>{defaultUsed ? 'true' : 'false'}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <OnboardingButtons
              onRightPress={() => navigation.pop()}
              onLeftPress={() => navigation.navigate(onBoardingRoutes.complete)}
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
  noAttorney: {
    alignItems: 'flex-end',
    paddingRight: 10,
  },
});
