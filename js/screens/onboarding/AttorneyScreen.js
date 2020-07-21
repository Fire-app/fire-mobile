/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  LayoutAnimation,
  Text,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import setAttorneyNameAction from '../../store/actions/settings/setAttorneyNameAction';
import setAttorneyNumberAction from '../../store/actions/settings/setAttorneyNumberAction';
import routes from '../../navigation/routes';
import { screenStyles, textStyles, colors } from '../../styles';
import OnboardingTitle from '../../components/OnboardingTitle';
import { NavigationButtons } from '../../components/Buttons';
import AttorneyForm from '../../components/AttorneyForm';
import CustomModal from '../../components/CustomModal';
import useKeyboard from '../../hook/useKeyboard';

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
      <Text style={textStyles.body1}>{t('attorney_default_subtitle')}</Text>
    </View>
  );
};

const AttorneyScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const savedName = useSelector((state) => state.settings.attorneyName);
  const savedNumber = useSelector((state) => state.settings.attorneyNumber);

  const [name, setName] = useState(savedName || '');
  const [number, setNumber] = useState(savedNumber || '');

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

  // We don't want a ton of padding if the keyboard is up. This animates between paddings
  const [visible] = useKeyboard({ useWillShow: true, useWillHide: true });
  const paddingBottom = visible ? 10 : screenStyles.container.paddingBottom;
  useEffect(() => {
    LayoutAnimation.easeInEaseOut();
  }, [visible]);

  return (
    <KeyboardAvoidingView style={{ flexGrow: 1 }} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[screenStyles.container, { paddingBottom }]}>
          <ScrollView
            alwaysBounceVertical={false}
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
          >
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
              <NavigationButtons
                // TODO: figure out what to display for not over 13
                onRightPress={() => setModalVisible(false)}
                onLeftPress={onModalSubmit}
                rightTitle={t('cancel')}
                leftTitle={t('use_chirla')}
                hasLongTitle
              />
            </CustomModal>
          </ScrollView>
          <NavigationButtons
            onRightPress={() => navigation.pop()}
            onLeftPress={onSubmit}
            rightTitle={t('back')}
            leftTitle={t('finish')}
            nextIsDisabled={nameIsInvalid || numberIsInvalid}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

AttorneyScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default AttorneyScreen;
