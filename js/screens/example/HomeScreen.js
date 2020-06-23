/* eslint-disable global-require */
import React from 'react';
import { View, Image, StyleSheet, Text, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const ICON_IMAGES = [
  require('../../../assets/fire-house-icon.png'),
  require('../../../assets/fire-work-icon.png'),
  require('../../../assets/PT-fire-icon.png'),
  require('../../../assets/driving-fire-icon.png'),
  require('../../../assets/street-fire-icon.jpg'),
];

function EnvironmentCard({ location, description, onPressFxn }) {
  return (
    <TouchableOpacity style={styles.envCard} OnPress={onPressFxn}>
      <Text style={styles.titleText}>{location}</Text>
      <Text style={styles.subtext}>{description}</Text>
    </TouchableOpacity>
  );
}

export default function HomePage() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.KYRText}>{'Know Your Rights'}</Text>
      <Text style={{ alignSelf: 'center' }}>
        {'Learn your rights in different spaces'}
      </Text>
      <EnvironmentCard
        location="Home"
        description="For use in your home"
        // image={ICON_IMAGES[0]}
        onPressFxn={() => Alert.alert('Linking Placeholder')}
      />
      <EnvironmentCard
        location="Work"
        description="For use at work"
        // image={ICON_IMAGES[1]}
        onPressFxn={() => Alert.alert('work clicked')}
      />
      <EnvironmentCard
        location="Public Transit"
        description="For use on Public Transit"
        // image={ICON_IMAGES[2]}
        onPressFxn={() => Alert.alert('public transport clicked')}
      />
      <EnvironmentCard
        location="Driving"
        description="For use when pulled over"
        // image={ICON_IMAGES[3]}
        onPressFxn={() => Alert.alert('driving clicked')}
      />
      <EnvironmentCard
        location="Street"
        description="For use on the street"
        // image={ICON_IMAGES[4]}
        onPressFxn={() => Alert.alert('street clicked')}
      />
    </ScrollView>
  );
}

EnvironmentCard.propTypes = {
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // image: Image.propTypes.source.isRequired,
  onPressFxn: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  image: {
    height: 75,
    width: 75,
    alignContent: 'flex-end',
  },
  KYRText: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 10,
    marginLeft: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#FDECDF',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  envCard: {
    flexDirection: 'column',
    padding: 25,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
  },
});
