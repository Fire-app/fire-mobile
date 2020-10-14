import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
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
import ModalContent from '../components/ModalContent';
import Card from '../components/Card';
import { HelpButton, PrimaryButton } from '../components/Buttons';
import { colors } from '../styles';
import textStyles from '../styles/textStyles';
import FireIcon, { ICON_NAMES } from '../components/FireIcon';

const TitleSection = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.titleContainer}>
      <FireIcon
        color={colors.primary}
        name={ICON_NAMES.ALERT}
        size={32}
        style={{ paddingRight: 6, paddingTop: 3 }}
      />
      <Text style={textStyles.h1}>{t('emergency_hotline')}</Text>
    </View>
  );
};

const InfoSection = () => {
  const { t } = useTranslation();
  return (
    <Card style={styles.infoCard}>
      <>
        <Text style={[textStyles.h3, { paddingVertical: 6 }]}>
          {t('call_hotline_if')}
        </Text>
        <Text style={[textStyles.body1, styles.infoText]}>
          {t('you_are_detained')}
        </Text>
        <Text style={[textStyles.body1, styles.infoText]}>
          {t('you_saw_raid')}
        </Text>
        <Text style={[textStyles.body1, styles.infoText]}>
          {t('you_are_being_patrolled')}
        </Text>
      </>
    </Card>
  );
};

const InfoModal = ({ isVisible, onClose }) => {
  const { t } = useTranslation();
  return (
    <CustomModal
      contentContainerStyle={{ paddingHorizontal: 30 }}
      isVisible={isVisible}
      primaryButton={{
        onPress: onClose,
        title: t('got_it'),
      }}
    >
      <ModalContent
        subtitle={t('what_is_hotline_content')}
        title={t('what_is_hotline')}
      />
    </CustomModal>
  );
};

InfoModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default function EmergencyScreen({ navigation }) {
  const { t } = useTranslation();
  const [InfoModalVisible, setInfoModalVisible] = useState(false);
  const savedHotlineNumber = useSelector(
    (state) => state.settings.hotlineNumber
  );
  const phoneNum = {
    number: savedHotlineNumber,
    prompt: false,
  };
  return (
    <View style={{ backgroundColor: colors.white, flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
          style={{ flex: 1 }}
        >
          <View>
            <TouchableOpacity onPress={navigation.goBack} style={styles.close}>
              <FireIcon
                color={colors.charcoalGrey}
                name={ICON_NAMES.CLOSE}
                size={32}
              />
            </TouchableOpacity>
            <TitleSection />
            <InfoSection />
            <View style={{ paddingHorizontal: 56, paddingTop: 12 }}>
              <PrimaryButton
                darkMode
                onPress={() => call(phoneNum)}
                title={t('call_emergency_hotline')}
              />
            </View>
          </View>
          <HelpButton
            centered
            onPress={() => setInfoModalVisible(true)}
            title={t('learn_more')}
          />
        </ScrollView>
        {/* MODAL */}
        <InfoModal
          isVisible={InfoModalVisible}
          onClose={() => setInfoModalVisible(false)}
        />
      </SafeAreaView>
    </View>
  );
}

EmergencyScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  close: {
    alignSelf: 'flex-start',
    paddingBottom: 60,
    paddingLeft: 20,
    paddingTop: 12,
  },
  infoCard: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    margin: 26,
    paddingHorizontal: 16,
  },
  infoText: {
    color: colors.textLight,
    paddingVertical: 6,
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
