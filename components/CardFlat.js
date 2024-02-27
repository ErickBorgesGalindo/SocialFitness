import { View, Text, Image, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import React from 'react'

const FlatCard = (props) => {
    return (
        <View style={styles.flatCard}>
            <Image style={styles.flatCardImg} source={props.data.image} />
            <Text style={styles.flatCardTxtMain}>{props.data.name}</Text>
            <Entypo name="chevron-right" size={24} color="#fff" marginTop={30} marginLeft={15} onPress={props.onPress} />
            <Text style={styles.flatCardTime}>{props.data.time}</Text>
        </View>
    )
}

export default FlatCard

const styles = StyleSheet.create({

    flatCard: {
        flexDirection: 'row',
        width: 330,
        height: 80,
        marginTop: 20,
        marginLeft: 30,
        borderRadius: 20,
        backgroundColor: '#2C2C2E',
    },

    flatCardImg: {
        height: 80,
        width: 100,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 5
    },

    flatCardTxtMain: {
        fontSize: 15,
        marginLeft: 20,
        marginTop: 10,
        fontWeight: '600',
        width: 150,
        color: '#fff',
    },

    flatCardTime: {
        position: 'absolute',
        top: '55%',
        left: '30%',
        width: 150,
        marginLeft: 20,
        marginTop: 10,
        fontSize: 15,
        fontWeight: '600',
        color: '#D0FD3E',
    },
})
