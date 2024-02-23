import { View, Image, Text, StyleSheet, Platform } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
//Components
import BackBtn from '../components/BackBtn';
import RadioButton from '../components/CustomRadioBtn';
import CustomBtn from '../components/CustomBtn';


const SubscriptionType = () => {
    const [isMonthlyPressed, setIsMonthlyPressed] = useState(true);
    const [isYearlyPressed, setIsYearlyPressed] = useState(false);
    const navigation = useNavigation();

    const handleMontlyPress = () => {
        setIsMonthlyPressed(true);
        setIsYearlyPressed(false);
        console.log('Apachurraste mes');
    };

    const handleYearlyPress = () => {
        setIsMonthlyPressed(false);
        setIsYearlyPressed(true);
        console.log('apachurraste year');
    };

    return (
        <View >
            {/* topImage and backBtn */}
            <Image style={styles.Img} source={require('../images/bepremium.jpg')} />
            <BackBtn style={{top:'10%'}} onPress={() => navigation.goBack()} />

            {/* textView */}
            <View style={styles.TxtView}>
                <Text style={{ color: 'white', fontSize: 35, fontWeight: '900' }}>BE PREMIUM </Text>
                <Text style={{ color: 'white', fontSize: 30, fontWeight: '700', marginTop: 10 }}>GET UNLIMITED ACCESS </Text>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: '300', marginTop: 30 }}>When you subscribe, you'll get instant unlimited access</Text>
            </View>

            {/* container */}
            <View style={styles.ViewContainer} />

            {/* radioButton */}
            <RadioButton
                onPress={handleMontlyPress}
                isSelected={isMonthlyPressed}
                mainText='Montly'
                subText='Pay monthly, cancel any time'
                priceText='$ 19.99 /m'
                topPosition='80%'
                pricePosition={15} />
            <RadioButton
                onPress={handleYearlyPress}
                isSelected={isYearlyPressed}
                mainText='Yearly'
                subText='Pay for a full year'
                priceText='$ 129.99 /y'
                topPosition='95%'
                pricePosition={70} />

            {/* customButton */}
            <View style={{ top: '34%' }}>
                <CustomBtn
                    title='Subscribe Now'
                    onPress={() => navigation.navigate('FitnessTrainers')} />
            </View>
        </View>
    )
}

export default SubscriptionType

const styles = StyleSheet.create({
    Img: {
      width: "100%",
      height: "80%",
    },

    TxtView: {
        position: 'absolute',
        top: '30%',
        marginHorizontal:'05%'
      },
  
    ViewContainer: {
      position: 'absolute',
      top: Platform.OS === 'ios' ? '69%': '55%',
      width: Platform.OS === 'ios' ? '100%': '400%',
      height: 600,
      backgroundColor: '#1C1C1E',
      transform: Platform.OS === 'ios' ? [{ skewY: '-10deg' }] : [{ skewY: '-010deg' }]
    },
  
    
  
    button: {
      position: 'absolute',
      justifyContent: 'center',
      alignSelf: 'center',
      top: '140%',
      width: 200,
      height: 45,
      borderRadius: 20,
      backgroundColor: '#D0FD3E',
    },
  
  
  })