import { View, Text, Image, ScrollView, Platform } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
// Styles
import Styles from '../components/Styles';
// Components
import BackBtn from '../components/BackBtn';
import TimeCaloriesView from '../components/TimeCaloriesView';
import FlatCard from '../components/CardFlat';
import PopUpView from '../components/PopUpView';

const WorkoutDetail = () => {
    const navigation = useNavigation();
    const userPremium = false;

    return (
        <View>
            {/* topImage */}
            <Image style={Styles.topImage} source={require('../images/00_image.jpg')} />
            {/* Back icon */}
            <BackBtn onPress={() => navigation.goBack()} style={{ top: '15%' }} />

            {/* content and container */}
            <View style={Styles.viewContainer}>
                {/* title and subtitle */}
                <Text style={{ ...Styles.text, marginTop: 30, marginLeft: 30, }}>Day 01 - Warm Up</Text>
                <Text style={{ ...Styles.textColor, marginTop: 10, marginLeft: 30 }}>04 Workouts for Beginner</Text>
                {/* time and calories */}
                <TimeCaloriesView
                    time='60'
                    cal='350' />
                {/* content */}
                <ScrollView style={{marginBottom:Platform.OS === 'ios' ? '140%' : 730, marginTop:10}}>
                    {/* Description of the workout */}
                    <Text style={Styles.description}>
                        Want your body to be healthy. Join our program with directions according to body’s goals.
                        Increasing physical strength is the goal of strenght training.
                        Maintain body fitness by doing physical exercise at least 2-3 times a week.
                    </Text>

                    {/* Excercise Cards */}
                    <FlatCard
                        excerciseName='Simple Warm-Up Exercises'
                        duration='0:30'
                        ImageSource={require('../images/00_image.jpg')}
                        onPress={() => navigation.navigate('Video')} />

                    <FlatCard
                        excerciseName='Simple Warm-Up Exercises'
                        duration='0:30'
                        ImageSource={require('../images/00_image.jpg')}
                        onPress={() => navigation.navigate('Video')} />

                    <FlatCard
                        excerciseName='Simple Warm-Up Exercises'
                        duration='0:30'
                        ImageSource={require('../images/00_image.jpg')}
                        onPress={() => navigation.navigate('Video')} />

                    <FlatCard
                        excerciseName='Simple Warm-Up Exercises'
                        duration='0:30'
                        ImageSource={require('../images/00_image.jpg')}
                        onPress={() => navigation.navigate('Video')} />
                     <FlatCard
                        excerciseName='Simple Warm-Up Exercises'
                        duration='0:30'
                        ImageSource={require('../images/00_image.jpg')}
                        onPress={() => navigation.navigate('Video')} />

                    <FlatCard
                        excerciseName='Simple Warm-Up Exercises'
                        duration='0:30'
                        ImageSource={require('../images/00_image.jpg')}
                        onPress={() => navigation.navigate('Video')} />

                    <FlatCard
                        excerciseName='Simple Warm-Up Exercises'
                        duration='0:30'
                        ImageSource={require('../images/00_image.jpg')}
                        onPress={() => navigation.navigate('Video')} />

                    <FlatCard
                        excerciseName='Simple Warm-Up Exercises'
                        duration='0:30'
                        ImageSource={require('../images/00_image.jpg')}
                        onPress={() => navigation.navigate('Video')} />
                    <FlatCard
                        excerciseName='Simple Warm-Up Exercises'
                        duration='0:30'
                        ImageSource={require('../images/00_image.jpg')}
                        onPress={() => navigation.navigate('Video')} />
                    <FlatCard
                        excerciseName='10 Simple Warm-Up Exercises'
                        duration='0:30'
                        ImageSource={require('../images/00_image.jpg')}
                        onPress={() => navigation.navigate('Video')} />
                        <FlatCard
                        excerciseName='10 Simple Warm-Up Exercises'
                        duration='0:30'
                        ImageSource={require('../images/00_image.jpg')}
                        onPress={() => navigation.navigate('Video')} />
                        <FlatCard
                        excerciseName='10 Simple Warm-Up Exercises'
                        duration='0:30'
                        ImageSource={require('../images/00_image.jpg')}
                        onPress={() => navigation.navigate('Video')} />
                        <FlatCard
                        excerciseName='10 Simple Warm-Up Exercises'
                        duration='0:30'
                        ImageSource={require('../images/00_image.jpg')}
                        onPress={() => navigation.navigate('Video')} />
                        <FlatCard
                        excerciseName='14 Simple Warm-Up Exercises'
                        duration='0:30'
                        ImageSource={require('../images/00_image.jpg')}
                        onPress={() => navigation.navigate('Video')} />
                </ScrollView>
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