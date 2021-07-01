import React from 'react'
import { SectionList, Text, StyleSheet, View } from 'react-native';
import NotificationCard from '../../components/NotificationCard';
import colors from '../../styles/colors';
import PropTypes from 'prop-types';

// State is keeping track only of app stuff.
// All data that changes and needs to be saved is in the Redux store.

// State would only be used for seen and unseen notifications.
// The notification list would probably be tracked with Redux - All data is 
//      tracked with Redux.

// Redux store will keep track of the state the user last left the app from, 
// normal state cannot keep track of that!

// First do seen/unseen, then watch redux lecture.


// props.todayDate.getTime() works
// 
const millisecs = 3600000;

const renderItem = ({ item: { title, message, date } }) => (
    <NotificationCard date={date} description={message} title={title} />
  )

const NotificationList = ( props ) => {

    let dateKey = ""

    console.log(typeof props.notifications);

    const notificationSorter = 
        props.notifications.reduce((obj, notification) => {
            var dateDiff = ((props.todayDate - notification.date)/millisecs);
            console.log(dateDiff)
            if (dateDiff < 24) {    
                dateKey = "Today";
            } else if (dateDiff < 48) {
                dateKey = "Yesterday"
            } else if (dateDiff < 192) {
                dateKey = "Last Week"
            } else {
                dateKey = "A long, long time ago..."
            }
            
            return {
                ...obj,
                [dateKey]: [...(obj[dateKey] || []), notification],
            }
        }, {})


    // Gets each letter from the section above, and creates an obj
    // Very dumb sorting function, how can I improve it??
    const sections = Object.keys(notificationSorter).sort(function(a, b) {
        if (a == "Today") {
            return -1;
        } else if ( b == "Today") {
            return 1;
        } else if ( a == "Yesterday" ) {
            return -1;
        } else if ( b == "Yesterday" ) {
            return 1;
        } else if (a == "Last Week") {
            return -1;
        } else if (b == "Last Week") {
            return 1;
        } else if (a == "A long, long time ago...") {
            return -1;
        } else if (b == "A long, long time ago...") {
            return 1;
        }
    }).map(dateKey => ({
        title: dateKey,
        data: notificationSorter[dateKey],
    }))

    return (
        <SectionList
            contentContainerStyle={{ paddingVertical: 36 }}
            sections={sections}
            renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
            keyExtractor={(_, i) => `${i}`}
            renderItem={renderItem}
            style={styles.container}
        />
    );
};

NotificationList.propTypes = {
    notifications: PropTypes.array.isRequired,
}
  
const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.backgroundColor,
      flex: 1,
      paddingHorizontal: 24,
    },
    header: {
      color: "blue",
      fontSize: 25,
    }
});

export default NotificationList;