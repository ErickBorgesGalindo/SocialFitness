import { View, Text, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
//Styles
import Styles from '../components/Styles';
//Components
import BackBtn from '../components/BackBtn';
import TrainerCard from '../components/CardTrainer';

const FitnessTrainers = () => {
    const navigation = useNavigation();

    return (
        <View style={Styles.container}>

            <Text style={{ ...Styles.sectionName, marginTop:45}}>TRAINERS</Text>
            <BackBtn style={{top:'05%'}} onPress={() => navigation.goBack()} />

            <View style={{ marginTop: 20 }}>
                <TextInput
                    style={Styles.input}
                    placeholderTextColor='rgba(255,255,255,0.4)'
                    placeholder='Write your trainer name' />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 30, alignSelf:'center' }}>
                <TrainerCard
                    ImageSource={require('../images/trainer.jpg')}
                    trainerName='Richard Will'
                    description='High Intensity Training'
                    experience='5 years experience'
                    score='4.9'
                    onPress={() => navigation.navigate('TrainerDetail')} />

                <TrainerCard
                    ImageSource={require('../images/trainer.jpg')}
                    trainerName='Erick Borges'
                    description='High Intensity Training'
                    experience='5 years experience'
                    score='4.9'
                    onPress={() => console.log('PRESS')} />

                <TrainerCard
                    ImageSource={require('../images/trainer.jpg')}
                    trainerName='Nayely Morales'
                    description='High Intensity Training'
                    experience='5 years experience'
                    score='4.9'
                    onPress={() => console.log('PRESS')} />


                <TrainerCard
                    ImageSource={require('../images/trainer.jpg')}
                    trainerName='Enrique Galindo'
                    description='High Intensity Training'
                    experience='5 years experience'
                    score='4.9'
                    onPress={() => console.log('PRESS')} />


                <TrainerCard
                    ImageSource={require('../images/trainer.jpg')}
                    trainerName='Daniel Valencia'
                    description='High Intensity Training'
                    experience='5 years experience'
                    score='4.9'
                    onPress={() => console.log('PRESS')} />

                <TrainerCard
                    ImageSource={require('../images/trainer.jpg')}
                    trainerName='Ivana Gomez'
                    description='High Intensity Training'
                    experience='5 years experience'
                    score='4.9'
                    onPress={() => console.log('PRESS')} />

                <TrainerCard
                    ImageSource={require('../images/trainer.jpg')}
                    trainerName='Nate Gentille'
                    description='High Intensity Training'
                    experience='5 years experience'
                    score='4.9'
                    onPress={() => console.log('PRESS')} />

                <TrainerCard
                    ImageSource={require('../images/trainer.jpg')}
                    trainerName='Luis Davila'
                    description='High Intensity Training'
                    experience='5 years experience'
                    score='4.9'
                    onPress={() => console.log('PRESS')} />
            </ScrollView>

        </View>
    )
}

export default FitnessTrainers