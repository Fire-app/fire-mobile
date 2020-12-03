import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import ListSelector from '../../components/ListSelector';
import setHotlineNameAction from '../../store/actions/setHotlineNameAction';
import setHotlineNumberAction from '../../store/actions/setHotlineNumberAction';

import { HOTLINE_OPTIONS } from '../../../data/hotlineOptions';
import { textStyles, colors } from '../../styles';

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
      <ListSelector
        data={HOTLINE_OPTIONS}
        defaultKey={savedNumber}
        keyExtractor={(item) => item.phoneNumber}
        listHeaderComponent={
          <>
            <Text
              style={[
                textStyles.h5,
                { alignSelf: 'flex-start', paddingBottom: 12 },
              ]}
            >
              {t('choose_hotline')}
            </Text>
          </>
        }
        onChange={onListChange}
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
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 30,
  },
});
