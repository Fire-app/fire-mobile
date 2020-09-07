import { FlatList, Text, View } from 'react-native';
import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import { colors, textStyles } from '../styles';
import FireIcon, { ICON_NAMES } from './FireIcon';

const ListOption = ({ title, selected, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      {
        backgroundColor: colors.primaryLight,
        borderColor: colors.primaryLight,
        borderRadius: 3,
        borderWidth: 3,
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 15,
      },
      selected && {
        borderColor: colors.primary,
      },
    ]}
  >
    <View style={{ flexDirection: 'row' }}>
      <View style={{ alignItems: 'center', flex: 1, flexDirection: 'row' }}>
        <Text style={textStyles.body1}>{title}</Text>
      </View>
      {selected && (
        <FireIcon
          color={colors.primary}
          name={ICON_NAMES.CHECKMARK}
          size={24}
        />
      )}
    </View>
  </TouchableOpacity>
);

ListOption.propTypes = {
  onPress: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

const ListSelector = ({
  defaultKey,
  onChange,
  data,
  keyExtractor,
  selectedExtractor,
  titleExtractor,
  listHeaderComponent,
}) => {
  const [selectedKey, setSelectedKey] = useState(defaultKey);

  const onPress = (item) => {
    setSelectedKey(selectedExtractor(item));
    onChange(item);
  };

  return (
    <FlatList
      alwaysBounceVertical={false}
      data={data}
      extraData={{ selectedKey }}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      keyExtractor={(item) => keyExtractor(item)}
      ListHeaderComponent={listHeaderComponent}
      renderItem={(item) => (
        <ListOption
          onPress={() => onPress(item)}
          selected={selectedExtractor(item) === selectedKey}
          title={titleExtractor(item)}
        />
      )}
    />
  );
};

ListSelector.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultKey: PropTypes.string.isRequired,
  keyExtractor: PropTypes.func.isRequired,
  listHeaderComponent: PropTypes.node,
  onChange: PropTypes.func.isRequired,
  selectedExtractor: PropTypes.func.isRequired,
  titleExtractor: PropTypes.func.isRequired,
};

export default ListSelector;
