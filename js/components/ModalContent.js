/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { textStyles } from '../styles';

const ModalContent = ({ title, subtitle }) => {
  return (
    <View
      style={{
        justifyContent: 'flex-start',
        paddingBottom: 20,
      }}
    >
      <Text style={[textStyles.h2, { paddingBottom: 10 }]}>{title}</Text>
      <Text style={textStyles.body1}>{subtitle}</Text>
    </View>
  );
};

ModalContent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default ModalContent;
