import React from 'react';
import { SectionList, Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import NotificationCard from '../NotificationCard';
import colors from '../../styles/colors';

// State is keeping track only of app stuff.
// All data that changes and needs to be saved is in the Redux store.

// State would only be used for seen and unseen notifications.
// The notification list would probably be tracked with Redux - All data is
//      tracked with Redux.

// Redux store will keep track of the state the user last left the app from,
// normal state cannot keep track of that!

// First do seen/unseen, then watch redux lecture.

// moment.locale sets the local the user is in.
const moment = require('moment');

moment.locale();

const renderItem = ({ item: { title, message, date, type } }) => (
  <NotificationCard date={date} description={message} title={title} type={type} />
);

const NotificationList = (props) => {
  return (
    <SectionList
      contentContainerStyle={{ paddingVertical: 36 }}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      keyExtractor={(_, i) => `${i}`}
      renderItem={renderItem}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
      sections={props.sections}
      style={styles.container}
    />
  );
};

NotificationList.propTypes = {
  sections: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    color: '#E96316',
    fontSize: 25,
  },
});

export default NotificationList;
