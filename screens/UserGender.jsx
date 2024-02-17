import { View, Text} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
//Styles
import Styles from '../components/Styles';
//Components
import CustomBtn from '../components/CustomBtn';
import Gender from '../components/CustomGenderBtn';

const UserGender = () => {
    const navigation = useNavigation();
    const [isMalePressed, setIsMalePressed] = useState(false);
    const [isFemalePressed, setIsFemalePressed] = useState(false);

    const handleMalePress = () => {
        setIsMalePressed(true);
        setIsFemalePressed(false);
    };

    const handleFemalePress = () => {
        setIsFemalePressed(true);
        setIsMalePressed(false);
    };


    return (
        <View style={Styles.container}>
            {/* title */}
            <Text style={{ ...Styles.sectionName, marginTop: 60, justifyContent: 'center', fontSize: 25 }}>Tell us about yourself</Text>

            {/* textInfo */}
            <View style={{ width: '80%', marginTop: 10, alignSelf: 'center' }}>
                <Text style={{ ...Styles.text, fontSize: 13, textAlign: 'center', fontWeight: '600', textTransform: 'uppercase' }}>To give you a better experience we need to know your gender</Text>
            </View>

            {/* genderSelector */}
            <View style={{ marginTop: '30%', alignSelf: 'center' }}>
                <Gender
                    onPress={() => handleMalePress()}
                    isSelected={isMalePressed}
                    gender={'male-symbol'}
                    genderName={'Male'}
                />

                <Gender
                    onPress={() => handleFemalePress()}
                    isSelected={isFemalePressed}
                    gender={'female-symbol'}
                    genderName={'Female'}
                />
            </View>

            {/* nextBtn */}
            <View style={{marginRight:20, marginTop:'30%'}}>
                <CustomBtn title='Next' style={{ width:'30%', alignSelf:'flex-end'}} onPress={() => navigation.navigate("Age")}/>
            </View>
        </View>
    )
}

export default UserGender
