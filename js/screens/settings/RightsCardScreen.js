import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  DEFAULT_ATTORNEY,
  DEFAULT_NUMBER,
} from '../../../data/attorneyOptions';
import { HelpButton, SecondaryButton } from '../../components/Buttons';
import { colors, textStyles } from '../../styles';
import { getFormatted } from '../../util/phoneNumber';
import AttorneyForm from '../../components/AttorneyForm';
import CustomModal from '../../components/CustomModal';
import ModalContent from '../../components/ModalContent';
import setAttorneyNameAction from '../../store/actions/settings/setAttorneyNameAction';
import setAttorneyNumberAction from '../../store/actions/settings/setAttorneyNumberAction';

const AttorneyInformationBox = ({ name, number, onPress }) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.primaryLight,
        borderRadius: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 15,
        padding: 15,
      }}
    >
      <View style={{ flexDirection: 'column' }}>
        <Text style={[textStyles.h3, { paddingBottom: 10 }]}>{name}</Text>
        <Text style={textStyles.h3}>{number}</Text>
      </View>
      <Text style={[textStyles.h3, { color: colors.primary, padding: 4 }]}>
        {t('edit')}
      </Text>
    </TouchableOpacity>
  );
};

AttorneyInformationBox.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const RightsCardScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const savedName = useSelector((state) => state.settings.attorneyName);
  const savedNumber = useSelector((state) => state.settings.attorneyNumber);

  const [name, setName] = useState(savedName || '');
  const [number, setNumber] = useState(savedNumber || '');

  const setFormattedNumber = (_number) => {
    setNumber(getFormatted(_number));
  };

  const [nameIsInvalid, setNameIsInvalid] = useState(true);
  const [numberIsInvalid, setNumberIsInvalid] = useState(true);

  const [editModalVisible, setEditModalVisible] = useState(false);
  const onEditModalSubmit = () => {
    dispatch(setAttorneyNameAction(name));
    dispatch(setAttorneyNumberAction(number));
    setEditModalVisible(false);
  };

  const [useDefaultModalVisible, setUseDefaultModalVisible] = useState(false);
  const onNoAttorneyModalSubmit = () => {
    setName(DEFAULT_ATTORNEY);
    setNumber(DEFAULT_NUMBER);
    dispatch(setAttorneyNameAction(DEFAULT_ATTORNEY));
    dispatch(setAttorneyNumberAction(DEFAULT_NUMBER));
    setUseDefaultModalVisible(false);
  };

  const defaultIsSet =
    savedName.trim() === DEFAULT_ATTORNEY &&
    savedNumber.trim() === DEFAULT_NUMBER;

  return (
    <ScrollView
      alwaysBounceVertical={false}
      contentContainerStyle={styles.container}
    >
      <HelpButton
        onPress={() => {
          /* TODO: */
        }}
        title={t('what_is_attorney')}
      />
      <Text style={[textStyles.h5, { alignSelf: 'flex-start' }]}>
        {t('rights_card_contact')}
      </Text>
      <AttorneyInformationBox
        name={savedName}
        number={savedNumber}
        onPress={() => setEditModalVisible(true)}
      />
      {defaultIsSet || (
        <SecondaryButton
          alignRight
          onPress={() => setUseDefaultModalVisible(true)}
          title={t('no_attorney')}
        />
      )}
      {/* Modals */}
      <CustomModal
        buttonTitle=""
        isVisible={editModalVisible}
        primaryButton={{
          disabled: nameIsInvalid || numberIsInvalid,
          onPress: onEditModalSubmit,
          title: t(t('set_contact')),
        }}
        secondaryButton={{
          onPress: () => setEditModalVisible(false),
          title: t('cancel'),
        }}
      >
        <View style={styles.modalContentContainer}>
          <Text style={[textStyles.h2, { paddingBottom: 15 }]}>
            {t('edit_attorney_contact')}
          </Text>
          <AttorneyForm
            name={name}
            nameIsInvalid={nameIsInvalid}
            number={number}
            numberIsInvalid={numberIsInvalid}
            setName={setName}
            setNameIsInvalid={setNameIsInvalid}
            setNumber={setFormattedNumber}
            setNumberIsInvalid={setNumberIsInvalid}
          />
        </View>
      </CustomModal>
      <CustomModal
        buttonTitle={t('no_attorney')}
        isVisible={useDefaultModalVisible}
        primaryButton={{
          onPress: onNoAttorneyModalSubmit,
          title: t('use_chirla'),
        }}
        secondaryButton={{
          onPress: () => setUseDefaultModalVisible(false),
          title: t('cancel'),
        }}
      >
        <ModalContent
          subtitle={t('attorney_default_subtitle')}
          title={t('attorney_default_title')}
        />
      </CustomModal>
    </ScrollView>
  );
};

RightsCardScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default RightsCardScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexGrow: 1,

    justifyContent: 'flex-start',
    // paddingTop technically 44 but HelpButton has padding 16 (from SecondaryButton)
    padding: 28,
  },
  modalContentContainer: {
    alignItems: 'flex-start',
    alignSelf: 'stretch',
  },
});
