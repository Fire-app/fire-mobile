import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SecondaryButton from './SecondaryButton';
import { colors } from '../../styles';

const HelpButton = ({ title, onPress }) => (
  <View style={{ paddingBottom: 8, flexDirection: 'row' }}>
    <View style={{ paddingVertical: 6 }}>
      <MaterialCommunityIcons
        name="help-circle"
        size={22}
        color={colors.primary}
      />
    </View>
    <SecondaryButton title={title} onPress={onPress} alignRight />
  </View>
);

HelpButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default HelpButton;
