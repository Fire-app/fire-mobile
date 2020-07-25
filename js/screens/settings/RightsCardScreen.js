import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import setAttorneyNumberAction from '../../store/actions/settings/setAttorneyNumberAction';
import setAttorneyNameAction from '../../store/actions/settings/setAttorneyNameAction';
import CustomModal from '../../components/CustomModal';
import AttorneyForm from '../../components/AttorneyForm';
import ModalContent from '../../components/ModalContent';
import { NavigationButtons } from '../../components/Buttons';
import { textStyles, colors } from '../../styles';
import {
  DEFAULT_ATTORNEY,
  DEFAULT_NUMBER,
} from '../../../data/attorneyOptions';

const AttorneyInformationBox = ({ name, number, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: colors.primaryLight,
        borderRadius: 3,
        marginTop: 15,
      }}
      onPress={onPress}
    >
      <View style={{ flexDirection: 'column' }}>
        <Text style={[textStyles.h3, { padding: 2 }]}>{name}</Text>
        <Text style={[textStyles.h3, { padding: 2 }]}>{number}</Text>
      </View>
      <MaterialCommunityIcons
        name="pencil-outline"
        size={24}
        color={colors.primary}
      />
    </TouchableOpacity>
  );
};

AttorneyInformationBox.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const EditAttorneyModalContent = ({
  name,
  setName,
  number,
  setNumber,
  setModalVisible,
  onSubmit,
}) => {
  const { t } = useTranslation();

  const [nameIsInvalid, setNameIsInvalid] = useState(true);
  const [numberIsInvalid, setNumberIsInvalid] = useState(true);

  return (
    <View>
      <View style={styles.modalContentContainer}>
        <Text style={[textStyles.h2, { paddingBottom: 15 }]}>
          {t('edit_attorney_contact')}
        </Text>
        <AttorneyForm
          name={name}
          setName={setName}
          number={number}
          setNumber={setNumber}
          nameIsInvalid={nameIsInvalid}
          setNameIsInvalid={setNameIsInvalid}
          numberIsInvalid={numberIsInvalid}
          setNumberIsInvalid={setNumberIsInvalid}
        />
      </View>
      <NavigationButtons
        onSecondaryPress={() => setModalVisible(false)}
        onPrimaryPress={onSubmit}
        secondaryTitle={t('cancel')}
        primaryTitle={t('set_contact')}
        hasLongTitles
        primaryIsDisabled={nameIsInvalid || numberIsInvalid}
      />
    </View>
  );
};

EditAttorneyModalContent.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
  setNumber: PropTypes.func.isRequired,
  setModalVisible: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const NoAttorneyModalContent = ({ setModalVisible, onSubmit }) => {
  const { t } = useTranslation();
  return (
    <View>
      <ModalContent
        title={t('attorney_default_title')}
        subtitle={t('attorney_default_subtitle')}
      />
      <NavigationButtons
        onSecondaryPress={() => setModalVisible(false)}
        onPrimaryPress={onSubmit}
        secondaryTitle={t('cancel')}
        primaryTitle={t('use_chirla')}
        hasLongTitles
      />
    </View>
  );
};

NoAttorneyModalContent.propTypes = {
  setModalVisible: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const RightsCardScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const savedName = useSelector((state) => state.settings.attorneyName);
  const savedNumber = useSelector((state) => state.settings.attorneyNumber);

  const [name, setName] = useState(savedName || '');
  const [number, setNumber] = useState(savedNumber || '');

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
    savedName === DEFAULT_ATTORNEY && savedNumber === DEFAULT_NUMBER;

  return (
    <View style={styles.container}>
      <Text style={[textStyles.settingsText, { alignSelf: 'flex-start' }]}>
        {t('rights_card_contact')}
      </Text>
      <AttorneyInformationBox
        name={savedName}
        number={savedNumber}
        onPress={() => setEditModalVisible(true)}
      />
      <CustomModal
        isVisible={editModalVisible}
        setIsVisible={setEditModalVisible}
        buttonTitle=""
      >
        <EditAttorneyModalContent
          name={name}
          setName={setName}
          number={number}
          setNumber={setNumber}
          onSubmit={onEditModalSubmit}
          setModalVisible={setEditModalVisible}
        />
      </CustomModal>
      {defaultIsSet || (
        <CustomModal
          isVisible={useDefaultModalVisible}
          setIsVisible={setUseDefaultModalVisible}
          buttonTitle={t('no_attorney')}
        >
          <NoAttorneyModalContent
            onSubmit={onNoAttorneyModalSubmit}
            setModalVisible={setUseDefaultModalVisible}
          />
        </CustomModal>
      )}
    </View>
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
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 30,
    justifyContent: 'flex-start',
  },
  modalContentContainer: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
  },
});
