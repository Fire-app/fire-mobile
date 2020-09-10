import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import call from 'react-native-phone-call';
import CustomModal from '../components/CustomModal';
import { HelpButton, PrimaryButton } from '../components/Buttons';
import colors from '../styles/colors';
import textStyles from '../styles/textStyles';
import FireIcon, { ICON_NAMES } from '../components/FireIcon';

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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={{ alignSelf: 'flex-start', paddingLeft: 20, paddingTop: 12 }}
          >
            <FireIcon
              color={colors.charcoalGrey}
              name={ICON_NAMES.CLOSE}
              size={32}
            />
          </TouchableOpacity>
          <View style={{ flexGrow: 1 }} />
          <View style={{ paddingHorizontal: 56 }}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <FireIcon
                color={colors.primary}
                name={ICON_NAMES.ALERT}
                size={32}
                style={{ paddingRight: 6, paddingTop: 3 }}
              />
              <Text style={textStyles.h1}>{t('emergency_toolkit')}</Text>
            </View>
            <View style={{ paddingTop: 12 }}>
              <PrimaryButton
                darkMode
                onPress={() => call(phoneNum)}
                title={t('call_emergency_hotline')}
              />
              <PrimaryButton
                darkMode
                onPress={() => setRightsCardVisible(!RightsCardVisible)}
                title={t('rights_card')}
              />
            </View>
          </View>
          <View style={{ flexGrow: 1, maxHeight: 100 }} />
          <HelpButton
            centered
            onPress={() => setInfoModalVisible(!InfoModalVisible)}
            title={t('rights_card_what_is_this')}
          />
          <View style={{ flexGrow: 1 }} />
        </ScrollView>

        {/* ABSOLUTE MODALS */}
        <InfoModal
          isVisible={InfoModalVisible}
          setModalVisible={setInfoModalVisible}
        />
        <RightsCardModal
          attorneyName={savedAttorneyName}
          attorneyNumber={savedAttorneyNumber}
          isVisible={RightsCardVisible}
          setModalVisible={setRightsCardVisible}
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
        onPress: () => setModalVisible(!isVisible),
        title: t('dismiss_card'),
      }}
    >
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          paddingBottom: 12,
        }}
      >
        <FireIcon
          color={colors.primary}
          name={ICON_NAMES.CREDIT_CARD}
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
      contentContainerStyle={{ paddingHorizontal: 30 }}
      isVisible={isVisible}
      primaryButton={{
        onPress: () => setModalVisible(!isVisible),
        title: t('got_it'),
      }}
    >
      <Text style={[textStyles.h2, { paddingBottom: 10 }]}>
        {t('info_modal_whats_my_emergency_toolkit?')}
      </Text>
      <Text color={colors.textLight} style={textStyles.body1}>
        {t('info_modal_emergency_toolkit_explanation')}
      </Text>
      <View style={{ flexDirection: 'row', paddingTop: 15 }}>
        <FireIcon
          name={ICON_NAMES.PHONE}
          size={24}
          style={{ paddingRight: 12 }}
        />
        <View style={{ flex: 1 }}>
          <Text style={textStyles.h5}>{t('emergency_hotline')}</Text>
          <Text style={textStyles.body1}>
            {t('info_modal_emergency_hotline_explanation')}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
        <FireIcon
          name={ICON_NAMES.CREDIT_CARD}
          size={24}
          style={{ paddingRight: 12 }}
        />
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
    goBack: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

RightsCardModal.propTypes = {
  attorneyName: PropTypes.string.isRequired,
  attorneyNumber: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
};

InfoModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
};
