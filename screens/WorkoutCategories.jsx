import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//Styles
import Styles from '../components/Styles';
//Components
import BackBtn from '../components/BackBtn';
import CardView from '../components/CardView';
import CustomTabBar from '../components/CustomTabBar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const data = [
    {id: '1', name: 'Wake Up Call', subtitle: '04 Workouts for begginners', image: require('../images/begginerWC.jpg'), premium: false, type: 'Gym'},
    {id: '2', name: 'Full Body Goal Crusher', subtitle: '07 Workouts for Beginner', image: require('../images/intermediateWC.jpg'), premium: false, type: 'Gym'},
    {id: '3', name: 'LowerBodyStrength', subtitle: '05 Workouts for Intermediate', image: require('../images/lowerWC.jpg'), premium: true, type: 'Gym'},
    {id: '4', name: 'Wake Up Call', subtitle: '04 Workouts for begginners', image: require('../images/begginerWC.jpg'), premium: false, type: 'Gym'},
    {id: '5', name: 'Full Body Goal Crusher', subtitle: '07 Workouts for Beginner', image: require('../images/intermediateWC.jpg'), premium: false, type: 'Gym'},
    {id: '6', name: 'LowerBodyStrength', subtitle: '05 Workouts for Intermediate', image: require('../images/lowerWC.jpg'), premium: true, type: 'Gym'},
    {id: '7', name: 'KickBoxing Basics', subtitle: '04 Lessons for Beginner', image: require('../images/MABasics.jpg'), premium: false, type: 'MartialArts'},
    {id: '8', name: 'Submission Techniques', subtitle: '03 Lessons for Intermediate', image: require('../images/MASubmisions.jpg'), premium: false, type: 'MartialArts'},
    {id: '9', name: 'Boxing Combinations', subtitle: '02 Lessons for Experts', image: require('../images/MACombinations.jpg'), premium: false, type: 'MartialArts'},
    {id: '10', name: 'Submission Techniques', subtitle: '03 Lessons for Intermediate', image: require('../images/MASubmisions.jpg'), premium: true, type: 'MartialArts'},
    {id: '11', name: 'Yoga at home', subtitle: '03 Lessons for Beginner', image: require('../images/LFYoga.jpg'), premium: true, type: 'LifeStyle'},
    {id: '12', name: 'Basic Excercises in Home', subtitle: '10 Lessons for Beginner', image: require('../images/LFEquipment.jpg'), premium: false, type: 'LifeStyle'},
    {id: '13', name: 'Training in the beach', subtitle: '05 Lessons for Intermediate', image: require('../images/LFBeach.jpg'), premium: true, type: 'LifeStyle'},
    {id: '14', name: 'Tips for personal careers', subtitle: '05 Lessons for Beginner', image: require('../images/LFRunner.jpg'), premium: false, type: 'LifeStyle'},


  ];

const WorkoutCategories = () => {
    const navigation = useNavigation();
    const [isGymPressed, setIsGymPressed] = useState(true);
    const [isMartialArtsPressed, setIsMartialArtsPressed] = useState(false);
    const [isLifestylePressed, setIsLifestylePressed] = useState(false);
    const [filteredData, setFilteredData] = useState(data); // Iniciar con todo el array

    const handleGymPress = () => {
        setIsGymPressed(true);
        setIsMartialArtsPressed(false);
        setIsLifestylePressed(false);
        setFilteredData(data.filter(item => item.type === 'Gym'));
    };

    const handleMartialArtsPress = () => {
        setIsGymPressed(false);
        setIsMartialArtsPressed(true);
        setIsLifestylePressed(false);
        setFilteredData(data.filter(item => item.type === 'MartialArts'));

    };

    const handleLifestylePress = () => {
        setIsGymPressed(false);
        setIsMartialArtsPressed(false);
        setIsLifestylePressed(true);
        setFilteredData(data.filter(item => item.type === 'LifeStyle'));

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

            <View style={{ alignItems: 'center', marginBottom:'50%' }}>
                <FlatList
                  style ={Platform.OS == 'ios' ? {width:'80%'}: {width:'90%'}}
                  data = {filteredData} 
                  renderItem={({item}) => {
                    return(
                      <GestureHandlerRootView style={{marginLeft:15 }}>
                        <TouchableOpacity onPress={()=> console.log('Pachurrao')}>
                          <CardView data ={item}/>
                        </TouchableOpacity>
                      </GestureHandlerRootView>
                    )
                  }}
                />
              </View>
        </View>
    )
}

export default WorkoutCategories;