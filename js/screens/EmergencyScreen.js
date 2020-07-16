/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import styles from '../styles/textStyles';
import EmergencyButton from '../components/EmergencyButton';

export default function EmergencyScreen({ navigation }) {
  const { t } = useTranslation();
  return (
    <View style={localstyles.container}>
      <View>
        <TouchableOpacity
          style={{ alignSelf: 'flex-start', padding: 20 }}
          onPress={navigation.goBack}
        >
          <MaterialCommunityIcons name="close" color="black" size={40} />
        </TouchableOpacity>
        <View style={{ alignItems: 'center', paddingTop: 100 }}>
          <View style={localstyles.titleRow}>
            <MaterialCommunityIcons
              name="alert-outline"
              color="orange"
              size={30}
            />
            <Text style={styles.h1}>{t('emergency_toolkit')}</Text>
          </View>
          <View style={localstyles.buttonStack}>
            <EmergencyButton
              title={t('emergency_hotline')}
              onPress={() => Alert.alert('phone number pressed')}
            />
            <EmergencyButton
              title={t('rights_card')}
              onPress={() => Alert.alert('rights card pressed')}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

EmergencyScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

const localstyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  titleRow: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  buttonStack: {
    flexDirection: 'column',
    paddingTop: 20,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
  rightsCard: {
    padding: 30,
  },
});
