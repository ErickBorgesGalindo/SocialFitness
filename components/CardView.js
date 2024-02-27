import React from 'react'
import { Pressable, Image, Text, StyleSheet } from 'react-native'

const CardView = (props) => {
    return (
        <Pressable style={[styles.cardView]} onPress={props.onPress}>
            <Image style={styles.imageCard} source={props.data.image} />
            <Text style={styles.imgTxt}>{props.data.name}</Text>
            <Text style={styles.imgTxtGreen}>| {props.data.subtitle}</Text>
            { props.data.premium && <Text style={styles.proTxt}>PRO</Text>}
        </Pressable>
    )
}

export default CardView

const styles = StyleSheet.create({
    imageCard: {
        width: 327,
        height: 160,
        borderRadius: 20,
        opacity: 0.65,
    },

    cardView: {
        position: 'relative',
        overflow: 'hidden',
        marginTop: 20,
    },

    imgTxt: {
        position: 'absolute',
        top: '65%',
        left: '5%',
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },

    imgTxtGreen: {
        position: 'absolute',
        top: '80%',
        left: '5%',
        fontSize: 15,
        fontWeight: '500',
        color: '#D0FD3E',
    },
    proTxt: {
        position: 'absolute',
        top: '85%',
        left: '80%',
        textAlign: 'center',
        width: 50,
        height: 20,
        fontSize: 13,
        fontWeight: 'bold',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#F6A800',
        color: '#F6A800'

    }
})

