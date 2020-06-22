import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ActionBullets({ title, bullets }) {
  const bulletsList = bullets.map((bullet) => {
    return (
      <View style={styles.bulletPointTextContainer} key={bullet}>
        <MaterialCommunityIcons name="circle" style={styles.bulletPoint} />
        <Text style={styles.text}>{bullet}</Text>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      {bulletsList}
    </View>
  );
}

ActionBullets.propTypes = {
  title: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
    width: '100%',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bulletPointTextContainer: {
    flexDirection: 'row',
    width: '95%',
  },
  bulletPoint: {
    fontSize: 5,
    color: '#fb5600',
    paddingRight: 8,
    paddingTop: 10,
  },
  text: {
    fontSize: 16,
  },
});
