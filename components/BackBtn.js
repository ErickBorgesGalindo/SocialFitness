import { Pressable, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'

const BackBtn = ({onPress, style}) => {
    return (
        <Pressable style={[styles.backContainer, style]} onPress={onPress}>
            <AntDesign name="left" style={{ color: '#fff', fontSize: 24 }} />
        </Pressable>
    )
}

export default BackBtn

const styles = StyleSheet.create({
    backContainer: {
        position: 'absolute',
        left: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
})