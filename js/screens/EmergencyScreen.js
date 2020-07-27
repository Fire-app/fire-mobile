/* eslint-disable global-require */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Modal } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import call from 'react-native-phone-call';
import { useSelector } from 'react-redux';
import styles from '../styles/textStyles';
import colors from '../styles/colors';
import PrimaryButton from '../components/Buttons/PrimaryButton';

export default function EmergencyScreen({ navigation }) {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const savedHotlineNumber = useSelector(
    (state) => state.settings.hotlineNumber
  );
  const savedAttorneyName = useSelector((state) => state.settings.attorneyName);
  const savedAttorneyNumber = useSelector(
    (state) => state.settings.attorneyNumber
  );
  const phoneNum = {
    number: savedHotlineNumber,
    prompt: false,
  };
  return (
    <>
      <KYRModal
        isVisible={modalVisible}
        setModalVisible={setModalVisible}
        attorneyName={savedAttorneyName}
        attorneyNumber={savedAttorneyNumber}
      />
      <View style={localStyles.container}>
        <TouchableOpacity
          style={{ alignSelf: 'flex-start', padding: 20 }}
          onPress={navigation.goBack}
        >
          <MaterialCommunityIcons name="close" color="black" size={32} />
        </TouchableOpacity>
        <View style={localStyles.rightsSuiteContainer}>
          <View style={localStyles.titleRow}>
            <MaterialCommunityIcons
              name="alert-outline"
              color={colors.primary}
              size={28}
            />
            <Text style={[styles.h1, { paddingLeft: 4 }]}>
              {t('emergency_toolkit')}
            </Text>
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
const KYRModal = ({
  isVisible,
  setModalVisible,
  attorneyName,
  attorneyNumber,
}) => {
  const { t } = useTranslation();
  return (
    <View>
      <Modal animationType="slide" visible={isVisible}>
        {/* <View style={modalStyles.container}> */}
        <View style={modalStyles.container}>
          <TouchableOpacity
            style={{ paddingBottom: 12 }}
            onPress={() => setModalVisible(!isVisible)}
          >
            <MaterialCommunityIcons name="close" color="black" size={32} />
          </TouchableOpacity>
          <View style={modalStyles.contentContainer}>
            <View style={[modalStyles.rightsRow, { paddingBottom: 12 }]}>
              <MaterialCommunityIcons
                name="shield-half-full"
                color="orange"
                size={20}
              />
              <Text style={[styles.h2, { paddingLeft: 8 }]}>
                {t('rights_card_title')}
              </Text>
            </View>
            <Text style={styles.body1}>{t('rights_card_content_1')}</Text>
            <Text style={[styles.body1, { paddingTop: 20 }]}>
              {t('rights_card_content_2')}
            </Text>
            <View style={localStyles.emergencyInfo}>
              <Text style={(styles.h4, localStyles.emergencyInfoItem)}>
                {attorneyName}
              </Text>
              <Text style={(styles.h4, localStyles.emergencyInfoItem)}>
                {attorneyNumber}
              </Text>
            </View>
            {/* </View> */}
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

KYRModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
  attorneyName: PropTypes.string.isRequired,
  attorneyNumber: PropTypes.string.isRequired,
};

const localStyles = StyleSheet.create({
  container: {
    // marginHorizontal: 12,
    paddingVertical: 12,
  },
  rightsSuiteContainer: {
    alignItems: 'center',
    paddingTop: 80,
  },
  titleRow: {
    flexDirection: 'row',
    paddingTop: 80,
  },
  buttonStack: {
    flexDirection: 'column',
    paddingTop: 12,
  },
  emergencyInfo: {
    padding: 4,
  },
  emergencyInfoItem: {
    fontWeight: 'bold',
    paddingVertical: 4,
    fontSize: 16,
  },
});

const modalStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 32,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingHorizontal: 30,
    paddingBottom: 20,
    paddingTop: 92,
    flex: 1,
    flexGrow: 2.5,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },
  rightsRow: {
    flexDirection: 'row',
  },
});
