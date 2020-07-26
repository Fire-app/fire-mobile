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
import { textStyles, colors } from '../../styles';
import {
  DEFAULT_ATTORNEY,
  DEFAULT_NUMBER,
} from '../../../data/attorneyOptions';
import { SecondaryButton } from '../../components/Buttons';

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

// const EditAttorneyModalContent = ({ name, setName, number, setNumber }) => {
//   const { t } = useTranslation();

//   const [nameIsInvalid, setNameIsInvalid] = useState(true);
//   const [numberIsInvalid, setNumberIsInvalid] = useState(true);

//   return (
//     <View style={styles.modalContentContainer}>
//       <Text style={[textStyles.h2, { paddingBottom: 15 }]}>
//         {t('edit_attorney_contact')}
//       </Text>
//       <AttorneyForm
//         name={name}
//         setName={setName}
//         number={number}
//         setNumber={setNumber}
//         nameIsInvalid={nameIsInvalid}
//         setNameIsInvalid={setNameIsInvalid}
//         numberIsInvalid={numberIsInvalid}
//         setNumberIsInvalid={setNumberIsInvalid}
//       />
//     </View>
//   );
// };

// EditAttorneyModalContent.propTypes = {
//   name: PropTypes.string.isRequired,
//   setName: PropTypes.func.isRequired,
//   number: PropTypes.string.isRequired,
//   setNumber: PropTypes.func.isRequired,
// };

const RightsCardScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const savedName = useSelector((state) => state.settings.attorneyName);
  const savedNumber = useSelector((state) => state.settings.attorneyNumber);

  const [name, setName] = useState(savedName || '');
  const [number, setNumber] = useState(savedNumber || '');

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

  // TODO:
  const defaultIsSet =
    savedName === DEFAULT_ATTORNEY && savedNumber === DEFAULT_NUMBER;

  return (
    <View style={styles.container}>
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
          title={t('no_attorney')}
          onPress={() => setUseDefaultModalVisible(true)}
          alignRight
        />
      )}
      {/* Modals */}
      <CustomModal
        isVisible={editModalVisible}
        primaryButton={{
          title: t(t('set_contact')),
          onPress: onEditModalSubmit,
          disabled: nameIsInvalid || numberIsInvalid,
        }}
        secondaryButton={{
          title: t('cancel'),
          onPress: () => setEditModalVisible(false),
        }}
        buttonTitle=""
      >
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
      </CustomModal>
      <CustomModal
        isVisible={useDefaultModalVisible}
        primaryButton={{
          title: t('use_chirla'),
          onPress: onNoAttorneyModalSubmit,
        }}
        secondaryButton={{
          title: t('cancel'),
          onPress: () => setUseDefaultModalVisible(false),
        }}
        buttonTitle={t('no_attorney')}
      >
        <ModalContent
          title={t('attorney_default_title')}
          subtitle={t('attorney_default_subtitle')}
        />
      </CustomModal>
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
