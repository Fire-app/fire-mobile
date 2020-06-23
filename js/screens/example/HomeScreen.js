/* eslint-disable global-require */
import React from 'react';
import { StyleSheet, Text, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

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
        onPressFxn={() => Alert.alert('Linking Placeholder')}
      />
      <EnvironmentCard
        location="Work"
        description="For use at work"
        onPressFxn={() => Alert.alert('work clicked')}
      />
      <EnvironmentCard
        location="Public Transit"
        description="For use on Public Transit"
        onPressFxn={() => Alert.alert('public transport clicked')}
      />
      <EnvironmentCard
        location="Driving"
        description="For use when pulled over"
        onPressFxn={() => Alert.alert('driving clicked')}
      />
      <EnvironmentCard
        location="Street"
        description="For use on the street"
        onPressFxn={() => Alert.alert('street clicked')}
      />
    </ScrollView>
  );
}

EnvironmentCard.propTypes = {
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onPressFxn: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
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
