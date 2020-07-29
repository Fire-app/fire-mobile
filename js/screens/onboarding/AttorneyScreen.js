import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AsYouType } from 'libphonenumber-js';
import setAttorneyNameAction from '../../store/actions/settings/setAttorneyNameAction';
import setAttorneyNumberAction from '../../store/actions/settings/setAttorneyNumberAction';
import routes from '../../navigation/routes';
import OnboardingTitle from '../../components/OnboardingTitle';
import { SecondaryButton } from '../../components/Buttons';
import AttorneyForm from '../../components/AttorneyForm';
import CustomModal from '../../components/CustomModal';
import ModalContent from '../../components/ModalContent';
import OnboardingTemplate from './Template';
import {
  DEFAULT_ATTORNEY,
  DEFAULT_NUMBER,
} from '../../../data/attorneyOptions';

const onboardingRoutes = routes.onboarding;

const AttorneyScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const savedName = useSelector((state) => state.settings.attorneyName);
  const savedNumber = useSelector((state) => state.settings.attorneyNumber);

  const [name, setName] = useState(savedName || '');
  const [number, setNumber] = useState(savedNumber || '');

  const setFormattedNumber = (_number) => {
    const phoneNumber = new AsYouType('US');
    setNumber(phoneNumber.input(_number));
  };

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
    <OnboardingTemplate
      keyboardAvoiding
      primaryButton={{
        title: t('finish'),
        onPress: onSubmit,
        disabled: nameIsInvalid || numberIsInvalid,
      }}
      secondaryButton={{
        title: t('back'),
        onPress: () => navigation.pop(),
      }}
    >
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
          setNumber={setFormattedNumber}
          nameIsInvalid={nameIsInvalid}
          setNameIsInvalid={setNameIsInvalid}
          numberIsInvalid={numberIsInvalid}
          setNumberIsInvalid={setNumberIsInvalid}
        />
        <SecondaryButton
          title={t('no_attorney')}
          onPress={() => setModalVisible(true)}
          alignRight
        />

        <CustomModal
          isVisible={modalVisible}
          primaryButton={{
            title: t('use_chirla'),
            onPress: onModalSubmit,
          }}
          secondaryButton={{
            title: t('cancel'),
            onPress: () => setModalVisible(false),
          }}
          buttonTitle={t('no_attorney')}
        >
          <ModalContent
            title={t('attorney_default_title')}
            subtitle={t('attorney_default_subtitle')}
          />
        </CustomModal>
      </ScrollView>
    </OnboardingTemplate>
  );
};

AttorneyScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default AttorneyScreen;
