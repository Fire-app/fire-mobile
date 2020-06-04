/* eslint-disable global-require */
import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const EXAMPLE_IMAGES = [
  require('../../../assets/example/banksy1.png'),
  require('../../../assets/example/banksy2.png'),
  require('../../../assets/example/banksy3.png'),
];

const EXAMPLE_TEXT = [
  'This is Banksy',
  'He is a very good boy',
  'He is very seasonal',
];

export default function ExampleTabScreen({ route: { name } }) {
  const index = name.charAt(name.length - 1) - 1; // Big hack to get an index, because we named these "Tab1", "Tab2", etc.
  const image = EXAMPLE_IMAGES[index];
  const text = EXAMPLE_TEXT[index];
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={image}
        accessibilityLabel="Banksy the dog" // This is a fallback of having the dynamic images! Less curated accessibility
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

ExampleTabScreen.propTypes = {
  route: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 250,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
