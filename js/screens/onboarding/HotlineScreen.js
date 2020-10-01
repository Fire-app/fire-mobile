import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { View } from 'react-native';
import { DEFAULT_HOTLINE, HOTLINE_OPTIONS } from '../../../data/hotlineOptions';
import { HelpButton } from '../../components/Buttons';
import CustomModal from '../../components/CustomModal';
import ListSelector from '../../components/ListSelector';
import ModalContent from '../../components/ModalContent';
import OnboardingTemplate from './Template';
import OnboardingTitle from '../../components/OnboardingTitle';
import routes from '../../navigation/routes';
import setHotlineNameAction from '../../store/actions/settings/setHotlineNameAction';
import setHotlineNumberAction from '../../store/actions/settings/setHotlineNumberAction';

const onboardingRoutes = routes.onboarding;

const HotlineScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [hotlineName, setHotlineName] = useState(DEFAULT_HOTLINE.name);
  const [hotlineNumber, setHotlineNumber] = useState(
    DEFAULT_HOTLINE.phoneNumber
  );

  const dispatch = useDispatch();
  const saveHotlineNumber = () => {
    dispatch(setHotlineNameAction(hotlineName));
    dispatch(setHotlineNumberAction(hotlineNumber));
    navigation.navigate(onboardingRoutes.complete);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const onListChange = ({ item: { name, phoneNumber } }) => {
    setHotlineName(name);
    setHotlineNumber(phoneNumber);
  };

  return (
    <OnboardingTemplate
      primaryButton={{
        onPress: saveHotlineNumber,
        title: t('next'),
      }}
      secondaryButton={{
        onPress: () => navigation.pop(),
        title: t('back'),
      }}
    >
      <ListSelector
        data={HOTLINE_OPTIONS}
        defaultKey={DEFAULT_HOTLINE.phoneNumber}
        keyExtractor={(item) => item.phoneNumber}
        listHeaderComponent={
          <>
            <OnboardingTitle
              subtitle={t('select_hotline_subtitle')}
              title={t('select_hotline')}
            />
            <View style={{ alignItems: 'flex-end' }}>
              <HelpButton
                onPress={() => setModalVisible(true)}
                title={t('what_is_hotline')}
              />
            </View>
          </>
        }
        onChange={onListChange}
        selectedExtractor={({ item }) => item.phoneNumber}
        titleExtractor={({ item }) => item.name}
      />
      {/* Modal */}
      <CustomModal
        isVisible={modalVisible}
        primaryButton={{
          onPress: () => setModalVisible(false),
          title: t('got_it'),
        }}
      >
        <ModalContent
          subtitle={t('hotline_note')}
          title={t('what_is_hotline')}
        />
      </CustomModal>
    </OnboardingTemplate>
  );
};

HotlineScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default HotlineScreen;
