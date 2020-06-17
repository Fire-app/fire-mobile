import React from 'react';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles'

export const RightsTitle = ({ title }) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.subText}>Know Your Rights</Text>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    )
}

export const RightsWarning = ({ title, subtitle }) => {
    return (
        <View style={styles.warningContainer}>
            <MaterialCommunityIcons name="alert-circle-outline" color="#fb5600" size={40} />
            <View style={styles.warningTextContainer}>
                <Text style={styles.warningTitleText}>{title}</Text>
                <Text style={styles.warningSubText}>{subtitle}</Text>
            </View>
        </View>
    )
}

export const ActionBullets = ({ title, bullets }) => {
    const bulletsList = bullets.map(bullet => {
        return (
            <View style={styles.unorderedActionContainer} key={bullet}>
                <MaterialCommunityIcons name="circle" style={styles.actionBulletPoint} />
                <Text style={styles.actionText}>{bullet}</Text>
            </View>
        )
    })

    return (
        <View style={styles.actionContainer}>
            <Text style={styles.actionTitleText}>{title}</Text>
            {bulletsList}
        </View>
    )
}

export const ActionItems = ({ title, items }) => {
    const itemsList = items.map(item => {
        return (
            <Text style={styles.actionText} key={item}>{item}</Text>
        )
    })

    return (
        <View style={styles.actionContainer}>
            <Text style={styles.actionTitleText}>{title}</Text>
            {itemsList}
        </View>
    )
}

export const Tips = ({ tips }) => {
    const tipsList = tips.map(tip => {
        return (
            <View style={styles.unorderedActionContainer} key={tip}>
                <MaterialCommunityIcons name="circle" style={styles.tipsBulletPoint} />
                <Text style={styles.tipsText}>{tip}</Text>
            </View>
        )
    })

    return (
        <View>
            <Text style={styles.tipsTitleText} >Tips</Text>
            <View style={styles.actionContainer}>
                {tipsList}
            </View>
        </View>
    );
}