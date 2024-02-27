import { Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
// Styles
import Styles from '../components/Styles';
// Components
import CardView from '../components/CardView';
import CardViewSquare from '../components/CardViewSquare';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const todayData = [
  {id: '1', name: 'Day 01 - Warm Up', subtitle: '07:00 - 08:00 AM', image: require('../images/00_image.jpg'),premium: false,},
];

const categoriesData = [
  {id: '1', name: 'Learn the Basics of Training', subtitle: '06 Workouts for Beginner', image: require('../images/begginer.jpg'),premium: false,},
  {id: '2', name: 'Learn Mixed Martial Arts', subtitle: '+6 different disciplines', image: require('../images/mma.jpg'),premium: false,},
  {id: '3', name: 'Fitness life', subtitle: 'Excercises for the day to day', image: require('../images/everyday.jpg'),premium: false,},

];

const HomeScreen = () => {
  const navigation = useNavigation();
  const date = new Date().toDateString();
  const handleCardPress = () => {
    navigation.navigate('WorkoutDetail')
  };

  return (
    <View style={Styles.container}>
      {/* mainText */}
      <View style={Styles.maintxtView}>
        <Text style={{ ...Styles.header }}>Hello User,</Text>
        <Text style={{ ...Styles.subHeader }}>Good morning.</Text>
      </View>

      {/* content */}
        {/* todayWorkoutPlan */}
        <ScrollView>
          <View style={Styles.infoTextView}>
            <Text style={{ ...Styles.text }}>Workout Plan</Text>
            <Text style={{ ...Styles.textColor }}>{date}</Text>
          </View>
          {/* excerciseCard */}
          <View style={{ alignItems: 'center' }}>
            <FlatList
              data = {todayData} 
              renderItem={({item}) => {
                return(
                  <GestureHandlerRootView>
                    <TouchableOpacity>
                      <CardView data ={item} onPress={() => handleCardPress(item)}/>
                    </TouchableOpacity>
                  </GestureHandlerRootView>
                )
              }}
            />
          </View>
          {/* workoutCategories */}
          <View style={Styles.infoTextView}>
            <Text style={Styles.text}>Workout Categories</Text>
            <Text style={Styles.textColor} onPress={() => navigation.navigate('WorkoutCategories')}>See All</Text>
          </View>
          {/* categoriesCards */}
          <View style={{ alignItems: 'center' }}>
            <FlatList 
              horizontal = {true}
              style ={{width:'90%'}}
              data = {categoriesData} 
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

          {/* newWorkouts */}
          <View style={Styles.infoTextView}>
            <Text style={Styles.text}>Our trainers</Text>
            <Text style={Styles.textColor} 
              onPress={() => navigation.navigate('FitnessTrainers')}
            >See All</Text>
          </View>
          {/* newWorkoutsCards */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0, marginRight: 20, marginBottom:20 }}>
            <CardViewSquare
              text='Richard Will'
              subtitle='MMA Trainer'
              ImageSource={require('../images/submission.jpg')}
              isPremium={true}
              onPress={() => navigation.navigate('TrainerDetail')} 
              />

            <CardViewSquare
              text='Jennifer James'
              subtitle='Crossfit Trainer'
              ImageSource={require('../images/trainer.jpg')}
              isPremium={false}
              onPress={() => navigation.navigate('TrainerDetail')} 
              />
          </ScrollView>

        </ScrollView>
    </View>
  )
}

export default HomeScreen