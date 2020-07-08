import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { textStyles } from '../../styles';
import LanguageList from '../../components/LanguageList';

const LanguageScreen = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={[textStyles.h3, { alignSelf: 'flex-start' }]}>
        {t('choose_language')}
      </Text>
      <View style={styles.languageList}>
        <LanguageList />
      </View>
    </View>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  languageList: {
    flex: 1,
    width: '100%',
  },
});
