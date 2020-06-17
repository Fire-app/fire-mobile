import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles'

export default InsideHome = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.subText}>Know Your Rights</Text>
                    <Text style={styles.titleText}>Agent Inside My Home</Text>
                </View>
                <View style={styles.warningContainer}>
                    <MaterialCommunityIcons name="alert-circle-outline" color="#fb5600" size={40} />
                    <View style={styles.warningTextContainer}>
                        <Text style={styles.warningTitleText}>Present your rights card and remain silent.</Text>
                        <Text style={styles.warningSubText}>You have the right to remain silent!</Text>
                    </View>
                </View>
                <View style={styles.actionContainer}>
                    <Text style={styles.actionTitleText}>Tell the agent(s) if...</Text>
                    <View style={styles.unorderedActionContainer}>
                        <MaterialCommunityIcons name="circle" style={styles.actionBulletPoint} />
                        <Text style={styles.actionText}>children or elderly are present</Text>
                    </View>
                    <View style={styles.unorderedActionContainer}>
                        <MaterialCommunityIcons name="circle" style={styles.actionBulletPoint} />
                        <Text style={styles.actionText}>you are on medication, nursing, or pregnant</Text>
                    </View>
                    <View style={styles.unorderedActionContainer}>
                        <MaterialCommunityIcons name="circle" style={styles.actionBulletPoint} />
                        <Text style={styles.actionText}>you need to arrange care for someone</Text>
                    </View>
                </View>
                <View style={styles.actionContainer}>
                    <Text style={styles.actionTitleText}>If the agent(s) don't have a signed warrant...</Text>
                    <Text style={styles.actionText}>Say, "I deny consent to search my home"</Text>
                </View>
                <Text style={styles.tipsTitleText} >Tips</Text>
                <View style={styles.actionContainer}>
                    <View style={styles.unorderedActionContainer}>
                        <MaterialCommunityIcons name="circle" style={styles.tipsBulletPoint} />
                        <Text style={styles.tipsText}>Don't resist arrest.</Text>
                    </View>
                    <View style={styles.unorderedActionContainer}>
                        <MaterialCommunityIcons name="circle" style={styles.tipsBulletPoint} />
                        <Text style={styles.tipsText}>Present your rights card.</Text>
                    </View>
                    <View style={styles.unorderedActionContainer}>
                        <MaterialCommunityIcons name="circle" style={styles.tipsBulletPoint} />
                        <Text style={styles.tipsText}>Don't sign anything.</Text>
                    </View>
                    <View style={styles.unorderedActionContainer}>
                        <MaterialCommunityIcons name="circle" style={styles.tipsBulletPoint} />
                        <Text style={styles.tipsText}>Don't lie.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}