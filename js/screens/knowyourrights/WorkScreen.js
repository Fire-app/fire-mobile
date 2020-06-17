import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import styles from '../styles'
import { RightsTitle, RightsWarning, ActionBullets, ActionItems, Tips } from './components'

export default Work = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <RightsTitle title="Agent Is At My Work" />
            <RightsWarning title="Present your rights card and remain silent." subtitle="You have the right to remain silent!" />
            <ActionBullets
                title="Tell the agent(s) if..."
                bullets={[
                    "children or elderly are present",
                    "you are on medication, nursing, or pregnant",
                    "you need to arrange care for someone",
                ]}
            />
            <ActionItems
                title="If the agent(s) don't have a signed warrant..."
                items={[
                    "Say, 'I deny consent to search my home'",
                ]}
            />
            <Tips
                tips={[
                    "Don't resist arrest.",
                    "Present your rights card.",
                    "Don't sign anything.",
                    "Don't lie.",
                ]}
            />
        </ScrollView>
    );
}