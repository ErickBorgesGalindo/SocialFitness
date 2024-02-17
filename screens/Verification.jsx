import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
//Styles
import Styles from '../components/Styles';
//Components
import BackBtn from '../components/BackBtn';
import CodeInput from '../components/MaskedInputCode';
import CustomBtn from '../components/CustomBtn';

const Verification = () => {
    const navigation = useNavigation();
    const [code, setCode] = useState('');

    return (
        <View style={Styles.container}>
            {/* title and BacBtn */}
            <Text style={{ ...Styles.sectionName, marginTop: 100, alignSelf: 'flex-start', marginHorizontal: 30 }}>Verification</Text>
            <BackBtn style={{ top: '06%' }} onPress={() => navigation.goBack()} />

            {/* infoView */}
            <View style={{ width: '70%', top: '03%', marginHorizontal: 30 }}>
                <Text style={{ ...Styles.text, fontWeight: '700', fontSize: 13, textTransform: 'uppercase' }}>Check your email. We've sent you the pin at your email.</Text>
            </View>

            {/* inputCode */}
            <View style={{ top: '15%' }}>
                <CodeInput />
            </View>

            {/* resendCode */}
            <View style={{ top: '25%', alignSelf: 'center' }}>
                <Pressable onPress={() => console.log('Pachurrao Resend')}>
                    <Text style={Styles.textColor}>Did you receive any code?</Text>
                </Pressable>
            </View>

            {/* CustomBtn */}
            <View style={{ top: '30%' }}>
                <CustomBtn title='Verify' onPress={() => console.log('Apachurrao Verify')} />
            </View>

        </View>
    )
}

export default Verification