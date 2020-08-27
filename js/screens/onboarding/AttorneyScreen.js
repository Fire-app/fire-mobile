import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  DEFAULT_ATTORNEY,
  DEFAULT_NUMBER,
} from '../../../data/attorneyOptions';
import { SecondaryButton } from '../../components/Buttons';
import { getFormatted } from '../../util/phoneNumber';
import AttorneyForm from '../../components/AttorneyForm';
import CustomModal from '../../components/CustomModal';
import ModalContent from '../../components/ModalContent';
import OnboardingTemplate from './Template';
import OnboardingTitle from '../../components/OnboardingTitle';
import routes from '../../navigation/routes';
import setAttorneyNameAction from '../../store/actions/settings/setAttorneyNameAction';
import setAttorneyNumberAction from '../../store/actions/settings/setAttorneyNumberAction';

const onboardingRoutes = routes.onboarding;

const AttorneyScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const savedName = useSelector((state) => state.settings.attorneyName);
  const savedNumber = useSelector((state) => state.settings.attorneyNumber);

  const [name, setName] = useState(savedName || '');
  const [number, setNumber] = useState(
    savedNumber ? getFormatted(savedNumber) : ''
  );

  const setFormattedNumber = (_number) => {
    setNumber(getFormatted(_number));
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
        disabled: nameIsInvalid || numberIsInvalid,
        onPress: onSubmit,
        title: t('finish'),
      }}
      secondaryButton={{
        onPress: () => navigation.pop(),
        title: t('back'),
      }}
    >
      <ScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        style={{ flex: 1 }}
      >
        <OnboardingTitle
          subtitle={t('select_attorney_subtitle')}
          title={t('select_attorney')}
        />
        <AttorneyForm
          name={name}
          nameIsInvalid={nameIsInvalid}
          number={number}
          numberIsInvalid={numberIsInvalid}
          setName={setName}
          setNameIsInvalid={setNameIsInvalid}
          setNumber={setFormattedNumber}
          setNumberIsInvalid={setNumberIsInvalid}
        />
        <SecondaryButton
          alignRight
          onPress={() => setModalVisible(true)}
          title={t('no_attorney')}
        />

        <CustomModal
          buttonTitle={t('no_attorney')}
          isVisible={modalVisible}
          primaryButton={{
            onPress: onModalSubmit,
            title: t('use_chirla'),
          }}
          secondaryButton={{
            onPress: () => setModalVisible(false),
            title: t('cancel'),
          }}
        >
          <ModalContent
            subtitle={t('attorney_default_subtitle')}
            title={t('attorney_default_title')}
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
