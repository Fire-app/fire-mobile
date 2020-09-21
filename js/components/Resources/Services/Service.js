import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { colors, textStyles } from '../../../styles';

export default function Service({ name }) {
  const { t } = useTranslation();

  return (
    <View style={styles.serviceContainer}>
      <View style={{ flex: 1, paddingRight: 8 }}>
        <Text
          style={[
            textStyles.body1,
            colors.charcoalGrey,
            { paddingVertical: 10 },
          ]}
        >
          {t(name)}
        </Text>
      </View>
      <View style={styles.freeContainer}>
        <Text
          style={[
            textStyles.freeLabel,
            colors.charcoalGrey,
            { padding: 1, textAlign: 'center' },
          ]}
        >
          {'FREE'}
        </Text>
      </View>
    </View>
  );
}

Service.propTypes = {
  name: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  freeContainer: {
    alignSelf: 'center',
    backgroundColor: colors.primaryLighter,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  serviceContainer: {
    backgroundColor: colors.white,
    borderColor: colors.charcoalGrey,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // TODO: this interferes with padding of OrgSocials in OrgPageTemplate, leaving bc design is WIP
    marginVertical: 4,
    padding: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
