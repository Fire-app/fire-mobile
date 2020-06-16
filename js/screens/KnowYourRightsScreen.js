/* eslint-disable global-require */
import React from 'react';
import { View, Image, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';

import Constants from 'expo-constants';

const EXAMPLE_IMAGES = [
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

export default ListOfCards = ({ navigation }) => {
    return (
        <ScrollView>
            <EnvironmentCard
                location="Home"
                description="Agent Inside"
                image={EXAMPLE_IMAGES[0]}
                onPress={() => navigation.navigate("Inside Home")}
            />
            <EnvironmentCard
                location="Home"
                description="Agent Outside"
                image={EXAMPLE_IMAGES[0]}
                onPress={() => navigation.navigate("Outside Home")}
            />
            <EnvironmentCard
                location="Home"
                description="Agent Arrests Me"
                image={EXAMPLE_IMAGES[0]}
                onPress={() => navigation.navigate("Home Arrest")}
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
                onPress={() => Alert.alert('public transit clicked')}
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
        </ScrollView>
    );
}

EnvironmentCard.propTypes = {
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: Image.propTypes.source.isRequired,
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
        paddingTop: Constants.statusBarHeight,
    },
    envCard: {
        flexDirection: 'row',
        padding: 20,
        margin: 20,
        backgroundColor: 'rgba(22,22,22,0.2)',
        alignContent: 'space-between',
    },
});
