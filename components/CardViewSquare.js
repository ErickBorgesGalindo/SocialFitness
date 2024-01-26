import { StyleSheet, Pressable, Text, Image } from 'react-native'
import React from 'react'

const CardViewSquare = ({text, subtitle, ImageSource, onPress, isPremium}) => {
    return (
        <Pressable style={styles.cardView} onPress={onPress}>
            <Image style={styles.imgCardSq} source={ImageSource}/>
            <Text style={styles.imgTxt}>{text}</Text>
            <Text style={styles.imgTxtGreen}>| {subtitle} </Text>
            { isPremium && <Text style={styles.proTxt}>PRO</Text>}
        </Pressable>
    )
}

export default CardViewSquare

const styles = StyleSheet.create({
    cardView: {
        position: 'relative',
        overflow: 'hidden',
        marginTop: 20,
        marginLeft: 40,
    },

    imgCardSq: {
        width: 180,
        height: 205,
        borderRadius: 20,
        opacity: 0.65,
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
        left: '70%',
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