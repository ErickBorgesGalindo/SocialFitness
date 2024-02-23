import { View, Text, Pressable } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';
//Styles
import Styles from '../components/Styles';
//Components
import BackBtn from '../components/BackBtn';
import RadioButton from '../components/CustomRadioBtn';

const Notifications = () => {

    const [isRemindersPressed, setIsRemindersPressed] = useState(true);
    const [isProgramPressed, setIsProgramPressed] = useState(false);
    const navigation = useNavigation();

    const handleRemindersPress = () => {
        setIsRemindersPressed(!isRemindersPressed);
        console.log('Apachurraste Reminders');
    };

    const handleProgramPress = () => {
        setIsProgramPressed(!isProgramPressed);
        console.log('apachurraste Program');
    };

  return (
    <View style={Styles.container}>
    {/* Header */}
    <Text style={{ ...Styles.sectionName, marginTop: 45 }}>Notifications</Text>
    <BackBtn style={{ top: '05%' }} onPress={() => navigation.goBack()} />

    {/* options */}
    <View style={{top:'10%'}}>
        <RadioButton
            onPress={handleRemindersPress}
            isSelected={isRemindersPressed}
            mainText='Workout Reminders'
            subText='Reminders from your workouts'
            topPosition='80%'
            pricePosition={15} />
    </View>
    <View style={{top:'25%'}}>
        <RadioButton
            onPress={handleProgramPress}
            isSelected={isProgramPressed}
            mainText='Program Notifications'
            subText='Scheduled notifications'
            topPosition='95%'
            pricePosition={70} />
    </View>

    <View style={{top:'75%', alignSelf:'center', width:'80%'}}>
        <Text style={{...Styles.textSmall,textAlign:'center'}}>
            You can manage your app notification permission in your 
        </Text>
            <Pressable onPress={()=> {Linking.openSettings()}}>
                <Text style={{...Styles.textColor,textAlign:'center'}}>Phone Settings</Text>
            </Pressable>
    </View>
      
    </View>
  )
}

export default Notifications