import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import { textStyles, colors } from '../../styles';
import ListSelector from '../../components/ListSelector';
import i18n, { getLanguageOptions, changeLanguage } from '../../config/i18n';

const SettingsLanguageScreen = () => {
  const { t } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const onLanguageChange = ({ item }) => {
    setSelectedLanguage(item.locale);
  };

  return (
    <View style={styles.container}>
      <View style={styles.languageList}>
        <ListSelector
          contentContainerStyle={{
            padding: 20,
            paddingTop: 0, // let the title determine it
          }}
          data={getLanguageOptions()}
          defaultKey={i18n.language}
          keyExtractor={({ locale }, i) => `${locale}:${i}`}
          listHeaderComponent={
            <Text
              style={[
                textStyles.h5,
                { alignSelf: 'flex-start', paddingBottom: 12, paddingTop: 20 },
              ]}
            >
              {t('choose_language')}
            </Text>
          }
          onChange={onLanguageChange}
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
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
  },
  languageList: {
    flex: 1,
    flexDirection: 'row',
  },
});
