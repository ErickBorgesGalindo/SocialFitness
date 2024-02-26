import { View, Text, ScrollView, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
//Styles
import Styles from '../components/Styles';
//Components
import BackBtn from '../components/BackBtn';
import TrainerCard from '../components/CardTrainer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const data =[
    {id: '1', trainerName: 'Richard Will', description: 'Congratulations', experience: '5 years experience', score: 4.9,image:require('../images/trainer.jpg'),showArrow: true},
    {id: '2', trainerName: 'Erick Borges', description: 'Attention', experience: '5 years experience', score: 3.9,image:require('../images/begginer.jpg'),showArrow: true},
    {id: '3', trainerName: 'Nayely Morales', description: 'New Activity', experience: '5 years experience', score: 4.9,image:require('../images/trainer.jpg'),showArrow: true},
    {id: '4', trainerName: 'Enrique Galindo', description: 'New Video', experience: '5 years experience', score: 4.9,image:require('../images/begginer.jpg'),showArrow: true},
    {id: '5', trainerName: 'Daniel Valencia', description: 'Renew your payment', experience: '5 years experience', score: 4.9,image:require('../images/trainer.jpg'),showArrow: true},
    {id: '6', trainerName: 'Nate Gentille', description: 'description6', experience: '5 years experience', score: 4.9,image:require('../images/begginer.jpg'),showArrow: true},
    {id: '7', trainerName: 'Luis Davila', description: 'description7', experience: '5 years experience', score: 4.9,image:require('../images/trainer.jpg'),showArrow: true},
    {id: '8', trainerName: 'Miguel Durán', description: 'description8', experience: '5 years experience', score: 4.9,image:require('../images/begginer.jpg'),showArrow: true},
  ]

const FitnessTrainers = () => {
    const navigation = useNavigation();
    const [lists, setlists] = useState(data);

    return (
        <View style={Styles.container}>

            <Text style={{ ...Styles.sectionName, marginTop:45}}>TRAINERS</Text>
            <BackBtn style={{top:'05%'}} onPress={() => navigation.goBack()} />

            <View style={{ marginTop: 20, width:'90%', alignSelf:'center' }}>
                <TextInput
                    style={Styles.input}
                    placeholderTextColor='rgba(255,255,255,0.4)'
                    placeholder='Write your trainer name' />
            </View>

            <View style={{ marginBottom: '50%', alignSelf:'center'}}>
                <FlatList
                    data = {lists}
                    renderItem={({item})=> {
                        return(
                            <GestureHandlerRootView>
                                <TouchableOpacity onPress={() => navigation.navigate('TrainerDetail')}>
                                  <TrainerCard data={item} />
                                </TouchableOpacity>
                            </GestureHandlerRootView>
                        )
                    }}/>
            </View>

        </View>
    )
}

export default FitnessTrainers