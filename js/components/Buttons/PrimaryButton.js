import { Button } from "react-native-elements";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import React from "react";
import { colors, textStyles } from "../../styles";

const PrimaryButton = ({ title, onPress, disabled, darkMode }) => (
  <Button
    buttonStyle={
      darkMode
        ? {
            backgroundColor: colors.charcoalGrey,
            borderRadius: 3,
            marginBottom: 10,
            paddingHorizontal: 48,
            paddingVertical: 16,
          }
        : { backgroundColor: colors.primary, borderRadius: 3, padding: 16 }
    }
    containerStyle={{ flexGrow: 1 }}
    darkMode={darkMode}
    disabled={disabled}
    onPress={onPress}
    title={title}
    titleStyle={StyleSheet.flatten([textStyles.h2, { color: "white" }])}
  />
);

PrimaryButton.propTypes = {
  darkMode: PropTypes.bool,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

PrimaryButton.defaultProps = {
  darkMode: false,
  disabled: false,
};

export default PrimaryButton;
