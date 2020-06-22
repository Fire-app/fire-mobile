import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { textStyles, colors } from '../../styles';
import i18n, { resources } from '../../config/i18n';

const LANGUAGE_OPTIONS = Object.keys(resources).map((locale) => ({
  locale,
  name: resources[locale].name,
}));

const LanguageOption = ({ title, selected, onPress }) => (
  <TouchableOpacity
    style={[
      {
        paddingVertical: 16,
        paddingHorizontal: 18,
        backgroundColor: colors.primaryLighter,
        borderRadius: 3,
        marginVertical: 4,
      },
      selected && {
        borderWidth: 3,
        borderColor: colors.primary,
      },
    ]}
    onPress={onPress}
  >
    <Text style={textStyles.body1}>{title}</Text>
  </TouchableOpacity>
);

LanguageOption.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

const LanguageScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);
  return (
    <View style={styles.container}>
      <Text style={[textStyles.h3, { paddingBottom: 8 }]}>
        {t('choose_language')}
      </Text>
      <FlatList
        keyExtractor={({ locale }, i) => `${locale}:${i}`}
        alwaysBounceVertical={false}
        data={LANGUAGE_OPTIONS}
        extraData={{ selectedLanguage }}
        renderItem={({ item: { locale, name } }) => (
          <LanguageOption
            title={name}
            selected={locale === selectedLanguage}
            onPress={() => setSelectedLanguage(locale)}
          />
        )}
      />
    </View>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24,
  },
});
