import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
//Styles
import Styles from '../components/Styles';
//Components
import CustomBtn from '../components/CustomBtn';
import BackBtn from '../components/BackBtn';
import WheelPicker from '../components/WheelPicker';


const UserAge = () => {
    const navigation = useNavigation();
    const data = Array.from({ length: 100 }, (_, i) => i + 1);

    const handleValueChange = (value) => {
        console.log('Selected value:', value);
    };
    return (
        <View style={Styles.container}>
            {/* title */}
            <Text style={{ ...Styles.sectionName, marginTop: 60, justifyContent: 'center', fontSize: 25 }}>How old are you?</Text>

            {/* textInfo */}
            <View style={{ width: '80%', marginTop: 10, alignSelf: 'center' }}>
                <Text style={{ ...Styles.text, fontSize: 13, textAlign: 'center', fontWeight: '600', textTransform: 'uppercase' }}>This helps us create your personalized plan</Text>
            </View>

            {/* ageSelector */}
            <View style={{ marginTop: '10%', alignSelf: 'center', top: '10%' }}>
                <WheelPicker items={data}  onIndexChange={handleValueChange} itemHeight={50} />
            </View>

            {/* customBtn, backBtn */}
            <View style={{ marginRight: 20, marginTop: '30%' }}>
                <BackBtn onPress={() => navigation.goBack()} />
                <CustomBtn title='Next' style={{ width: '30%', alignSelf: 'flex-end' }} onPress={() => navigation.navigate('Weight')} />
            </View>
        </View>
    )
}

export default UserAge