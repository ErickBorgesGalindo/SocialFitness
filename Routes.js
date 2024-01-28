import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import WorkoutDetail from './screens/WorkoutDetail';
import WorkoutCategories from './screens/WorkoutCategories';
import SubscriptionType from './screens/SubscriptionType';
import FitnessTrainers from './screens/FitnessTrainers';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='WorkoutDetail' component={WorkoutDetail} options={{ headerShown: false }} />
                <Stack.Screen name='WorkoutCategories' component={WorkoutCategories} options={{ headerShown: false }} />
                <Stack.Screen name='SubscriptionType' component={SubscriptionType} options={{ headerShown: false }} />
                <Stack.Screen name='FitnessTrainers' component={FitnessTrainers} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;