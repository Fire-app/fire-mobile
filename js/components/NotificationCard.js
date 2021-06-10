import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import TimeAgo from 'react-native-timeago';
import { colors } from '../styles';
import textStyles from '../styles/textStyles';

export default function NotificationCard({ title, description, date }) {
  /*  These might be used once backend is implemented
   *
   *  const [tempTitle, setTitle] = useState(title);
   *  const [tempDescription, setDescription] = useState(description);
   *  const [tempDate, setDate] = useState(date);
   */

  return (
    <View
      style={{
        backgroundColor: colors.backgroundColor,
        justifyContent: 'flex-start',
        padding: 12,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Text style={textStyles.h5}> {title} </Text>
      </View>
      {description && (
        <Text style={[textStyles.body2, { paddingLeft: 4, paddingTop: 4 }]}>
          {description}
        </Text>
      )}
      <Text style={[textStyles.body1, { paddingLeft: 4, paddingTop: 4 }]}>
        <TimeAgo interval={20000} time={date} />
      </Text>
    </View>
  );
}

NotificationCard.propTypes = {
  date: PropTypes.isRequired,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};
