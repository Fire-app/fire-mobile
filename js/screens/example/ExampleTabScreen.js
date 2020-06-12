/* eslint-disable global-require */
import React from 'react';
import { View, Image, StyleSheet, Text, Alert } from 'react-native';
import PropTypes from 'prop-types';

const EXAMPLE_IMAGES = [
  require('../../../assets/fire-house-icon.png'),
  require('../../../assets/fire-work-icon.png'),
  require('../../../assets/PT-fire-icon.png'),
  require('../../../assets/driving-fire-icon.png'),
  require('../../../assets/street-fire-icon.jpg'),
];

function EnvironmentCard({ location, description, image }) {
  return (
    <View style={styles.envCard}>
      <Text style={styles.titletext}>{location}</Text>
      <Text style={styles.subtext}>{description}</Text>
      <Image style={styles.image} source={image} />
    </View>
  );
}

export default function ListOfCards() {
  return (
    <>
      <EnvironmentCard
        location="Home"
        description="For use in your home"
        image={EXAMPLE_IMAGES[0]}
        onPress={() => Alert.alert('home clicked')}
      />
      <EnvironmentCard
        location="Work"
        description="For use at work"
        image={EXAMPLE_IMAGES[1]}
        onPress={() => Alert.alert('work clicked')}
      />
      <EnvironmentCard
        location="Public Transit"
        description="For use on Public Transit"
        image={EXAMPLE_IMAGES[2]}
        onPress={() => Alert.alert('public transport clicked')}
      />
      <EnvironmentCard
        location="Driving"
        description="For use when pulled over"
        image={EXAMPLE_IMAGES[3]}
        onPress={() => Alert.alert('driving clicked')}
      />
      <EnvironmentCard
        location="Street"
        description="For use on the street"
        image={EXAMPLE_IMAGES[4]}
        onPress={() => Alert.alert('street clicked')}
      />
    </>
  );
}

EnvironmentCard.propTypes = {
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  image: {
    height: 75,
    width: 75,
    marginLeft: 400,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  envCard: {
    flexDirection: 'column',
    height: 75,
    marginTop: 10,
    marginHorizontal: 15,
    paddingVertical: 20,
    paddingRight: 150,
    backgroundColor: 'rgba(22,22,22,0.2)',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
