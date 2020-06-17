import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
    },
    titleContainer: {
        width: '100%',
        marginVertical: 15
    },
    subText: {
        fontSize: 10,
        textTransform: 'uppercase',
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    warningContainer: {
        borderWidth: 3,
        borderRadius: 5,
        borderColor: '#fb5600',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        marginVertical: 10,
        width: '100%'
    },
    warningTextContainer: {
        paddingLeft: 15,
        width: '85%',
    },
    warningTitleText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    warningSubText: {
        fontSize: 14
    },
    actionContainer: {
        alignSelf: 'flex-start',
        padding: 15,
        elevation: 2,
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 10,
        width: '100%'
    },
    actionTitleText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },
    unorderedActionContainer: {
        flexDirection: 'row',
        width: '95%'
    },
    actionBulletPoint: {
        fontSize: 5,
        color: '#fb5600',
        paddingRight: 8,
        paddingTop: 10
    },
    actionText: {
        fontSize: 16,
    },
    tipsTitleText: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 25,
    },
    tipsText: {
        fontSize: 18,
        paddingVertical: 10
    },
    tipsBulletPoint: {
        fontSize: 8,
        color: '#fb5600',
        paddingRight: 10,
        paddingTop: 16
    }
});