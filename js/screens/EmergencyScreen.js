/* eslint-disable global-require */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Modal } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import call from 'react-native-phone-call';
import styles from '../styles/textStyles';
import PrimaryButton from '../components/Buttons/PrimaryButton';

export default function EmergencyScreen({ navigation }) {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const phoneNum = {
    number: '5105550199',
    prompt: false,
  };
  return (
    <>
      <KYRModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
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
              onPress={() => call(phoneNum)}
              darkMode
            />
            <PrimaryButton
              title={t('rights_card')}
              onPress={() => setModalVisible(!modalVisible)}
              darkMode
            />
          </View>
        </View>
      </View>
    </>
  );
}
/* Modal code adapted from NoAttorneyModal */
const KYRModal = ({ isVisible, setModalVisible }) => {
  const { t } = useTranslation();
  return (
    <View>
      <Modal transparent animationType="fade" visible={isVisible}>
        <View style={modalStyles.container}>
          <View style={modalStyles.innerContainer}>
            <View style={modalStyles.contentContainer}>
              <Text style={[styles.h2, { paddingBottom: 20 }]}>
                {t('attorney_default_title')}
              </Text>
              <Text style={styles.body1}>{t('attorney_default_subtitle')}</Text>
            </View>
            <View style={modalStyles.buttonContainer}>
              {/* <OnboardingButtons
                onRightPress={() => setIsVisible(false)}
                onLeftPress={onSubmit}
                rightTitle={t('cancel')}
                leftTitle={t('use_chirla')}
                nextIsDisabled={false}
              /> */}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

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

const modalStyles = StyleSheet.create({
  noAttorneyButton: {
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#00000080',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  innerContainer: {
    height: '35%',
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 20,
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderRadius: 3,
  },
  contentContainer: {
    flex: 1,
    flexGrow: 2.5,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    paddingBottom: 10,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flex: 1,
    alignSelf: 'stretch',
    margin: 5,
  },
});
