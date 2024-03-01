import { Pressable, Text, StyleSheet, Platform } from 'react-native';
import React from 'react';

const Day = ({onPress, isSelected, primaryText, secondaryText}) => {

    return (
        <Pressable onPress={onPress} style={[styles.disableDay, isSelected && styles.selectedDay]}>
            <Text style={[styles.disablePrimaryText, isSelected && styles.selectedPrimaryText]}>{primaryText}</Text>
            <Text style={[styles.disableSecondaryText, isSelected && styles.selectedSecondaryText]}>{secondaryText}</Text>
        </Pressable>
    )
}

export default Day

const styles = StyleSheet.create({
    disableDay: {
        backgroundColor: '#3A3A3C',
        width: 60,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginRight:10
    },

    selectedDay: {
        backgroundColor: '#D0FD3E',
        width: 60,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginRight:10
    },

    disablePrimaryText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#fff',
        marginBottom: 5
    },

    selectedPrimaryText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2C2C2E',
        marginBottom: 5
    },

    disableSecondaryText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },

    selectedSecondaryText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2C2C2E',
    }
})