import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import WorkoutDetail from './screens/WorkoutDetail';
import WorkoutCategories from './screens/WorkoutCategories';
import SubscriptionType from './screens/SubscriptionType';
import FitnessTrainers from './screens/FitnessTrainers';
import TrainerDetail from './screens/TrainerDetail';
import TrainerReviews from './screens/TrainerReviews';
import TrainerWriteReview from './screens/TrainerWriteReview';
import TrainerAppoinment from './screens/TrainerAppoinment';
import Payment from './screens/Payment';
import PaymentCardDetail from './screens/PaymentCardDetail';
import PaymentComplete from './screens/PaymentComplete';
import VideoScreen from './screens/VideoScreen';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import Verification from './screens/Verification';
import UserGender from './screens/UserGender';
import UserAge from './screens/UserAge';
import UserWeight from './screens/UserWeight';
import UserHeight from './screens/UserHeight';
import UserGoal from './screens/UserGoal';
import UserLevel from './screens/UserLevel';
import TabNavigator from './navigation/TabNavigator';
import ProfileEdit from './screens/ProfileEdit';
import PrivacyPolicy from './screens/PrivacyPolicy';
import Settings from './screens/Settings';
import UnitsMeasure from './screens/UnitsMeasure';
import Notifications from './screens/Notifications';
import Language from './screens/Language';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Gender' component={UserGender} options={{ headerShown: false }} />
                <Stack.Screen name='Age' component={UserAge} options={{ headerShown: false }} />
                <Stack.Screen name='Weight' component={UserWeight} options={{ headerShown: false }} />
                <Stack.Screen name='Height' component={UserHeight} options={{ headerShown: false }} />
                <Stack.Screen name='Goal' component={UserGoal} options={{ headerShown: false }} />
                <Stack.Screen name='ActivityLevel' component={UserLevel} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{headerShown: false}} />
                <Stack.Screen name='Verification' component={Verification} options={{headerShown: false}} />
                <Stack.Screen name='Home' component={TabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name='ProfileEdit' component={ProfileEdit} options={{ headerShown: false }} />
                <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} options={{ headerShown: false }} />
                <Stack.Screen name='Settings' component={Settings} options={{ headerShown: false }} />
                <Stack.Screen name='UnitsMeasure' component={UnitsMeasure} options={{ headerShown: false }} />
                <Stack.Screen name='Notifications' component={Notifications} options={{ headerShown: false }} />
                <Stack.Screen name='Language' component={Language} options={{ headerShown: false }} />
                <Stack.Screen name='WorkoutDetail' component={WorkoutDetail} options={{ headerShown: false }} />
                <Stack.Screen name='WorkoutCategories' component={WorkoutCategories} options={{ headerShown: false }} />
                <Stack.Screen name='SubscriptionType' component={SubscriptionType} options={{ headerShown: false }} />
                <Stack.Screen name='FitnessTrainers' component={FitnessTrainers} options={{ headerShown: false }} />
                <Stack.Screen name='TrainerDetail' component={TrainerDetail} options={{ headerShown: false }} />
                <Stack.Screen name='TrainerReview' component={TrainerReviews} options={{ headerShown: false }} />
                <Stack.Screen name='WriteReview' component={TrainerWriteReview} options={{ headerShown: false }} />
                <Stack.Screen name='Appoinment' component={TrainerAppoinment} options={{ headerShown: false }} />
                <Stack.Screen name='Payment'component={Payment} options={{headerShown:false}}/>
                <Stack.Screen name='CardDetail'component={PaymentCardDetail} options={{headerShown:false}}/>
                <Stack.Screen name='PaymentComplete'component={PaymentComplete} options={{headerShown:false}}/>
                <Stack.Screen name='Video'component={VideoScreen} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;