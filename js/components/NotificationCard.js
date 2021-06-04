import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import TimeAgo from 'react-native-timeago';
import { colors } from '../styles';
import textStyles from '../styles/textStyles';

export default function NotificationCard({ title, description, date }) {
  const [tempTitle, setTitle] = useState(title);
  const [tempDescription, setDescription] = useState(description);

  return (
    <View
      style={{
        backgroundColor: colors.backgroundColor,
        justifyContent: 'flex-start',
        padding: 12,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Text style={textStyles.h2}> {title} </Text>
      </View>
      {description && (
        <Text style={[textStyles.body2, { paddingTop: 4 }]}>{description}</Text>
      )}
      <Text style={[textStyles.notificationTime, { paddingTop: 4 }]}>
        <TimeAgo interval={20000} time={date} />
      </Text>
      {console.log(tempDescription)}
      <Button
        onPress={() => {
          {
            Toast.show({
              text1: { tempTitle },
              text2: { tempDescription },
              type: 'info',
            });
          }
        }}
        title="Toast Test"
      />
      {console.log(tempDescription)}
    </View>
  );
}

NotificationCard.propTypes = {
  date: PropTypes.isRequired,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};

NotificationCard.defaultProps = {
  smallMode: false,
};

/* 
    <Button
        onPress={() => {
          Toast.show({
            text1: { tempTitle },
            text2: { tempDescription },
          });
        }}
        title="hello"
      />
*/
