import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import SecondaryButton from './SecondaryButton';
import { colors } from '../../styles';

const HelpButton = ({ title, onPress }) => (
  <View style={{ paddingBottom: 8, flexDirection: 'row' }}>
    <View style={{ paddingTop: 4 }}>
      <Ionicons name="ios-help-circle" size={24} color={colors.primary} />
    </View>
    <SecondaryButton title={title} onPress={onPress} alignRight />
  </View>
);

HelpButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default HelpButton;
