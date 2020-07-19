/* eslint-disable global-require */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import setAttorneyNameAction from '../../store/actions/settings/setAttorneyNameAction';
import setAttorneyNumberAction from '../../store/actions/settings/setAttorneyNumberAction';
import routes from '../../navigation/routes';
import { screenStyles, textStyles, colors } from '../../styles';
import OnboardingTitle from '../../components/OnboardingTitle';
import NavigationButtons from '../../components/NavigationButtons';
import AttorneyForm from '../../components/AttorneyForm';
import CustomModal from '../../components/CustomModal';
import ModalButtons from '../../components/ModalButtons';

const onboardingRoutes = routes.onboarding;

const DEFAULT_ATTORNEY = 'CHIRLA Hotline';
const DEFAULT_NUMBER = '2133531333';

const ModalContent = () => {
  const { t } = useTranslation();
  return (
    <View
      style={{
        justifyContent: 'flex-start',
        paddingBottom: 20,
      }}
    >
      <Text style={[textStyles.h2, { paddingBottom: 10 }]}>
        {t('attorney_default_title')}
      </Text>
      <Text style={[textStyles.body1, { color: colors.charcoalGrey }]}>
        {t('attorney_default_subtitle')}
      </Text>
    </View>
  );
};

const AttorneyScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(setAttorneyNameAction(name));
    dispatch(setAttorneyNumberAction(number));
    navigation.navigate(onboardingRoutes.complete);
  };

  const [nameIsInvalid, setNameIsInvalid] = useState(true);
  const [numberIsInvalid, setNumberIsInvalid] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);
  const onModalSubmit = () => {
    setName(DEFAULT_ATTORNEY);
    setNumber(DEFAULT_NUMBER);
    setModalVisible(false);
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={screenStyles.container}>
          <View style={screenStyles.contentContainer}>
            <OnboardingTitle
              title={t('select_attorney')}
              subtitle={t('select_attorney_subtitle')}
            />
            <AttorneyForm
              name={name}
              setName={setName}
              number={number}
              setNumber={setNumber}
              nameIsInvalid={nameIsInvalid}
              setNameIsInvalid={setNameIsInvalid}
              numberIsInvalid={numberIsInvalid}
              setNumberIsInvalid={setNumberIsInvalid}
            />
            <CustomModal
              isVisible={modalVisible}
              setIsVisible={setModalVisible}
              buttonTitle={t('no_attorney')}
            >
              <ModalContent />
              <ModalButtons
                onRightPress={() => setModalVisible(false)}
                onLeftPress={onModalSubmit}
                rightTitle={t('cancel')}
                leftTitle={t('use_chirla')}
              />
            </CustomModal>
          </View>
          <View>
            <NavigationButtons
              onRightPress={() => navigation.pop()}
              onLeftPress={onSubmit}
              rightTitle={t('back')}
              leftTitle={t('finish')}
              nextIsDisabled={nameIsInvalid || numberIsInvalid}
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
