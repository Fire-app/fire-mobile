import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { textStyles, colors } from '../styles';

const ListOption = ({ title, selected, onPress }) => (
  <TouchableOpacity
    style={[
      {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: colors.primaryLight,
        borderRadius: 3,
        marginVertical: 4,
        borderWidth: 3,
        borderColor: colors.primaryLight,
      },
      selected && {
        borderColor: colors.primary,
      },
    ]}
    onPress={onPress}
  >
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <Text style={textStyles.body1}>{title}</Text>
      </View>
      {selected && (
        <MaterialCommunityIcons
          name="check-circle"
          style={{
            fontSize: 20,
            color: colors.primary,
          }}
        />
      )}
    </View>
  </TouchableOpacity>
);

ListOption.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

const ListSelector = ({
  defaultKey,
  onChange,
  data,
  keyExtractor,
  selectedExtractor,
  titleExtractor,
}) => {
  const [selectedKey, setSelectedKey] = useState(defaultKey);

  const onPress = (item) => {
    setSelectedKey(selectedExtractor(item));
    onChange(item);
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => keyExtractor(item)}
        alwaysBounceVertical={false}
        data={data}
        extraData={{ selectedKey }}
        renderItem={(item) => (
          <ListOption
            title={titleExtractor(item)}
            selected={selectedExtractor(item) === selectedKey}
            onPress={() => onPress(item)}
          />
        )}
      />
    </View>
  );
};

ListSelector.propTypes = {
  defaultKey: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyExtractor: PropTypes.func.isRequired,
  selectedExtractor: PropTypes.func.isRequired,
  titleExtractor: PropTypes.func.isRequired,
};

export default ListSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 15,
  },
});
