import React from "react";
//Components
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
//Screens
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from "../screens/SearchScreen";
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
            <Tab.Screen name="Search" component={SearchScreen} options={{ tabBarIcon:({color, size}) => (
                <FontAwesome name="search" size={size} color={color} />
            )}}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon:({color, size}) => (
                <Ionicons name="person" size={size} color={color} />
            )}}/>
        </Tab.Navigator>
    );
};

export default TabNavigator;