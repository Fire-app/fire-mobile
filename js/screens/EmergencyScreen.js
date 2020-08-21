import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import call from 'react-native-phone-call';
import { useSelector } from 'react-redux';
import colors from '../styles/colors';
import { PrimaryButton, HelpButton } from '../components/Buttons';
import textStyles from '../styles/textStyles';
import CustomModal from '../components/CustomModal';

export default function EmergencyScreen({ navigation }) {
  const { t } = useTranslation();
  const [RightsCardVisible, setRightsCardVisible] = useState(false);
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
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
          <TouchableOpacity
            style={{ alignSelf: 'flex-start', paddingLeft: 20, paddingTop: 12 }}
            onPress={navigation.goBack}
          >
            <MaterialCommunityIcons
              name="close"
              color={colors.charcoalGrey}
              size={32}
            />
          </TouchableOpacity>
          <View style={{ flexGrow: 1 }} />
          <View style={{ paddingHorizontal: 56 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Feather
                name="alert-triangle"
                color={colors.primary}
                size={32}
                style={{ paddingTop: 3, paddingRight: 6 }}
              />
              <Text style={textStyles.h1}>{t('emergency_toolkit')}</Text>
            </View>
            <View style={{ paddingTop: 12 }}>
              <PrimaryButton
                title={t('emergency_hotline')}
                onPress={() => call(phoneNum)}
                darkMode
              />
              <PrimaryButton
                title={t('rights_card')}
                onPress={() => setRightsCardVisible(!RightsCardVisible)}
                darkMode
              />
            </View>
          </View>
          <View style={{ flexGrow: 1, maxHeight: 100 }} />
          <HelpButton
            title={t('rights_card_what_is_this')}
            onPress={() => setInfoModalVisible(!InfoModalVisible)}
            centered
          />
          <View style={{ flexGrow: 1 }} />
        </ScrollView>

        {/* ABSOLUTE MODALS */}
        <InfoModal
          isVisible={InfoModalVisible}
          setModalVisible={setInfoModalVisible}
        />
        <RightsCardModal
          isVisible={RightsCardVisible}
          setModalVisible={setRightsCardVisible}
          attorneyName={savedAttorneyName}
          attorneyNumber={savedAttorneyNumber}
        />
      </SafeAreaView>
    </View>
  );
}

const RightsCardModal = ({
  isVisible,
  setModalVisible,
  attorneyName,
  attorneyNumber,
}) => {
  const { t } = useTranslation();
  return (
    <CustomModal
      isVisible={isVisible}
      primaryButton={{
        title: t('dismiss_card'),
        onPress: () => setModalVisible(!isVisible),
      }}
    >
      <View
        style={{
          paddingBottom: 12,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Feather
          name="credit-card"
          color={colors.primary}
          size={22}
          style={{ paddingTop: 2 }}
        />
        <Text style={[textStyles.h2, { paddingLeft: 8 }]}>
          {t('rights_card_title')}
        </Text>
      </View>
      <Text style={textStyles.body1}>
        {`${t('rights_card_content_1')}\n\n${t('rights_card_content_2')}`}
      </Text>
      <Text style={[textStyles.h3, { paddingVertical: 10 }]}>
        {attorneyName}
      </Text>
      <Text style={[textStyles.h3, { paddingBottom: 25 }]}>
        {attorneyNumber}
      </Text>
    </CustomModal>
  );
};

const InfoModal = ({ isVisible, setModalVisible }) => {
  const { t } = useTranslation();
  return (
    <CustomModal
      isVisible={isVisible}
      primaryButton={{
        title: t('got_it'),
        onPress: () => setModalVisible(!isVisible),
      }}
      contentContainerStyle={{ paddingHorizontal: 30 }}
    >
      <Text style={[textStyles.h2, { paddingBottom: 10 }]}>
        {t('info_modal_whats_my_emergency_toolkit?')}
      </Text>
      <Text style={textStyles.body1} color={colors.textLight}>
        {t('info_modal_emergency_toolkit_explanation')}
      </Text>
      <View style={{ flexDirection: 'row', paddingTop: 15 }}>
        <Feather name="phone" size={24} style={{ paddingRight: 12 }} />
        <View style={{ flex: 1 }}>
          <Text style={textStyles.h5}>{t('info_modal_emergency_hotline')}</Text>
          <Text style={textStyles.body1}>
            {t('info_modal_emergency_hotline_explanation')}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
        <Feather name="credit-card" size={24} style={{ paddingRight: 12 }} />
        <View style={{ flex: 1 }}>
          <Text style={textStyles.h5}>{t('info_modal_rights_card')}</Text>
          <Text style={textStyles.body1}>
            {t('info_modal_rights_card_explanation')}
          </Text>
        </View>
      </View>
    </CustomModal>
  );
};

EmergencyScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

RightsCardModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
  attorneyName: PropTypes.string.isRequired,
  attorneyNumber: PropTypes.string.isRequired,
};

InfoModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
};
