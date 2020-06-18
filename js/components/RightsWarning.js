import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RightsWarning({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="alert-circle-outline"
        color="#fb5600"
        size={40}
      />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.subText}>{subtitle}</Text>
      </View>
    </View>
  );
}

RightsWarning.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderRadius: 5,
    borderColor: '#fb5600',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginVertical: 10,
    width: '100%',
  },
  textContainer: {
    paddingLeft: 15,
    width: '85%',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
  },
});
