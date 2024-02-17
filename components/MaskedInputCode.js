
// import React, { useState } from 'react';
// import { View, StyleSheet, TextInput, Text } from 'react-native';

// const CodeInput = () => {
//     const [inputValue, setInputValue] = useState('');

//     const handleInputChange = (text, index) => {
//         // Eliminar caracteres no numéricos
//         const numericValue = text.replace(/[^0-9]/g, '');

//         // Tomar los primeros 6 caracteres
//         const formattedValue = numericValue.slice(0, 1);

//         setInputValue(formattedValue);
//     };


//     const renderNumberBoxes = () => {
//         const numberBoxes = [];

//         for (let i = 0; i < 6; i++) {
//             const digit = inputValue[i] || '*';

//             numberBoxes.push(
//                 <View key={i} style={styles.numberBox}>
//                     <TextInput
//                         style={styles.hiddenInput}
//                         keyboardType="numeric"
//                         value={inputValue}
//                         onChangeText={handleInputChange}
//                         maxLength={6}
//                     />
//                 </View>
//             );
//         }

//         return numberBoxes;
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.inputContainer}>
//                 {renderNumberBoxes()}
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     inputContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     numberBox: {
//         width: 40,
//         height: 40,
//         borderWidth: 1,
//         borderColor: 'gray',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginRight: 10,
//     },
//     numberText: {
//         fontSize: 20,
//     },
//     hiddenInput: {
//         position: 'absolute',
//         opacity: 1,
//         width: 40,
//         height: 40,
//         color:'white'

//     },
// });

// export default CodeInput;


import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'

const CodeInput = () => {
    return (
        <View style={styles.codeContainer}>
            {/* ViewTextInpu */}
            <View style={styles.codeBox}>
                <TextInput
                    style={styles.codeText}
                    keyboardType='number-pad'
                    maxLength={1} />
            </View>
            {/* ViewTextInpu */}
            <View style={styles.codeBox}>
                <TextInput
                    style={styles.codeText}
                    keyboardType='number-pad'
                    maxLength={1} />
            </View>
            {/* ViewTextInpu */}
            <View style={styles.codeBox}>
                <TextInput
                    style={styles.codeText}
                    keyboardType='number-pad'
                    maxLength={1} />
            </View>
            {/* ViewTextInpu */}
            <View style={styles.codeBox}>
                <TextInput
                    style={styles.codeText}
                    keyboardType='number-pad'
                    maxLength={1} />
            </View>
            {/* ViewTextInpu */}
            <View style={styles.codeBox}>
                <TextInput
                    style={styles.codeText}
                    keyboardType='number-pad'
                    maxLength={1} />
            </View>
            {/* ViewTextInpu */}
            <View style={styles.codeBox}>
                <TextInput
                    style={styles.codeText}
                    keyboardType='number-pad'
                    maxLength={1} />
            </View>
        </View>
    )
}

export default CodeInput

const styles = StyleSheet.create({
    codeContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },

    codeBox: {
        borderRadius: 5,
        borderColor: '#D0FD3E',
        borderWidth: 0.5,
    },

    codeText: {
        fontSize: 25,
        color: 'white',
        padding: 0,
        textAlign: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,
    }
})