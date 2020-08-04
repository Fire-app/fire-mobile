import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { textStyles, colors } from '../../../styles';

// eslint-disable-next-line no-unused-vars
export default function Service({ name, isFree }) {
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
          {name}
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
  isFree: PropTypes.bool, // not currently being used
};

const styles = StyleSheet.create({
  serviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 1,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 4, // this interferes with padding of OrgSocials in OrgPageTemplate, leaving bc design is WIP
    borderColor: colors.charcoalGrey,
    backgroundColor: colors.white,
  },
  freeContainer: {
    backgroundColor: colors.primaryLighter,
    alignSelf: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
});
