import { StyleSheet, View, Text, Pressable } from 'react-native'
import React from 'react'
import { Foundation } from '@expo/vector-icons';

const Gender = ({onPress, gender, genderName, isSelected}) => {
    return (
        <View>
            <Pressable
                style={[styles.genderDisable, isSelected && styles.genderActive]}
                onPress={onPress}>
                <Foundation name={gender} size={48} color={isSelected ? '#2C2C2E' : 'white' } />
                <Text style={[styles.textDisable, isSelected && styles.textSelected]}>{genderName}</Text>
            </Pressable>
        </View>
    )
}

export default Gender

const styles = StyleSheet.create({
    genderDisable: {
        width: 140, 
        height: 140, 
        borderRadius: 80, 
        marginBottom: 40, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#2C2C2E'
    },

    genderActive: {
        width: 140, 
        height: 140, 
        borderRadius: 80, 
        marginBottom: 40, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#D0FD3E'
    },
    textDisable: {
        fontSize: 18,
        fontWeight: 500,
        color: '#fff'
    },
    textSelected: {
        fontSize: 18,
        fontWeight: 500,
        color: '#2C2C2E'
    },
    
})