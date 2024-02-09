import {View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker';
//Styles
import Styles from '../components/Styles';
import { AntDesign } from '@expo/vector-icons';
//Components
import BackBtn from '../components/BackBtn';
import TrainerCard from '../components/CardTrainer';
import CustomBtn from '../components/CustomBtn';
import TimeBtn from '../components/CustomTimeBtn';


const TrainerAppoinment = () => {
    const navigation = useNavigation();
    const [selectedBtn, setSelectedBtn] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const onDateChange = (date) => {
        setSelectedDate(date);
        console.log(selectedDate)
    };

    const handleBtnPress = (btnIndex) => {
        setSelectedBtn(btnIndex);
    };

    return (
        <View style={Styles.container}>
            {/* title and BacBtn */}
            <Text style={{ ...Styles.sectionName, marginTop: 50 }}>Appointment</Text>
            <BackBtn style={{ top: '06%' }} onPress={() => navigation.goBack()} />

            {/* trainerCard */}
            <View style={{ justifyContent: 'center', marginTop: 10, alignItems: 'center' }}>
                <TrainerCard
                    trainerName='Emily Kevin'
                    experience={'2 years experience'}
                    ImageSource={require('../images/trainer.jpg')}
                    onPress={() => console.log('Papoi')}
                    description={'High Intensity Training'}
                    score={'4.9'}
                    showArrow={false} />
            </View>

            {/* calendar */}
            <View style={{ backgroundColor: '#2C2C2E', borderRadius: 20, marginTop: 20, padding: 20, width: '95%', alignSelf: 'center' }}>
                <CalendarPicker
                    backgroundColor="red"
                    textStyle={{ color: '#FFF', fontSize: 15 }}
                    selectedDayStyle={{ backgroundColor: '#D0FD3E' }}
                    previousTitle={<AntDesign name="left" size={20} color="white" />}
                    previousTitleStyle={styles.CalendarStyle}
                    nextTitle={<AntDesign name="right" size={20} color="white" />}
                    nextTitleStyle={styles.CalendarStyle}
                    monthTitleStyle={styles.CalendarTitle}
                    yearTitleStyle={styles.CalendarTitle}
                    onDateChange={onDateChange}
                />

                <View style={{ width: '100%', borderWidth: 1, marginTop: 20, borderTopColor: 'rgba(255,255,255,0.4)' }} />
                {/* timeBtn*/}
                <View style={{ marginTop: 20 }}>
                    <Text style={Styles.text}>Time</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0 }}>
                        <TimeBtn
                            title="09:00 AM"
                            onPress={() => handleBtnPress(1)}
                            selected={selectedBtn === 1}
                        />
                        <TimeBtn
                            title="09:30 AM"
                            onPress={() => handleBtnPress(2)}
                            selected={selectedBtn === 2}
                        />
                        <TimeBtn
                            title="10:00 AM"
                            onPress={() => handleBtnPress(3)}
                            selected={selectedBtn === 3}
                        />
                        <TimeBtn
                            title="10:30 AM"
                            onPress={() => handleBtnPress(4)}
                            selected={selectedBtn === 4}
                        />
                        <TimeBtn
                            title="11:00 AM"
                            onPress={() => handleBtnPress(5)}
                            selected={selectedBtn === 5}
                        />
                    </ScrollView>
                </View>
            </View>

            {/* customBtn*/}
            <View style={{ marginTop: 23 }}>
                <CustomBtn title={'Next'} onPress={() => navigation.navigate('Payment')} />
            </View>
        </View>
    )
}

export default TrainerAppoinment

const styles = StyleSheet.create({
    CalendarStyle: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        height: 30,
        width: 30,
        borderRadius: 15,
        overflow: 'hidden',
        textAlign: 'center',
        alignItems: 'center', // Alinea verticalmente el contenido al centro
        padding: 5
    },
    
    CalendarTitle:{
        fontSize: 25, 
        fontWeight: '600'
    }
  })