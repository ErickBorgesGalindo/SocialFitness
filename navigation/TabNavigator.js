import React from "react";
//Components
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';
//Screens
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, 
            tabBarShowLabel: false,
            tabBarStyle:{backgroundColor:'#1C1C1E', borderTopColor:'transparent'},
            tabBarInactiveTintColor:'#505050',
            tabBarActiveTintColor:'#FFF'}}>
                
            <Tab.Screen name="Homes" component={HomeScreen} options={{ tabBarIcon:({color, size}) => (
                <Foundation name="home" size={size} color={color} />
            )}}/>
            <Tab.Screen name="Notifications" component={NotificationScreen} options={{ tabBarIcon:({color, size}) => (
                <Octicons name="bell-fill" size={size} color={color} />), 
                tabBarBadge:1,
                tabBarBadgeStyle:{backgroundColor:'#D0FD3E'}}}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon:({color, size}) => (
                <Ionicons name="person" size={size} color={color} />
            )}}/>
        </Tab.Navigator>
    );
};

export default TabNavigator;