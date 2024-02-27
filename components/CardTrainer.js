import { View, Text, Image, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import React from 'react'

const TrainerCard = (props, {onPress}) => {
    return (
        <View style={styles.flatCard}>
            <Image style={styles.flatCardImg} source={props.data.image} />
            <View style={{ flexDirection: 'column' }}>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.flatCardTxtMain}>{props.data.trainerName}</Text>
                    <View style={{ height: 15, width: 45, borderRadius: 5, backgroundColor: '#D0FD3E', alignItems: 'center', justifyContent: 'center', marginLeft: -20 }}>
                        <Text style={{ fontSize: 12, fontWeight: "600" }}>{props.data.score}</Text>
                    </View>
                </View>

                <Text style={styles.description}>{props.data.description}</Text>
                <Text style={styles.flatCardExperience}>{props.data.experience}</Text>
            </View>
            {props.data.showArrow === false ? null :
                <Entypo name="chevron-right" size={24} color="#fff" marginLeft={20} onPress={onPress} />
            }
        </View>
    )
}

export default TrainerCard

const styles = StyleSheet.create({

    flatCard: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 330,
        height: 100,
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: '#2C2C2E',
    },

    flatCardImg: {
        height: 60,
        width: 60,
        marginLeft: '4%',
        borderRadius: 60
    },

    flatCardTxtMain: {
        fontSize: 15,
        marginLeft: 20,
        fontWeight: '800',
        width: 150,
        color: '#fff',
    },

    description: {
        width: 150,
        marginLeft: 20,
        marginTop: 3,
        fontSize: 14,
        fontWeight: '400',
        color: '#fff',
    },

    flatCardExperience: {
        width: 150,
        marginLeft: 20,
        marginTop: 10,
        fontSize: 15,
        fontWeight: '600',
        color: '#D0FD3E',
    },
})
