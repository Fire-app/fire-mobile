/* eslint-disable global-require */
import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert, Modal } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import styles from '../styles/textStyles';
import EmergencyButton from '../components/EmergencyButton';

export default function EmergencyScreen({ navigation }) {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={localstyles.container}>
      <Modal visible={modalVisible} animationType="slide">
        <View style={localstyles.rightsCard}>
          {/* { backgroundColor: '#00000080' }] */}
          <TouchableOpacity
            style={{ alignSelf: 'flex-start', padding: 40 }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <MaterialCommunityIcons name="close" color="black" size={40} />
          </TouchableOpacity>
          <View style={localstyles.titleRow}>
            <MaterialCommunityIcons
              name="shield-half-full"
              color="orange"
              size={30}
            />
            <Text style={styles.h1}>{t('rights_card')}</Text>
          </View>
          <Text style={[styles.body1, { flexWrap: 'wrap' }]}>
            {t('rights_card_content')}
          </Text>
        </View>
      </Modal>

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
              onPress={() => Alert.alert('hotline pressed')}
            />
            <EmergencyButton
              title={t('rights_card')}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const localstyles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingBottom: 75,
    // padding: 30,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    // flexDirection: 'row',
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
  rightsCard: {
    // justifyContent: 'center',
    // alignContent: 'center',
    padding: 30,
  },
});
