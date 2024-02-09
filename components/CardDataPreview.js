import { View, Text, ImageBackground, Pressable, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

const CardPreview = ({ backgroundImage, logoImage, numberText, selected, onPress }) => {
    return (
        <ImageBackground source={backgroundImage} style={styles.card}>
            <Pressable onPress={onPress}>
                <Image source={logoImage} style={styles.cardlogo} />
                <View style={styles.info}>
                    <Text style={styles.infoTxt}>●●●●</Text>
                    <Text style={styles.infoTxt}>{numberText}</Text>
                    {selected ?
                        <FontAwesome name="check-square" size={33} color="rgba(208,253,62,.9)" /> :
                        <FontAwesome name="check-square" size={33} color="rgba(255,255,255,0.4)" />
                    }
                </View>
            </Pressable>
        </ImageBackground>
    )
}

export default CardPreview

const styles = StyleSheet.create({
    card: {
        height: 130,
        width: 160,
        marginTop: 20,
        marginRight: 20,
    },

    cardlogo: {
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        height: 60,
        width: 60,
        marginRight: 10,
    },

    info: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 30
    },

    infoTxt: {
        fontWeight: 'bold',
        color: 'white',
    },

    selectedCard: {
        height: 30,
        width: 30,
        borderRadius: 7,
        backgroundColor: 'white'
    },

    disableCard: {
        height: 30,
        width: 30,
        borderRadius: 7,
        backgroundColor: 'rgba(255,255,255,0.4)'
    },

})