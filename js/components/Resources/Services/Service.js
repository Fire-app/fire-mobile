import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ViewListButton from '../../Buttons/ViewListButton';
import CustomModal from '../../CustomModal';
import FireIcon, { ICON_NAMES } from '../../FireIcon';

import { colors, textStyles } from '../../../styles';

export default function Service({ name, services }) {
  const { t } = useTranslation();
  const [InfoModalVisible, setInfoModalVisible] = useState(false);

  const servicesList = services.map((item) => {
    return (
      <View key={item} style={styles.textContainer}>
        <FireIcon name={ICON_NAMES.CIRCLE} style={styles.bulletPoint} />
        <Text style={[textStyles.body1, { color: colors.textLight }]}>
          {t(item)}
        </Text>
      </View>
    );
  });

  return (
    <View style={styles.serviceContainer}>
      <View style={{ flex: 1, paddingRight: 8 }}>
        <Text
          style={[
            textStyles.body1,
            colors.charcoalGrey,
            { paddingVertical: 10 },
          ]}
        >
          {t(name)}
        </Text>
      </View>
      <ViewListButton
        centered
        onPress={() => setInfoModalVisible(!InfoModalVisible)}
        title={t('resources__view_list')}
      />
      {/* ABSOLUTE MODAL */}
      <InfoModal
        body={servicesList}
        isVisible={InfoModalVisible}
        setModalVisible={setInfoModalVisible}
        title={t('resources__services_legal_modal_header')}
      />
    </View>
  );
}

const InfoModal = ({ isVisible, setModalVisible, title, body }) => {
  const { t } = useTranslation();
  return (
    <CustomModal
      contentContainerStyle={{ paddingHorizontal: 30 }}
      isVisible={isVisible}
      primaryButton={{
        onPress: () => setModalVisible(!isVisible),
        title: t('close'),
      }}
    >
      <Text style={[textStyles.h2, { paddingBottom: 10 }]}>{title}</Text>
      <View style={{ paddingBottom: 20 }}>{body}</View>
    </CustomModal>
  );
};

Service.propTypes = {
  name: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

InfoModal.propTypes = {
  body: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isVisible: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  bulletPoint: {
    color: colors.textLight,
    fontSize: 6,
    paddingRight: 8,
    paddingTop: 10,
  },
  serviceContainer: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: 4,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
    padding: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  textContainer: {
    flexDirection: 'row',
    paddingBottom: 15,
  },
});
