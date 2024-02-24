import { View, Text, Pressable, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import Styles from './Styles';
import React from 'react'

const CardOptions = ({ optionName, onPress, signOut }) => {
    return (
        <View>
            {signOut ?
                <Pressable style={styles.flatCard} onPress={onPress}>
                    <View style={{ width: '100%' }}>
                        <Text style={Styles.textOut}> {optionName} </Text>
                    </View>
                </Pressable>

                :
                <View style={styles.flatCard}>
                    <View style={{ width: '90%' }}>
                        <Text style={Styles.text}> {optionName} </Text>
                    </View>
                    <View style={{ width: '20%', alignItems: 'flex-end' }}>
                        <Entypo name="chevron-right" size={24} color="#fff" onPress={onPress} />
                    </View>
                </View>
            }
        </View>
        
    )
}

export default CardOptions

const styles = StyleSheet.create({

    flatCard: {
        flexDirection: 'row',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderTopColor: '#2C2C2E',
        borderBottomColor: '#2C2C2E',
        width: '85%',
        padding: 20,
    },

    flatText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#fff',
    },

})