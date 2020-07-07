import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import textStyles from '../styles/textStyles';

export default function NavCard({ location, description, onPress }) {
  return (
    <TouchableOpacity style={styles.navCard} onPress={() => onPress()}>
      <Text style={textStyles.h2}>{location}</Text>
      <Text style={textStyles.body2}>{description}</Text>
    </TouchableOpacity>
  );
}

NavCard.propTypes = {
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  navCard: {
    flexDirection: 'column',
    padding: 25,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
  },
});
