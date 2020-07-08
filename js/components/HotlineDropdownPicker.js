/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { colors, textStyles } from '../styles';

const HotlineDropdownPicker = ({ setHotlineName, setHotlineNumber }) => {
  return (
    <View style={{ flex: 1, paddingVertical: 20 }}>
      <DropDownPicker
        items={HOTLINE_OPTIONS}
        defaultValue={DEFAULT_HOTLINE_NUMBER}
        containerStyle={{ height: 50 }}
        style={{ backgroundColor: colors.primaryLighter }}
        dropDownStyle={{ backgroundColor: colors.primaryLighter }}
        itemStyle={{ justifyContent: 'flex-start' }}
        labelStyle={textStyles.text}
        activeLabelStyle={textStyles.h3}
        selectedLabelStyle={textStyles.h3}
        arrowColor={colors.primary}
        arrowSize={25}
        onChangeItem={(item) => {
          setHotlineName(item.label);
          setHotlineNumber(item.value);
        }}
      />
    </View>
  );
};

HotlineDropdownPicker.propTypes = {
  setHotlineName: PropTypes.func.isRequired,
  setHotlineNumber: PropTypes.func.isRequired,
};

export default HotlineDropdownPicker;

export const HOTLINE_OPTIONS = [
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

export const DEFAULT_HOTLINE_NAME = HOTLINE_OPTIONS[0].label;
export const DEFAULT_HOTLINE_NUMBER = HOTLINE_OPTIONS[0].value;
