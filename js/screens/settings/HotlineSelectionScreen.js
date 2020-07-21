import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import setHotlineNumberAction from '../../store/actions/settings/setHotlineNumberAction';
import setHotlineNameAction from '../../store/actions/settings/setHotlineNameAction';
import ListSelector from '../../components/ListSelector';
import { SecondaryButton } from '../../components/Buttons';

import { textStyles, colors } from '../../styles';
import { HOTLINE_OPTIONS } from '../../../data/hotlineOptions';

const HotlineSelectionScreen = () => {
  const { t } = useTranslation();

  const savedNumber = useSelector((state) => state.settings.hotlineNumber);

  const dispatch = useDispatch();
  const onListChange = ({ item: { name, phoneNumber } }) => {
    dispatch(setHotlineNameAction(name));
    dispatch(setHotlineNumberAction(phoneNumber));
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingVertical: 15, flexDirection: 'row' }}>
        <View style={{ paddingRight: 5 }}>
          <MaterialCommunityIcons
            name="help-circle"
            size={20}
            color={colors.primary}
          />
        </View>
        <SecondaryButton
          title="Learn About Your Emergency Hotline"
          // TODO:
          onPress={() => {}}
        />
      </View>
      <Text style={[textStyles.h3, { alignSelf: 'flex-start' }]}>
        {t('choose_hotline')}
      </Text>
      <ListSelector
        defaultKey={savedNumber}
        onChange={onListChange}
        data={HOTLINE_OPTIONS}
        keyExtractor={(item) => item.phoneNumber}
        selectedExtractor={({ item }) => item.phoneNumber}
        titleExtractor={({ item }) => item.name}
      />
    </View>
  );
};

HotlineSelectionScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HotlineSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'space-between',
  },
});
