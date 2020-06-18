import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Tips({ tips }) {
  const tipsList = tips.map((tip) => {
    return (
      <View style={styles.unorderedActionContainer} key={tip}>
        <MaterialCommunityIcons name="circle" style={styles.bulletPoint} />
        <Text style={styles.text}>{tip}</Text>
      </View>
    );
  });

  return (
    <View>
      <Text style={styles.titleText}>{'Tips'}</Text>
      <View style={styles.actionContainer}>{tipsList}</View>
    </View>
  );
}

Tips.propTypes = {
  tips: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 25,
  },
  text: {
    fontSize: 18,
    paddingVertical: 10,
  },
  bulletPoint: {
    fontSize: 8,
    color: '#fb5600',
    paddingRight: 10,
    paddingTop: 16,
  },
});
