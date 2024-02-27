import { View, Text, Image, Platform, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
// Styles
import Styles from '../components/Styles';
// Components
import BackBtn from '../components/BackBtn';
import TimeCaloriesView from '../components/TimeCaloriesView';
import FlatCard from '../components/CardFlat';
import PopUpView from '../components/PopUpView';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const data = [
    { id: 1, name: 'Simple Warm-Up Exercises', time: '0:30', image: require('../images/00_image.jpg') },
    { id: 2, name: 'Simple Warm-Up Exercises', time: '0:30', image: require('../images/00_image.jpg') },
    { id: 3, name: 'Simple Warm-Up Exercises', time: '0:30', image: require('../images/00_image.jpg') },
    { id: 4, name: 'Simple Warm-Up Exercises', time: '0:30', image: require('../images/00_image.jpg') },
    { id: 5, name: 'Simple Warm-Up Exercises', time: '0:30', image: require('../images/00_image.jpg') },
    { id: 6, name: 'Simple Warm-Up Exercises', time: '0:30', image: require('../images/00_image.jpg') },
    { id: 7, name: 'Simple Warm-Up Exercises', time: '0:30', image: require('../images/00_image.jpg') },
    { id: 8, name: 'Simple Warm-Up Exercises', time: '0:30', image: require('../images/00_image.jpg') },
    { id: 9, name: 'Simple Warm-Up Exercises', time: '0:30', image: require('../images/00_image.jpg') },
    { id: 10, name: 'Simple Warm-Up Exercises', time: '0:30', image: require('../images/00_image.jpg') },
];

const WorkoutDetail = () => {
    const navigation = useNavigation();
    const userPremium = true;
    const handleCardPress = () => {
        navigation.navigate('Video')
    };

    return (
        <View>
            {/* topImage */}
            <Image style={Styles.topImage} source={require('../images/00_image.jpg')} />
            {/* Back icon */}
            <BackBtn onPress={() => navigation.goBack()} style={{ top: '15%' }} />

            {/* content and container */}
            <View style={{
                ...Styles.viewContainer,
                top: Platform.OS == 'ios' ? '90%' : '70%'
            }}>
                {/* title and subtitle */}
                <Text style={{ ...Styles.text, marginTop: 30, marginLeft: 30, }}>Day 01 - Warm Up</Text>
                <Text style={{ ...Styles.textColor, marginTop: 10, marginLeft: 30 }}>04 Workouts for Beginner</Text>
                {/* time and calories */}
                <TimeCaloriesView
                    time='60'
                    cal='350' />
                {/* content */}
                <View>
                    {/* Description of the workout */}
                    <Text style={Styles.description}>
                        Want your body to be healthy. Join our program with directions according to body’s goals.
                        Increasing physical strength is the goal of strenght training.
                        Maintain body fitness by doing physical exercise at least 2-3 times a week.
                    </Text>

                    {/* Excercise Cards */}
                    <View style={{ alignItems: 'center' }}>
                        <FlatList
                            style={{ width: Platform.OS === 'ios' ? '100%' : '110%', marginBottom: Platform.OS === 'ios' ? '220%' : '200%', marginTop: 10 }}
                            data={data}
                            renderItem={({ item }) => {
                                return (
                                    <GestureHandlerRootView style={{ marginLeft: 15 }}>
                                        <TouchableOpacity>
                                            <FlatCard data={item} onPress={() => handleCardPress(item)} />
                                        </TouchableOpacity>
                                    </GestureHandlerRootView>
                                )
                            }}
                        />
                    </View>
                </View>
            </View>

            {/* PopUp */}
            {
                userPremium ? null :
                    <PopUpView
                        ImageSource={require('../images/everyday.jpg')}
                        popUpTitle='Upgrade to Premium'
                        popUpSubtitle='Subscribe to take an appoinment'
                        btnTitle='Be Premium'
                        onPress={() => navigation.navigate('SubscriptionType')}
                        cancelOnPress={() => navigation.goBack()} />
            }
        </View>
    )
}

export default WorkoutDetail