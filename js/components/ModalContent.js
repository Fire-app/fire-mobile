import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
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
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ModalContent;
