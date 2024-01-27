import { Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
// Styles
import Styles from '../components/Styles';
// Components
import CardView from '../components/CardView';
import CardViewSquare from '../components/CardViewSquare';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      {/* mainText */}
      <View style={Styles.maintxtView}>
        <Text style={{ ...Styles.header }}>Hello User,</Text>
        <Text style={{ ...Styles.subHeader }}>Good morning.</Text>
      </View>

      {/* content */}
      <ScrollView>
        {/* todayWorkoutPlan */}
        <View style={Styles.infoTextView}>
          <Text style={{ ...Styles.text }}>Today Workout Plan</Text>
          <Text style={{ ...Styles.textColor }}>Mon 26 Apr</Text>
        </View>
        {/* excerciseCard */}
        <View style={{ alignItems: 'center' }}>
          <CardView
            text='Day 01 - Warm Up'
            subtitle={'07:00 - 08:00 AM'}
            ImageSource={require('../images/00_image.jpg')}
            onPress={() => navigation.navigate('WorkoutDetail')} 
            />
        </View>

        {/* workoutCategories */}
        <View style={Styles.infoTextView}>
          <Text style={Styles.text}>Workout Categories</Text>
          <Text style={Styles.textColor} onPress={() => navigation.navigate('WorkoutCategories')}>See All</Text>
        </View>
        {/* categoriesCards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0, marginRight: 20 }}>
          <CardView
            text='Learn the Basics of Training'
            subtitle={'06 Workouts for Beginner'}
            ImageSource={require('../images/begginer.jpg')}
            onPress={() => navigation.navigate('WorkoutDetail')}
            style={{ marginLeft: 40 }} />
          <CardView
            text='Learn Mixed Martial Arts'
            subtitle={'+6 different disciplines'}
            ImageSource={require('../images/mma.jpg')}
            onPress={() => navigation.navigate('WorkoutDetail')}
            style={{ marginLeft: 40 }} />

          <CardView
            text='Fitness life'
            subtitle={'Excercises for the day to day'}
            ImageSource={require('../images/everyday.jpg')}
            onPress={() => navigation.navigate('WorkoutDetail')}
            style={{ marginLeft: 40 }} />
        </ScrollView>

        {/* newWorkouts */}
        <View style={Styles.infoTextView}>
          <Text style={Styles.text}>Our trainers</Text>
          <Text style={Styles.textColor} 
            onPress={() => navigation.navigate('TrainersList')}
          >See All</Text>
        </View>
        {/* newWorkoutsCards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0, marginRight: 20, marginBottom:40 }}>
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
