import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import { textStyles, colors } from '../../styles';

const SecondaryButton = ({ title, onPress, alignRight }) => (
  <Button
    title={title}
    onPress={onPress}
    containerStyle={({ flexGrow: 1 }, alignRight && { alignSelf: 'flex-end' })}
    titleStyle={StyleSheet.flatten([textStyles.h3, { color: colors.primary }])}
    buttonStyle={[
      { backgroundColor: 'white', padding: 15, borderRadius: 3 },
      alignRight && { padding: 6 },
    ]}
  />
);

SecondaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  alignRight: PropTypes.bool,
};

export default SecondaryButton;
