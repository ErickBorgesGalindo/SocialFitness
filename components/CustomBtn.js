// import { View, Button, StyleSheet } from 'react-native'
// import React from 'react'

// const CustomBtn = ({title, onPress, style}) => {
//     return (
//         <View style={[styles.button, style]}>
//             <Button title={title} color='black'  onPress={onPress} />
//         </View>
//     )
// }

// export default CustomBtn

// const styles = StyleSheet.create({
//     button: {
//         position: 'absolute',
//         justifyContent: 'center',
//         alignSelf: 'center',
//         width: 200,
//         height: 45,
//         borderRadius: 20,
//         backgroundColor: '#D0FD3E',
//     },
// })

import { View, Button, StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const CustomBtn = ({title, onPress, style}) => {
    return (
        <Pressable style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.texStyle]}>{title}</Text>
        </Pressable>
    )
}

export default CustomBtn

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 200,
        height: 45,
        borderRadius: 20,
        backgroundColor: '#D0FD3E',
    },
    texStyle:{
        width:'100%',
        color:'black',
        textAlign:'center', 
        fontWeight:"400",
        fontSize:18,
    }
})