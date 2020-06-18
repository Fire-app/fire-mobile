import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Tips({ tips }) {
  const tipsList = tips.map((tip) => {
    return (
      <View style={styles.bulletPointTextContainer} key={tip}>
        <MaterialCommunityIcons name="circle" style={styles.bulletPoint} />
        <Text style={styles.text}>{tip}</Text>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{'Tips'}</Text>
      <View style={styles.actionContainer}>{tipsList}</View>
    </View>
  );
}

Tips.propTypes = {
  tips: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 25,
    paddingBottom: 10,
  },
  bulletPointTextContainer: {
    flexDirection: 'row',
    width: '95%',
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
