import { Text, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
//Styles
import { FontAwesome } from '@expo/vector-icons';
import Styles from '../components/Styles';
import CustomBtn from '../components/CustomBtn';
//Components

const PaymentComplete = () => {
    const navigation = useNavigation();

    return (
        <View style={Styles.completeContainer}>
            <View style={{ flexDirection: 'row', width: 300 }}>
                <FontAwesome name="check-square" size={33} color="rgba(208,253,62,.9)" />
                <Text style={Styles.textPopUp}>PaymentCompleted</Text>
            </View>

            <View style={{ marginTop: 10, width: 300 }}>
                <Text style={Styles.text}>You've book a new appoinment with your trainer.</Text>
            </View>

            {/* Pop Up */}
            <View style={Styles.popUpView}>
                {/* Traine */}
                <View style={{ marginTop: 20 }}>
                    <Text style={{ marginLeft: 25, color: 'white', marginBottom: 10 }}>Trainer</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../images/trainer.jpg')} style={Styles.circleTrainerimage} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ ...Styles.text, marginLeft: 7, }}>Emily Kevin</Text>
                            <Text style={{ marginLeft: 7, color: '#D0FD3E' }}>High Intensity Training</Text>
                        </View>

                        {/* Puntuation */}
                        <View style={{ height: 15, width: 45, borderRadius: 5, backgroundColor: '#D0FD3E', alignItems: 'center', justifyContent: 'center', marginLeft: -45 }}>
                            <Text style={{ fontSize: 12, fontWeight: '800' }}>4.9</Text>
                        </View>
                    </View>
                    <View style={{ width: 300, marginTop: 20, borderTopColor: '#3A3A3C', borderTopWidth: 1 }} />
                </View>
                {/* Date */}
                <View style={{ marginTop: 20 }}>
                    <Text style={{ marginLeft: 20, color: 'white', marginBottom: 10 }}>Date</Text>
                    <Text style={{ ...Styles.text, marginLeft: 20, }}>20 Octuber 2023 - Wednesday</Text>
                </View>
                {/* Time */}
                <View style={{ marginTop: 10 }}>
                    <Text style={{ marginLeft: 20, color: 'white', marginBottom: 10 }}>Time</Text>
                    <Text style={{ ...Styles.text, marginLeft: 20, }}>09:30 AM</Text>
                </View>
            </View>

            <View style={{top:'10%'}}>
                <CustomBtn title='Done' color='black' onPress={() => navigation.navigate('Home')} />
            </View>
        </View>
    )
}

export default PaymentComplete