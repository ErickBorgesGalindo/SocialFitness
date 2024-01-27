import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react'

const TimeCaloriesView = ({time, cal}) => {
    return (
        <View style={styles.info}>
            <View style={styles.infobg}>
                <MaterialIcons name="play-circle-fill" size={24} color="white" marginRight={5} />
                <Text style={styles.txt}>{time}min</Text>
            </View>

            <View style={styles.infobg}>
                <MaterialIcons name="local-fire-department" size={24} color="white" marginRight={5} />
                <Text style={styles.txt}>{cal} cal</Text>
            </View>
        </View>
    )
}

export default TimeCaloriesView

const styles = StyleSheet.create({

    infobg: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 98,
        height: 30,
        marginRight: 20,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },

    info: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 30,
    },

    txt:{
        color:'#fff'
    }

})