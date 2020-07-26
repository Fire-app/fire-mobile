/* eslint-disable global-require */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import setHotlineNumberAction from '../../store/actions/settings/setHotlineNumberAction';
import setHotlineNameAction from '../../store/actions/settings/setHotlineNameAction';
import routes from '../../navigation/routes';
import { textStyles } from '../../styles';

import OnboardingTitle from '../../components/OnboardingTitle';
import ListSelector from '../../components/ListSelector';
import CustomModal from '../../components/CustomModal';
import { SecondaryButton } from '../../components/Buttons';
import { DEFAULT_HOTLINE, HOTLINE_OPTIONS } from '../../../data/hotlineOptions';
import OnboardingTemplate from './Template';

const onboardingRoutes = routes.onboarding;

const ModalContent = () => {
  const { t } = useTranslation();
  return (
    <View
      style={{
        paddingBottom: 20,
      }}
    >
      <Text style={[textStyles.h2, { paddingBottom: 10 }]}>
        {t('what_is_hotline')}
      </Text>
      <Text style={textStyles.body1}>{t('hotline_note')}</Text>
    </View>
  );
};

const HotlineScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [hotlineName, setHotlineName] = useState(DEFAULT_HOTLINE.name);
  const [hotlineNumber, setHotlineNumber] = useState(
    DEFAULT_HOTLINE.phoneNumber
  );

  const dispatch = useDispatch();
  const saveHotlineNumber = () => {
    dispatch(setHotlineNameAction(hotlineName));
    dispatch(setHotlineNumberAction(hotlineNumber));
    navigation.navigate(onboardingRoutes.attorney);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const onListChange = ({ item: { name, phoneNumber } }) => {
    setHotlineName(name);
    setHotlineNumber(phoneNumber);
  };

  return (
    <OnboardingTemplate
      primaryButton={{
        title: t('next'),
        onPress: saveHotlineNumber,
      }}
      secondaryButton={{
        title: t('back'),
        onPress: () => navigation.pop(),
      }}
    >
      <OnboardingTitle
        title={t('select_hotline')}
        subtitle={t('select_hotline_subtitle')}
      />
      <View
        style={{
          alignItems: 'flex-end',
          paddingBottom: 20,
        }}
      >
        <SecondaryButton
          title={t('what_is_hotline')}
          onPress={() => setModalVisible(true)}
        />
      </View>

      <ListSelector
        defaultKey={DEFAULT_HOTLINE.phoneNumber}
        onChange={onListChange}
        data={HOTLINE_OPTIONS}
        keyExtractor={(item) => item.phoneNumber}
        selectedExtractor={({ item }) => item.phoneNumber}
        titleExtractor={({ item }) => item.name}
      />
      {/* Modals */}
      <CustomModal
        isVisible={modalVisible}
        primaryButton={{
          title: t('got_it'),
          onPress: () => setModalVisible(false),
        }}
      >
        <ModalContent />
      </CustomModal>
    </OnboardingTemplate>
  );
};

HotlineScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default HotlineScreen;
