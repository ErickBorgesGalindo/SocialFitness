import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
//Styles
import Styles from '../components/Styles';
//Components
import GoalPicker from '../components/WheelPicker';
import CustomBtn from '../components/CustomBtn';
import BackBtn from '../components/BackBtn';



const UserGoal = () => {
    const navigation = useNavigation();
    const data = ['Gain Weight','Lose Weight','Get fitter','Gain more flexible','Gain more flexible','Learn the basic','',''];

    const handleValueChange = (value) => {
        console.log('Selected value:', value);
    };

    return (
        <View style={Styles.container}>
            {/* title */}
            <Text style={{ ...Styles.sectionName, marginTop: 60, justifyContent: 'center', fontSize: 25 }}>What's your goal?</Text>

            {/* textInfo */}
            <View style={{ width: '80%', marginTop: 10, alignSelf: 'center' }}>
                <Text style={{ ...Styles.text, fontSize: 12, textAlign: 'center', fontWeight: '600', textTransform: 'uppercase' }}>This help us create your personalized plan</Text>
            </View>

            {/* goalelector */}
            <View style={{ marginTop: '10%', alignSelf: 'center', top: '10%' }}>
                <GoalPicker items={data} typeUse={'text'} onIndexChange={handleValueChange} itemHeight={50} />
            </View>

            {/* customBtn, backBtn */}
            <View style={{ marginRight: 20, marginTop: '30%' }}>
                <BackBtn onPress={() => navigation.goBack()} />
                <CustomBtn title='Next' style={{ width: '30%', alignSelf: 'flex-end' }} onPress={() => navigation.navigate('ActivityLevel')} />
            </View>
        </View>
    )
}

export default UserGoal