/* eslint-disable global-require */
import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import routes from '../navigation/routes';

const caseRoutes = routes.rights.cases;

const IMAGES = [
  require('../../assets/fire-house-icon.png'),
  require('../../assets/fire-work-icon.png'),
  require('../../assets/PT-fire-icon.png'),
  require('../../assets/driving-fire-icon.png'),
  require('../../assets/street-fire-icon.jpg'),
];

function EnvironmentCard({ location, description, image, onPress }) {
  return (
    <TouchableOpacity style={styles.envCard} onPress={() => onPress()}>
      <View style={{ flexDirection: 'column' }}>
        <Text style={styles.titletext}>{location}</Text>
        <Text style={styles.subtext}>{description}</Text>
      </View>
      <Image style={styles.image} source={image} />
    </TouchableOpacity>
  );
}

export default function ListOfCards({ navigation }) {
  return (
    <ScrollView>
      <EnvironmentCard
        location="Home"
        description="Agent Inside"
        image={IMAGES[0]}
        onPress={() => navigation.navigate(caseRoutes.insideHome)}
      />
      <EnvironmentCard
        location="Home"
        description="Agent Outside"
        image={IMAGES[0]}
        onPress={() => navigation.navigate(caseRoutes.outsideHome)}
      />
      <EnvironmentCard
        location="Home"
        description="Agent Arrests Me"
        image={IMAGES[0]}
        onPress={() => navigation.navigate(caseRoutes.homeArrest)}
      />

      <EnvironmentCard
        location="Work"
        description="For use at work"
        image={IMAGES[1]}
        onPress={() => navigation.navigate(caseRoutes.work)}
      />
      <EnvironmentCard
        location="Public Transit"
        description="For use on Public Transit"
        image={IMAGES[2]}
        onPress={() => navigation.navigate(caseRoutes.publicTransport)}
      />
      <EnvironmentCard
        location="Driving"
        description="For use when pulled over"
        image={IMAGES[3]}
        onPress={() => navigation.navigate(caseRoutes.driving)}
      />
      <EnvironmentCard
        location="Street"
        description="For use on the street"
        image={IMAGES[4]}
        onPress={() => navigation.navigate(caseRoutes.street)}
      />
    </ScrollView>
  );
}

EnvironmentCard.propTypes = {
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: Image.propTypes.source.isRequired,
  onPress: PropTypes.func.isRequired,
};

ListOfCards.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  image: {
    height: 75,
    width: 75,
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
    flexDirection: 'row',
    padding: 20,
    margin: 20,
    backgroundColor: 'rgba(22,22,22,0.2)',
    alignContent: 'space-between',
  },
});
