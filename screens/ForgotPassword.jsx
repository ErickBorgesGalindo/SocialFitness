import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
//Styles
import Styles from '../components/Styles';
//Components
import BackBtn from '../components/BackBtn';
import MaskedInput from '../components/MaskedInput';
import CustomBtn from '../components/CustomBtn';

const ForgotPassword = () => {
    const navigation = useNavigation();
    const [mail, setMail] = useState('');
    return (
        <View style={Styles.container}>
            {/* title and BacBtn */}
            <Text style={{ ...Styles.sectionName, marginTop: 100 }}>Forgot Password?</Text>
            <BackBtn style={{ top: '06%' }} onPress={() => navigation.goBack()} />

            {/* infoView */}
            <View style={{ width: '70%', top: '03%', marginHorizontal: 30 }}>
                <Text style={{ ...Styles.text, fontWeight: '700', fontSize: 13, textTransform: 'uppercase' }}>Enter your information below or login with another account</Text>
            </View>

            {/* emailInput */}
            <View style={{top:'8%', alignSelf:'center', width:'90%'}}>
                <MaskedInput
                    style={Styles.input}
                    value={mail}
                    onValueChange={null}
                    placeholder='Email'
                    placeholderTextColor='white'
                    mask='email' />
            </View>

            {/* CustomBtn */}
            <View style={{ top:'20%'}}>
                <CustomBtn title='Send' onPress={() => navigation.navigate("Verification")}/>
            </View>
        </View>
    )
}

export default ForgotPassword