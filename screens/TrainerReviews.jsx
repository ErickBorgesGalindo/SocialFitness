import {View, Text, Platform, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
//Styles
import Styles from '../components/Styles';
//Components
import BackBtn from '../components/BackBtn';
import TabBar from '../components/CustomTabBar';
import Review from '../components/ReviewView';
import CustomBtn from '../components/CustomBtn';
import ProgressBar from '../components/CustomProgressBar';

const data = [
    { id: 1, user: 'Nayely Morales', time: 2, image: require('../images/trainer.jpg'), review: "Had such an amazing session with Maria. She instantly picked up on the level of my fitness and adjusted the workout to suit me whilst also pushing me to my limits.", type: 'Recent' },
    { id: 2, user: 'Nayely Morales', time: 2, image: require('../images/trainer.jpg'), review: "Had such an amazing session with Maria. She instantly picked up on the level of my fitness and adjusted the workout to suit me whilst also pushing me to my limits. Had such an amazing session with Maria. She instantly picked up on the level of my fitness and adjusted the workout to suit me whilst also pushing me to my limits. Had such an amazing session with Maria. She instantly picked up on the level of my fitness and adjusted the workout to suit me whilst also pushing me to my limits.", type: 'Critical' },
    { id: 3, user: 'Nayely Morales', time: 2, image: require('../images/trainer.jpg'), review: "Had such an amazing session with Maria.", type: 'Favourable' },
    { id: 4, user: 'Nayely Morales', time: 2, image: require('../images/trainer.jpg'), review: "Had such an amazing session with Maria. She instantly picked up on the level of my fitness and adjusted the workout to suit me whilst also pushing me to my limits.", type: 'Recent' },
    { id: 5, user: 'Nayely Morales', time: 2, image: require('../images/trainer.jpg'), review: "Had such an amazing session with Maria. She instantly picked up on the level of my fitness and adjusted the workout to suit me whilst also pushing me to my limits. Had such an amazing session with Maria. She instantly picked up on the level of my fitness and adjusted the workout to suit me whilst also pushing me to my limits. Had such an amazing session with Maria. She instantly picked up on the level of my fitness and adjusted the workout to suit me whilst also pushing me to my limits.", type: 'Critical' },
    { id: 6, user: 'Nayely Morales', time: 2, image: require('../images/trainer.jpg'), review: "Had such an amazing session with Maria.", type: 'Favourable' },
    { id: 7, user: 'Nayely Morales', time: 2, image: require('../images/trainer.jpg'), review: "Had such an amazing session with Maria. She instantly picked up on the level of my fitness and adjusted the workout to suit me whilst also pushing me to my limits.", type: 'Recent' },
    { id: 8, user: 'Nayely Morales', time: 2, image: require('../images/trainer.jpg'), review: "Had such an amazing session with Maria. She instantly picked up on the level of my fitness and adjusted the workout to suit me whilst also pushing me to my limits. Had such an amazing session with Maria. She instantly picked up on the level of my fitness and adjusted the workout to suit me whilst also pushing me to my limits. Had such an amazing session with Maria. She instantly picked up on the level of my fitness and adjusted the workout to suit me whilst also pushing me to my limits.", type: 'Critical' },
    { id: 9, user: 'Nayely Morales', time: 2, image: require('../images/trainer.jpg'), review: "Had such an amazing session with Maria.", type: 'Favourable' },
];

const TrainerReviews = () => {
    const navigation = useNavigation();
    const [isRecentPressed, setIsRecentPressed] = useState(true);
    const [isCriticalPressed, setIsCriticalPressed] = useState(false);
    const [isFavourablePressed, setIsFavourablePressed] = useState(false);
    const [filteredData, setFilteredData] = useState(data.filter(item => item.type === 'Recent')); // Iniciar con todo el array

    const handleRecentPress = () => {
        setIsRecentPressed(true);
        setIsCriticalPressed(false);
        setIsFavourablePressed(false);
        setFilteredData(data.filter(item => item.type === 'Recent'));

    };

    const handleCriticalPress = () => {
        setIsRecentPressed(false);
        setIsCriticalPressed(true);
        setIsFavourablePressed(false);
        setFilteredData(data.filter(item => item.type === 'Critical'));
    };

    const handleFavourablePress = () => {
        setIsRecentPressed(false);
        setIsCriticalPressed(false);
        setIsFavourablePressed(true);
        setFilteredData(data.filter(item => item.type === 'Favourable'));

    };

    return (
        <View style={Styles.container}>
            {/* title and backButton */}
            <Text style={{ ...Styles.sectionName, marginTop: 50 }}>REVIEWS</Text>
            <BackBtn style={{top:'06%'}} onPress={() => navigation.goBack()} />

            {/* TabView */}
            <View style={Styles.tabView}>
                <TabBar onPress={handleRecentPress} isSelected={isRecentPressed} label="Recent" />
                <TabBar onPress={handleCriticalPress} isSelected={isCriticalPressed} label="Critical"/>
                <TabBar onPress={handleFavourablePress} isSelected={isFavourablePressed} label="Favourable"/>
            </View>

            {/* ProgressBar */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20, alignItems: 'center' }}>
                <Text style={{ ...Styles.header }}>4.6</Text>
                <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                    <ProgressBar progress={5} position={5} />
                    <ProgressBar progress={4} position={4} />
                    <ProgressBar progress={3} position={3} />
                    <ProgressBar progress={2} position={2} />
                    <ProgressBar progress={1} position={1} />
                </View>
            </View>

            {/* Rating */}
            <View style={{ marginTop: 10, width: '100%', height: 'auto' }}>
                <Text style={{ ...Styles.text, alignSelf: 'flex-end', marginHorizontal: '8%' }}>174 Ratings</Text>
            </View>
            
            {/* Reviews */}
            <View style={{alignSelf:'center'}}>
                    <FlatList
                        style={{ width: '90%', marginBottom:'100%'}}
                        data={filteredData}
                        renderItem={({ item }) => {
                            return (
                                <GestureHandlerRootView>
                                    <TouchableOpacity>
                                        <Review data={item}/>
                                    </TouchableOpacity>
                                </GestureHandlerRootView>
                            )
                        }}
                    />
                </View>

            {/* Button */}
            <View style={{ top: Platform.OS == 'ios' ? '-43%' : '-47%' }}>
                <CustomBtn title='Write a Review' onPress={() => navigation.navigate('WriteReview')} />
            </View>
        </View>
    )
}

export default TrainerReviews