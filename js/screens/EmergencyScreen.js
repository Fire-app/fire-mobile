/* eslint-disable global-require */
import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/textStyles';
import EmergencyButton from '../components/EmergencyButton';

const RightsCardContent = () => (
  <View style={localstyles.container}>
    <View style={localstyles.titleRow}>
      <MaterialCommunityIcons
        name="shield-half-full"
        color="orange"
        size={30}
      />
      <Text style={styles.h1}>{'Rights Card'}</Text>
    </View>
    <Text style={styles.body1}>
      {
        'I am showing you this card because I do not wish to speak to you or have any further contact with you. I choose to exercise my constitutional right to remain silent and reguse to answer your questions. If you arrest me, I will continue to exercise my right to remain silent and to refuse to answer your questions.'
      }
    </Text>
  </View>
);

export default function EmergencyScreen({ navigation }) {
  const [currView, setCurrView] = useState('Toolkit');

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{ alignSelf: 'flex-end', padding: 40 }}
        onPress={navigation.goBack}
      >
        <MaterialCommunityIcons name="close" color="black" size={40} />
      </TouchableOpacity>
      {currView === 'Toolkit' ? (
        <View style={localstyles.container}>
          <View style={localstyles.titleRow}>
            <MaterialCommunityIcons
              name="alert-outline"
              color="orange"
              size={30}
            />
            <Text style={styles.h1}>{'Emergency Toolkit'}</Text>
          </View>
          <View style={localstyles.buttonStack}>
            <EmergencyButton
              title="Emergency Hotline"
              onPress={() => Alert.alert('hotline pressed')}
            />
            <EmergencyButton
              title="Rights Card"
              onPress={() => setCurrView('RightsCard')}
            />
          </View>
        </View>
      ) : (
        <RightsCardContent />
      )}
    </View>
  );
}

const localstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  titleRow: {
    flexDirection: 'row',
  },
  buttonStack: {
    flexDirection: 'column',
    paddingTop: 20,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});
