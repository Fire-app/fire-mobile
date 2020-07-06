/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import DropDownPicker from 'react-native-dropdown-picker';
import routes from '../../navigation/routes';
import { onboardingStyles, colors, textStyles } from '../../styles';

import OnboardingTitle from '../../components/OnboardingTitle';
import OnboardingButtons from '../../components/OnboardingButtons';

const onBoardingRoutes = routes.onboarding;

const HOTLINE_OPTIONS = [
  {
    label: 'San Diego Rapid Response Network (San Diego County)',
    value: '6195360823',
  },
  {
    label:
      'Boyle Heights Immigrant Rights Network (Los Angeles City - Boyle Heights)',
    value: '3239225644',
  },
  {
    label:
      'Southern Central Coast Rapid Response Network (Southern Central Coast Region - Santa Barbara County)',
    value: '8058708855',
  },
  {
    label: 'Long Beach Community Defense Network (Long Beach, CA)',
    value: '5622691083',
  },
  {
    label: 'The Koreatown Popular Assembly (Los Angeles City - Koreatown)',
    value: '3238941504',
  },
  { label: 'IC4IJ (San Bernardino / Inland Empire)', value: '9093614588' },
  {
    label: 'Orange County Rapid Response Network (Orange County)',
    value: '6572100157',
  },
];

const HotlineScreen = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={onboardingStyles.container}>
      <View style={onboardingStyles.contentContainer}>
        <OnboardingTitle
          title={t('select_hotline')}
          subtitle={t('select_hotline_subtitle')}
        />
        <View style={{ height: 20 }} />
        <DropDownPicker
          items={HOTLINE_OPTIONS}
          placeholder="Select a hotline"
          containerStyle={{ height: 50 }}
          style={{ backgroundColor: colors.primaryLighter }}
          dropDownStyle={{ backgroundColor: colors.primaryLighter }}
          itemStyle={{ justifyContent: 'flex-start' }}
          labelStyle={textStyles.text}
          activeLabelStyle={textStyles.h3}
          selectedLabelStyle={textStyles.h3}
          arrowColor={colors.primary}
          arrowSize={25}
          // onChangeItem={(item) => console.log(item.label, item.value)}
        />
      </View>
      <View style={onboardingStyles.buttonContainer}>
        <OnboardingButtons
          onBackPress={() => navigation.pop()}
          onNextPress={() => navigation.navigate(onBoardingRoutes.attorney)}
          nextIsDisabled={false}
        />
      </View>
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
