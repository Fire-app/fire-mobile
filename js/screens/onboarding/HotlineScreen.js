/* eslint-disable global-require */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import setHotlineNumberAction from '../../store/actions/settings/setHotlineNumberAction';
import setHotlineNameAction from '../../store/actions/settings/setHotlineNameAction';
import routes from '../../navigation/routes';
import { screenStyles } from '../../styles';

import OnboardingTitle from '../../components/OnboardingTitle';
import NavigationButtons from '../../components/NavigationButtons';
import HotlineList from '../../components/HotlineList';
import { DEFAULT_HOTLINE } from '../../../data/hotlineOptions';

const onBoardingRoutes = routes.onboarding;

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
    navigation.navigate(onBoardingRoutes.attorney);
  };

  return (
    <View style={screenStyles.container}>
      <View style={screenStyles.contentContainer}>
        <OnboardingTitle
          title={t('select_hotline')}
          subtitle={t('select_hotline_subtitle')}
        />
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
