import React, { useState } from 'react';
import { Text, View,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//Styles
import Styles from '../components/Styles';
//Components
import BackBtn from '../components/BackBtn';
import CardView from '../components/CardView';
import CustomTabBar from '../components/CustomTabBar';


const WorkoutCategories = () => {
    const navigation = useNavigation();
    const [isGymPressed, setIsGymPressed] = useState(true);
    const [isMartialArtsPressed, setIsMartialArtsPressed] = useState(false);
    const [isLifestylePressed, setIsLifestylePressed] = useState(false);

    const handleGymPress = () => {
        setIsGymPressed(true);
        setIsMartialArtsPressed(false);
        setIsLifestylePressed(false);
    };

    const handleMartialArtsPress = () => {
        setIsGymPressed(false);
        setIsMartialArtsPressed(true);
        setIsLifestylePressed(false);
    };

    const handleLifestylePress = () => {
        setIsGymPressed(false);
        setIsMartialArtsPressed(false);
        setIsLifestylePressed(true);
    };

    return (
        <View style={Styles.container}>
            <Text style={{ ...Styles.sectionName, fontSize: 20, marginTop: 66 }}>Workout Categories</Text>
            <BackBtn style={{top:'07%'}} onPress={() => navigation.goBack()} />

            {/* TabView */}
            <View style={Styles.tabView}>
                <CustomTabBar onPress={handleGymPress} isSelected={isGymPressed} label='Gym' />
                <CustomTabBar onPress={handleMartialArtsPress} isSelected={isMartialArtsPressed} label='Martial Arts' />
                <CustomTabBar onPress={handleLifestylePress} isSelected={isLifestylePressed} label='Life Style' />
            </View>

            {/* Images Secction */}
            {
                isGymPressed ?
                    <ScrollView style={{ marginTop: 10, alignSelf: 'center', marginBottom: 30 }}>
                        <CardView
                            text='Wake Up Call'
                            subtitle={'04 Workouts for begginers'}
                            ImageSource={require('../images/begginerWC.jpg')}
                            onPress={() => navigation.navigate('WorkoutDetail')} />
                        <CardView
                            text='Full Body Goal Crusher'
                            subtitle={'07 Workouts for Beginner'}
                            ImageSource={require('../images/intermediateWC.jpg')}
                            onPress={() => navigation.navigate('WorkoutDetail')} />
                        <CardView
                            text='LowerBodyStrength'
                            subtitle={'05 Workouts for Intermediate'}
                            ImageSource={require('../images/lowerWC.jpg')}
                            onPress={() => navigation.navigate('WorkoutDetail')}
                            isPremium={true} />
                        <CardView
                            text='Wake Up Call'
                            subtitle={'04 Workouts for begginers'}
                            ImageSource={require('../images/begginerWC.jpg')}
                            onPress={() => navigation.navigate('WorkoutDetail')} />
                        <CardView
                            text='Full Body Goal Crusher'
                            subtitle={'07 Workouts for Beginner'}
                            ImageSource={require('../images/intermediateWC.jpg')}
                            onPress={() => navigation.navigate('WorkoutDetail')} />
                        <CardView
                            text='LowerBodyStrength'
                            subtitle={'05 Workouts for Intermediate'}
                            ImageSource={require('../images/lowerWC.jpg')}
                            onPress={() => navigation.navigate('WorkoutDetail')}
                            isPremium={true} />
                    </ScrollView>
                    :
                    isMartialArtsPressed ?
                        <ScrollView style={{ marginTop: 10, alignSelf: 'center', marginBottom: 30 }}>
                            <CardView
                                text='KickBoxing Basics'
                                subtitle={'04 Lessons for Beginner'}
                                ImageSource={require('../images/MABasics.jpg')}
                                onPress={() => navigation.navigate('WorkoutDetail')} />
                            <CardView
                                text='Submission Techniques'
                                subtitle={'03 Lessons for Intermediate'}
                                ImageSource={require('../images/MASubmisions.jpg')}
                                onPress={() => navigation.navigate('WorkoutDetail')}
                                isPremium={true} />
                            <CardView
                                text='Boxing Combinations'
                                subtitle={'02 Lessons for Experts'}
                                ImageSource={require('../images/MACombinations.jpg')}
                                onPress={() => navigation.navigate('WorkoutDetail')} />
                            <CardView
                                text='Submission Techniques'
                                subtitle={'03 Lessons for Intermediate'}
                                ImageSource={require('../images/MASubmisions.jpg')}
                                onPress={() => navigation.navigate('WorkoutDetail')}
                                isPremium={true} />

                        </ScrollView>
                        :
                        isLifestylePressed ?
                            <ScrollView style={{ marginTop: 10, alignSelf: 'center', marginBottom: 30 }}>
                                <CardView
                                    text='Yoga at home'
                                    subtitle={'03 Lessons for Beginner'}
                                    ImageSource={require('../images/LFYoga.jpg')}
                                    onPress={() => navigation.navigate('WorkoutDetail')}
                                    isPremium={true} />
                                <CardView
                                    text='Basic Excercises in Home'
                                    subtitle={'10 Lessons for Beginner'}
                                    ImageSource={require('../images/LFEquipment.jpg')}
                                    onPress={() => navigation.navigate('WorkoutDetail')}
                                    isPremium={false} />
                                <CardView
                                    text='Training in the beach'
                                    subtitle={'05 Lessons for Intermediate'}
                                    ImageSource={require('../images/LFBeach.jpg')}
                                    onPress={() => navigation.navigate('WorkoutDetail')}
                                    isPremium={true} />
                                <CardView
                                    text='Tips for personal careers'
                                    subtitle={'05 Lessons for Beginner'}
                                    ImageSource={require('../images/LFRunner.jpg')}
                                    onPress={() => navigation.navigate('WorkoutDetail')}
                                    isPremium={false} />
                            </ScrollView>
                            : null
            }

        </View>
    )
}

export default WorkoutCategories;