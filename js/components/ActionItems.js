import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default function ActionItems({ title, items }) {
  const itemsList = items.map((item) => {
    return (
      <Text style={styles.text} key={item}>
        {item}
      </Text>
    );
  });

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      {itemsList}
    </View>
  );
}

ActionItems.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
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
  text: {
    fontSize: 16,
  },
});
