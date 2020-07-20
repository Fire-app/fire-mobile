/* eslint-disable global-require */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import setHotlineNumberAction from '../../store/actions/settings/setHotlineNumberAction';
import setHotlineNameAction from '../../store/actions/settings/setHotlineNameAction';
import routes from '../../navigation/routes';
import { screenStyles, textStyles, colors } from '../../styles';

import OnboardingTitle from '../../components/OnboardingTitle';
import HotlineList from '../../components/HotlineList';
import CustomModal from '../../components/CustomModal';
import { PrimaryButton, NavigationButtons } from '../../components/Buttons';
import { DEFAULT_HOTLINE } from '../../../data/hotlineOptions';

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
      <Text style={[textStyles.body1, { color: colors.charcoalGrey }]}>
        {t('hotline_note')}
      </Text>
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
        <HotlineList
          setHotlineName={setHotlineName}
          setHotlineNumber={setHotlineNumber}
        />
      </View>
      <NavigationButtons
        onRightPress={() => navigation.pop()}
        onLeftPress={saveHotlineNumber}
        rightTitle={t('back')}
        leftTitle={t('next')}
        nextIsDisabled={false}
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
