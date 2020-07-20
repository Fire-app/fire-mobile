/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import styles from '../styles/textStyles';
import PrimaryButton from '../components/Buttons/PrimaryButton';

export default function EmergencyScreen({ navigation }) {
  const { t } = useTranslation();
  return (
    <View style={localStyles.container}>
      <TouchableOpacity
        style={{ alignSelf: 'flex-start', padding: 20 }}
        onPress={navigation.goBack}
      >
        <MaterialCommunityIcons name="close" color="black" size={40} />
      </TouchableOpacity>
      <View style={{ alignItems: 'center' }}>
        <View style={localStyles.titleRow}>
          <MaterialCommunityIcons
            name="alert-outline"
            color="orange"
            size={28}
          />
          <Text style={styles.h1}>{t('emergency_toolkit')}</Text>
        </View>
        <View style={localStyles.buttonStack}>
          <PrimaryButton
            title={t('emergency_hotline')}
            onPress={() => Alert.alert('phone number pressed')}
            darkMode
          />
          <PrimaryButton
            title={t('rights_card')}
            onPress={() => Alert.alert('rights card pressed')}
            darkMode
          />
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

const localStyles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginVertical: 144,
  },
  titleRow: {
    flexDirection: 'row',
    paddingTop: 40,
  },
  buttonStack: {
    flexDirection: 'column',
    paddingTop: 12,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
  rightsCard: {
    padding: 30,
  },
});
