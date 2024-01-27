import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const RadioButton = ({onPress, isSelected, mainText, subText, priceText, topPosition, pricePosition}) => {
    return (
        <Pressable onPress={onPress} style={[isSelected ? styles.selecBox : styles.box, { top:topPosition }]}>
            <View style={[isSelected ? styles.selecRadioIcon : styles.radioIcon]} />
            <View style={[isSelected ? styles.selecRadioTxt : styles.radioTxt]}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: '700', }}>{mainText}</Text>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: '400', }}>{subText}</Text>
            </View>
            <Text 
            style={{ alignSelf: 'center', marginLeft: pricePosition, fontSize: 20, fontWeight: '700', color: 'white'}}>
              $ {priceText} 
              </Text>
            
        </Pressable>
    )
}

export default RadioButton

const styles = StyleSheet.create({
    box: {
        position: 'absolute',
        flexDirection: 'row',
        alignSelf: 'center',
        height: 80,
        width: 350,
        borderWidth: 1,
        borderColor: '#2C2C2E',
        borderRadius: 20,
        backgroundColor: '#2C2C2E',
        
      },
    
      radioIcon: {
        alignSelf: 'center',
        width: 25,
        height: 25,
        marginRight: 10,
        marginLeft: 20,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#3A3A3C',
      },
    
      radioTxt: {
        flexDirection: 'col',
        alignSelf: 'center',
    
      },
    
      selecBox: {
        position: 'absolute',
        flexDirection: 'row',
        top: '100%',
        alignSelf: 'center',
        height: 80,
        width: 350,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#D0FD3E',
        backgroundColor: 'rgba(208,253,62,.10)',
      },
    
      selecRadioIcon: {
        alignSelf: 'center',
        width: 25,
        height: 25,
        marginRight: 10,
        marginLeft: 20,
        borderRadius: 50,
        borderWidth: 8,
        borderColor: '#D0FD3E',
      },
    
      selecRadioTxt: {
        flexDirection: 'col',
        alignSelf: 'center',
    
      },
})