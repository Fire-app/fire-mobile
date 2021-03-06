import { StyleSheet, ViewPropTypes, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import React from 'react';
import { colors } from '../styles';

export default function Card({ children, onPress, style }) {
  return (
    <View style={{ borderRadius: 3 }}>
      <TouchableHighlight
        disabled={!onPress}
        onPress={onPress ? () => onPress() : null}
        style={[styles.card, style]}
        underlayColor={colors.primaryLight}
      >
        {children}
      </TouchableHighlight>
    </View>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: 3,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
});
