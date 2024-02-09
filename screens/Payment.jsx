import { View, Text, Pressable, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
//Styles
import Styles from '../components/Styles';
import { Entypo } from '@expo/vector-icons';
//Components
import BackBtn from '../components/BackBtn';
import CardPreview from '../components/CardDataPreview';
import CustomBtn from '../components/CustomBtn';


const Payment = () => {
    const navigation = useNavigation();
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardPressed = (cardIndex) => {
        setSelectedCard(cardIndex);
    };

    return (
        <View style={Styles.container}>
            {/* name and backBtn */}
            <Text style={{ ...Styles.sectionName, marginTop: 50 }}>PAYMENT</Text>
            <BackBtn style={{ top: '06%' }} onPress={() => navigation.goBack()} />

            {/* Payment Method*/}
            <View style={{ marginTop: 7, height: 200 }}>
                <ScrollView horizontal style={{ width: '100%', height: '10%' }} showsHorizontalScrollIndicator={false} >
                    {/* Add new card */}
                    <Pressable style={Styles.addCardView} onPress={() => navigation.navigate("PaymentCardDetail")}>
                        <Entypo name="plus" size={24} color="white" alignSelf='center' />
                    </Pressable>
                    {/* Cards */}
                    <CardPreview
                        backgroundImage={require('../images/cardbg.png')}
                        logoImage={require('../images/vcard.png')}
                        numberText='2048'
                        selected={selectedCard === 0}
                        onPress={() => handleCardPressed(0)} />

                    <CardPreview
                        backgroundImage={require('../images/mcbg.png')}
                        logoImage={require('../images/mcard.png')}
                        numberText='2071'
                        selected={selectedCard === 1}
                        onPress={() => handleCardPressed(1)} />
                </ScrollView>
            </View>

            {/* oderDetails */}
            <View>
                {/* orderDetailsTitle */}
                <View style={{ marginTop: 20 }}>
                    <Text style={{ ...Styles.text, marginLeft: 20, marginBottom: 10 }}>Order Details</Text>
                    <View style={{ borderTopColor: '#3A3A3C', borderTopWidth: 1, width: 350, marginHorizontal: 20 }} />
                </View>
                {/* trainer */}
                <View style={{ marginTop: 20 }}>
                    <Text style={{ marginLeft: 25, color: 'white', marginBottom: 10 }}>Trainer</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../images/trainer.jpg')} style={Styles.circleTrainerimage} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ ...Styles.text, marginLeft: 20, }}>Emily Kevin</Text>
                            <Text style={{ marginLeft: 20, color: '#D0FD3E' }}>High Intensity Training</Text>
                        </View>
                        {/* Puntuation */}
                        <View style={{ height: 22, width: 45, borderRadius: 5, backgroundColor: '#D0FD3E', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, fontWeight: '800' }}>4.9</Text>
                        </View>
                    </View>
                    <View style={{ width: 350, marginHorizontal: 20, marginTop: 20, borderTopColor: '#3A3A3C', borderTopWidth: 1 }} />
                </View>
                {/* date */}
                <View style={{ marginTop: 20 }}>
                    <Text style={{ marginLeft: 20, color: 'white', marginBottom: 10 }}>Date</Text>
                    <Text style={{ ...Styles.text, marginLeft: 20, }}>20 Octuber 2023 - Wednesday</Text>
                </View>
                {/* time */}
                <View style={{ marginTop: 10 }}>
                    <Text style={{ marginLeft: 20, color: 'white', marginBottom: 10 }}>Time</Text>
                    <Text style={{ ...Styles.text, marginLeft: 20, }}>09:30 AM</Text>
                    <View style={{ borderTopColor: '#3A3A3C', borderTopWidth: 1, width: 350, marginHorizontal: 20 }} />
                </View>
                {/* estimatedCost */}
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ marginLeft: 20, color: 'white' }}>Estimated Cost</Text>
                    <Text style={{ ...Styles.text, marginRight: 20 }}>$175.99</Text>
                </View>
                {/* sectionDivition */}
                <View style={{ width: 350, marginHorizontal: 20, marginTop: 10, borderTopColor: '#3A3A3C', borderTopWidth: 1 }} />

            </View>

            {/* customBtn */}
            <View style={{ marginTop: 40 }}>
                <CustomBtn title='Confirm' onPress={() => navigation.navigate("PaymentComplete")} />
            </View>
        </View>
    )
}

export default Payment