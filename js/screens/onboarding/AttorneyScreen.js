/* eslint-disable global-require */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import setAttorneyNameAction from '../../store/actions/settings/setAttorneyNameAction';
import setAttorneyNumberAction from '../../store/actions/settings/setAttorneyNumberAction';
import routes from '../../navigation/routes';
import { screenStyles } from '../../styles';
import OnboardingTitle from '../../components/OnboardingTitle';
import NavigationButtons from '../../components/NavigationButtons';
import AttorneyForm from '../../components/AttorneyForm';

const onboardingRoutes = routes.onboarding;

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
          </View>
          <View style={{}}>
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
