/* eslint-disable global-require */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Modal } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Feather, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import call from 'react-native-phone-call';
import { useSelector } from 'react-redux';
import colors from '../styles/colors';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import textStyles from '../styles/textStyles';

export default function EmergencyScreen({ navigation }) {
  const { t } = useTranslation();
  const [KYRModalVisible, setKYRModalVisible] = useState(false);
  const [InfoModalVisible, setInfoModalVisible] = useState(false);
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
      <InfoModal
        isVisible={InfoModalVisible}
        setModalVisible={setInfoModalVisible}
      />
      <KYRModal
        isVisible={KYRModalVisible}
        setModalVisible={setKYRModalVisible}
        attorneyName={savedAttorneyName}
        attorneyNumber={savedAttorneyNumber}
      />
      <View style={localStyles.container}>
        <TouchableOpacity
          style={{ alignSelf: 'flex-start', padding: 20, paddingTop: 40 }}
          onPress={navigation.goBack}
        >
          <MaterialCommunityIcons
            name="close"
            color={colors.charcoalGrey}
            size={32}
          />
        </TouchableOpacity>
        <View style={localStyles.rightsSuiteContainer}>
          <View style={localStyles.titleRow}>
            <Feather name="alert-triangle" color={colors.primary} size={28} />
            <View style={{ width: 6 }} />
            <Text style={[textStyles.h1, { paddingLeft: 4 }]}>
              {t('emergency_toolkit')}
            </Text>
          </View>
          <View style={localStyles.buttonStack}>
            <PrimaryButton
              title={t('call_emergency_hotline')}
              onPress={() => call(phoneNum)}
              darkMode
            />
            <PrimaryButton
              title={t('present_rights_card')}
              onPress={() => setKYRModalVisible(!KYRModalVisible)}
              darkMode
            />
          </View>
        </View>
        <TouchableOpacity
          style={localStyles.whatsThisRow}
          onPress={() => setInfoModalVisible(!InfoModalVisible)}
        >
          <Ionicons name="ios-help-circle" color={colors.primary} size={18} />
          <Text
            style={[textStyles.h3, { paddingLeft: 4, color: colors.primary }]}
          >
            {t('rights_card_what_is_this')}
          </Text>
        </TouchableOpacity>
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
      <Modal animationType="none" visible={isVisible}>
        <View style={modalStyles.container}>
          <TouchableOpacity
            style={{ paddingBottom: 12, paddingTop: 24 }}
            onPress={() => setModalVisible(!isVisible)}
          >
            <Feather
              name="chevron-left"
              color={colors.charcoalGrey}
              size={32}
            />
          </TouchableOpacity>
          <View style={modalStyles.contentContainer}>
            <View style={[modalStyles.rightsRow, { paddingBottom: 12 }]}>
              <Feather name="credit-card" color={colors.primary} size={20} />
              <Text style={[textStyles.h2, { paddingLeft: 8 }]}>
                {t('rights_card_title')}
              </Text>
            </View>
            <Text style={textStyles.body1}>{t('rights_card_content_1')}</Text>
            <Text style={[textStyles.body1, { paddingTop: 20 }]}>
              {t('rights_card_content_2')}
            </Text>
            <View style={localStyles.emergencyInfo}>
              <Text style={(textStyles.h4, localStyles.emergencyInfoItem)}>
                {attorneyName}
              </Text>
              <Text style={(textStyles.h4, localStyles.emergencyInfoItem)}>
                {attorneyNumber}
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const InfoModal = ({ isVisible, setModalVisible }) => {
  const { t } = useTranslation();
  return (
    <View>
      <Modal animationType="none" visible={isVisible}>
        {/* <View style={modalStyles.container}> */}
        <View style={modalStyles.container}>
          <TouchableOpacity
            style={{ paddingBottom: 12 }}
            onPress={() => setModalVisible(!isVisible)}
          >
            <Feather
              name="chevron-left"
              color={colors.charcoalGrey}
              size={32}
            />
          </TouchableOpacity>
          <View style={modalStyles.contentContainer}>
            <Text style={[textStyles.h2, { paddingVertical: 8 }]}>
              {t('info_modal_whats_my_emergency_toolkit?')}
            </Text>
            <Text style={textStyles.body1} color={colors.textLight}>
              {t('info_modal_emergency_toolkit_explanation')}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={modalStyles.iconColumn}>
                <Feather name="phone" size={24} />
                <Feather name="credit-card" size={24} />
              </View>
              <View style={modalStyles.contentColumn}>
                <Text style={textStyles.h5}>
                  {t('info_modal_emergency_hotline')}
                </Text>
                <Text style={textStyles.body1}>
                  {t('info_modal_emergency_hotline_explanation')}
                </Text>
                <Text style={[textStyles.h5, { paddingTop: 12 }]}>
                  {t('info_modal_rights_card')}
                </Text>
                <Text style={textStyles.body1}>
                  {t('info_modal_rights_card_explanation')}
                </Text>
              </View>
            </View>
            <PrimaryButton
              title={t('got_it')}
              onPress={() => setModalVisible(!isVisible)}
            />
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

InfoModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: 'white',
  },
  rightsSuiteContainer: {
    paddingHorizontal: 56,
    paddingTop: 80,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 80,
  },
  whatsThisRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 80,
  },
  buttonStack: {
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
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingHorizontal: 30,
    paddingBottom: 20,
    paddingTop: 72,
    flex: 1,
    flexGrow: 2.5,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },
  rightsRow: {
    flexDirection: 'row',
  },
  iconColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 124,
  },
  contentColumn: {
    flexDirection: 'column',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
});
