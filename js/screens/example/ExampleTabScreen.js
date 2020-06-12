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

// const EXAMPLE_TEXT = [
//   'This is Banksi',
//   'He is a very good boy',
//   'He is very seasonal',
// ];

// export default function ExampleTabScreen({ route: { name } }) {
//   const index = name.charAt(name.length - 1) - 1; // Big hack to get an index, because we named these "Tab1", "Tab2", etc.
//   // const image = EXAMPLE_IMAGES[index];
//   // const text = EXAMPLE_TEXT[index];
//   return (
//     <View style={styles.container}>
//       {/* <Image
//         style={styles.image}
//         source={image}
//         accessibilityLabel="Banksy the dog" // This is a fallback of having the dynamic images! Less curated accessibility
//       /> */}
//       <Text style={styles.text}>{'hello'}</Text>
//     </View>
//   );
// }

function EnvironmentCard({ location, description, image }) {
  return (
    <View style={styles.envCard} top={100}>
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
  titletext: {
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
