import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { colors, textStyles } from '../../styles';

const ViewListButton = ({ title, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      {
        alignItems: 'center',
        flexDirection: 'row',
      },
    ]}
  >
    <Text style={[textStyles.h3, { color: colors.primary, paddingLeft: 4 }]}>
      {title}
    </Text>
  </TouchableOpacity>
);

ViewListButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ViewListButton;
