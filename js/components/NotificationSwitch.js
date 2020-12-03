import React from 'react';
import PropTypes from 'prop-types';
import { View, Switch, Text } from 'react-native';
import { colors, textStyles } from '../styles';

const NotificationSwitch = ({ title, subtitle, value, toggleValue }) => {
  return (
    <View
      style={{
        backgroundColor: colors.primaryLight,
        borderRadius: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
      }}
    >
      <View>
        <Text style={textStyles.h3}>{title}</Text>
        <Text style={textStyles.body1}>{subtitle}</Text>
      </View>
      <Switch
        ios_backgroundColor={colors.pinkishGrey}
        onValueChange={toggleValue}
        thumbColor={colors.white}
        trackColor={{ false: colors.pinkishGrey, true: colors.primary }}
        value={value}
      />
    </View>
  );
};

NotificationSwitch.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  toggleValue: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
};

export default NotificationSwitch;
