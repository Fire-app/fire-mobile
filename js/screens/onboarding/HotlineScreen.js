/* eslint-disable global-require */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import setHotlineNumberAction from '../../store/actions/settings/setHotlineNumberAction';
import setHotlineNameAction from '../../store/actions/settings/setHotlineNameAction';
import routes from '../../navigation/routes';
import { screenStyles, textStyles } from '../../styles';

import OnboardingTitle from '../../components/OnboardingTitle';
import ListSelector from '../../components/ListSelector';
import CustomModal from '../../components/CustomModal';
import { PrimaryButton, NavigationButtons } from '../../components/Buttons';
import { DEFAULT_HOTLINE, HOTLINE_OPTIONS } from '../../../data/hotlineOptions';

const onboardingRoutes = routes.onboarding;

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
    <View style={screenStyles.container}>
      <View style={screenStyles.contentContainer}>
        <OnboardingTitle
          title={t('select_hotline')}
          subtitle={t('select_hotline_subtitle')}
        />
        <CustomModal
          isVisible={modalVisible}
          setIsVisible={setModalVisible}
          buttonTitle={t('what_is_hotline')}
        >
          <ModalContent />
          <PrimaryButton
            title={t('got_it')}
            onPress={() => setModalVisible(false)}
            disabled={false}
          />
        </CustomModal>
        <ListSelector
          defaultKey={DEFAULT_HOTLINE.phoneNumber}
          onChange={onListChange}
          data={HOTLINE_OPTIONS}
          keyExtractor={(item) => item.phoneNumber}
          selectedExtractor={({ item }) => item.phoneNumber}
          titleExtractor={({ item }) => item.name}
        />
      </View>
      <NavigationButtons
        onSecondaryPress={() => navigation.pop()}
        onPrimaryPress={saveHotlineNumber}
        secondaryTitle={t('back')}
        primaryTitle={t('next')}
        primaryIsDisabled={false}
      />
    </View>
  );
};

HotlineScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default HotlineScreen;
