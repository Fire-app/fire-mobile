/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { DEFAULT_HOTLINE, HOTLINE_OPTIONS } from '../../data/hotlineOptions';
import { colors, textStyles } from '../styles';

const HotlineDropdownPicker = ({ setHotlineName, setHotlineNumber }) => {
  return (
    <View style={{ flex: 1, paddingVertical: 20 }}>
      <DropDownPicker
        items={HOTLINE_OPTIONS}
        defaultValue={DEFAULT_HOTLINE.value}
        containerStyle={{ flexGrow: 0.1 }}
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
