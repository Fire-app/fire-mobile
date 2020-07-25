import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { textStyles } from '../../styles';
import ListSelector from '../../components/ListSelector';
import i18n, { getLanguageOptions } from '../../config/i18n';

const SettingsLanguageScreen = () => {
  const { t } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const onLanguageChange = ({ item }) => {
    setSelectedLanguage(item.locale);
  };

  return (
    <View style={styles.container}>
      <Text style={[textStyles.settingsText, { alignSelf: 'flex-start' }]}>
        {t('choose_language')}
      </Text>
      <View style={styles.languageList}>
        <ListSelector
          defaultKey={i18n.language}
          onChange={onLanguageChange}
          data={getLanguageOptions()}
          keyExtractor={({ locale }, i) => `${locale}:${i}`}
          selectedExtractor={({ item }) => item.locale}
          titleExtractor={({ item }) => item.name}
        />
      </View>
    </View>
  );
};

export default SettingsLanguageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  languageList: {
    flex: 1,
    flexDirection: 'row',
  },
});
