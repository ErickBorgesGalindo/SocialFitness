import { View, Text, Pressable,ImageBackground, Image} from 'react-native';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
//Styles
import { FontAwesome } from '@expo/vector-icons';
import Styles from '../components/Styles';
//Components
import MaskedInput from '../components/MaskedInput';
import BackBtn from '../components/BackBtn';
import CustomBtn from '../components/CustomBtn';


const PaymentCardDetail = () => {
    const navigation = useNavigation();
    const [textName, setTextName] = useState('');
    const [textNumber, setTextNumber] = useState('');
    const [textExpiry, setTextExpiry] = useState('');
    const [textCVC, setTextCVC] = useState('');
    const [isCardPresed, setIsCardPressed] = useState(false);


    const handleTextNameChange = (inputText) => {
        setTextName(inputText);
    };
    const handleTextNumberChange = (inputText) => {
        setTextNumber(inputText);
    };
    const handleTextExpiryChange = (inputText) => {
        setTextExpiry(inputText);
    };
    const handleTextCVCChange = (inputText) => {
        setTextCVC(inputText);
    };
    const handleCardPressed = () => {
        setIsCardPressed(!isCardPresed);
    };

    return (
        <View style={Styles.container}>
            {/* name and backBtn */}
            <Text style={{ ...Styles.sectionName, marginTop: 50 }}>ADD NEW CARD</Text>
            <BackBtn style={{ top: '06%' }} onPress={() => navigation.goBack()} />

            {/* cardImage */}
            <ImageBackground source={require('../images/newCard.png')} style={Styles.card}>
                <Pressable>
                    <Image source={require('../images/vcard.png')} style={Styles.cardLogo} />
                    <View style={Styles.cardInfo}>
                        <Text style={{ ...Styles.cardInfoTxt, fontWeight: '300' }}>{textName != '' ? textName : 'HOLDER NAME'}</Text>
                        <Text style={Styles.cardInfoTxt}>{textNumber != '' ? textNumber : '0000 0000 0000 0000'}</Text>
                    </View>
                </Pressable>
            </ImageBackground>

            {/* Input */}
            <View style={{ marginTop: 20, alignSelf:'center', width:'90%' }}>
                <MaskedInput
                    style={Styles.input}
                    value={textName}
                    onValueChange={handleTextNameChange}
                    placeholder='Card Holder Name'
                    placeholderTextColor='white'
                    mask='name'
                />
                <MaskedInput
                    style={Styles.input}
                    value={textNumber}
                    onValueChange={handleTextNumberChange}
                    placeholder='Card Number'
                    placeholderTextColor='white'
                    mask='creditCard'
                />
                <View style={{ flexDirection: 'row' }}>
                    <MaskedInput
                        style={Styles.inputExpires}
                        value={textExpiry}
                        onValueChange={handleTextExpiryChange}
                        placeholder='Expiry(MM/YY)'
                        placeholderTextColor='white'
                        mask='expiry'
                    />
                    <MaskedInput
                        style={Styles.inputExpires}
                        value={textCVC}
                        onValueChange={handleTextCVCChange}
                        placeholder='CVC'
                        placeholderTextColor='white'
                        mask='cvc'
                    />
                </View>
            </View>

            {/* defaultPayment */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Pressable onPress={handleCardPressed} style={{ marginLeft: 20 }}>
                    {isCardPresed ?
                        <FontAwesome name="check-square" size={33} color="rgba(208,253,62,.9)" /> :
                        <FontAwesome name="check-square" size={33} color="rgba(255,255,255,0.4)" />
                    }
                </Pressable>
                <Text style={{ marginLeft: 10, color: 'white', fontSize: 16 }}>Set as default payment card</Text>
            </View>

            {/* customBtn */}
            <View style={{ top: '15%' }}>
                <CustomBtn title='Done' onPress={() => navigation.goBack()} />
            </View>
        </View>
    )
}

export default PaymentCardDetail