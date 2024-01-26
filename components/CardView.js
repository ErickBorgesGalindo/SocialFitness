import React from 'react'
import { Pressable, Image, Text, StyleSheet } from 'react-native'

const CardView = ({ text, subtitle, ImageSource, onPress, style, isPremium }) => {
    return (
        <Pressable style={[styles.cardView, style]} onPress={onPress}>
            <Image style={styles.imageCard} source={ImageSource} />
            <Text style={styles.imgTxt}>{text}</Text>
            <Text style={styles.imgTxtGreen}>| {subtitle}</Text>
            { isPremium && <Text style={styles.proTxt}>PRO</Text>}
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
        fontWeight: "600",
        color: '#fff',
    },

    imgTxtGreen: {
        position: 'absolute',
        top: '80%',
        left: '5%',
        fontSize: 15,
        fontWeight: "500",
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
        fontWeight: "bold",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#F6A800',
        color: '#F6A800'

    }
})

