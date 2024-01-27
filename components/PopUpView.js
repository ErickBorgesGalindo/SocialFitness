import { View, Text, StyleSheet, Button, Image, Pressable } from 'react-native'
import CustomBtn from './CustomBtn'
import React from 'react'

const PopUpView = ({btnTitle, onPress, cancelOnPress, popUpTitle,popUpSubtitle, ImageSource}) => {
    return (
        <View style={styles.popupcontainer}>
            <View style={styles.popup}>
                <Image style={styles.popImage} source={ImageSource}/>
                <Text style={styles.popTxt}>{popUpTitle}</Text>
                <Text style={styles.popTxtGreen}>{popUpSubtitle}</Text>

                <View style={{ top: '70%'}}>
                    <CustomBtn 
                        title={btnTitle}
                        onPress={onPress}
                        style={{top:'83%'}}/>
                </View>

                <Pressable style={{ top: '88%', left: '0%'}} onPress={cancelOnPress}>
                    <Text style={{width:'100%', color:'white', textAlign:'center', fontWeight:"400", fontSize:17,}}>Cancel</Text>
                </Pressable>


            </View>
        </View>
    )
}

export default PopUpView

const styles = StyleSheet.create({

    popupcontainer: {
        position: 'absolute',
        justifyContent: 'center',
        height: '400%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
    },

    popup: {
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
        top:'20%',
        height: 400,
        width: 350,
        borderRadius: 30,
        backgroundColor: '#2C2C2E'
    },

    popImage: {
        position: 'absolute',
        height: 250,
        width: 350,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        opacity: 0.65,
    },

    popTxt: {
        position: 'absolute',
        top: '48%',
        left: '5%',
        fontSize: 20,
        fontWeight: "600",
        color: '#fff',
    },

    popTxtGreen: {
        position: 'absolute',
        top: '55%',
        left: '5%',
        fontSize: 15,
        fontWeight: "500",
        color: '#D0FD3E',
    },

})