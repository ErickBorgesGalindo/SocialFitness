import { View, Text, ImageBackground } from 'react-native';
import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
//Styles
import Styles from '../components/Styles';
//Components
import CustomBtn from '../components/CustomBtn';
import BackBtn from '../components/BackBtn';
import InputWeight from '../components/MaskedInputWeight';

const UserWeight = () => {
    const navigation = useNavigation();

    const [inputData, setInputData] = useState('');
    const handleInputChange = (text) => {
      setInputData(text);
    };
    return (
        <View style={Styles.container}>
            {/* title */}
            <Text style={{ ...Styles.sectionName, marginTop: 60, justifyContent: 'center', fontSize: 25 }}>What's your weight?</Text>

            {/* textInfo */}
            <View style={{ width: '80%', marginTop: 10, alignSelf: 'center' }}>
                <Text style={{ ...Styles.text, fontSize: 13, textAlign: 'center', fontWeight: '600', textTransform: 'uppercase' }}>You can always change this later</Text>
            </View>

            {/* weightSelector */}
            <View style={{ marginTop: '10%', alignSelf: 'center' }}>
                <InputWeight onInputChange={handleInputChange}/>
            </View>

            {/* weightImage */}
            <View style={{ width: '100%', height:'20%', justifyContent:'center'}}>
                <ImageBackground source={require('../images/Spinner.png')} style={{ width: '100%', height: '70%', alignSelf: 'center'}} />
            </View>

            {/* customBtn, backBtn */}
            <View style={{ marginRight: 20, marginTop: '30%' }}>
                <BackBtn onPress={() => navigation.goBack()} />
                <CustomBtn title='Next' style={{ width: '30%', alignSelf: 'flex-end' }} onPress={() => navigation.navigate('Height')} />
            </View>


        </View>
    )
}

export default UserWeight