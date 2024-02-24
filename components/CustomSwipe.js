import React from "react";
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import  Swipeable  from "react-native-gesture-handler/Swipeable";
import { FontAwesome5 } from '@expo/vector-icons';


const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomSwipe = (props) => {
    const leftSwipe = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });

        return(
            <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.6}>
                <View style={style.deleteBox}>
                    <Animated.Text style={{transform: [{scale:scale}]}}><FontAwesome5 name="trash" size={24} color="white" /></Animated.Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <Swipeable renderLeftActions={leftSwipe}>
            <View style={style.container}>
                <Text style={style.title}>{props.data.title}</Text>
                <Text style={{ color: 'white' }}>{props.data.content}</Text>
            </View>
        </Swipeable>
    );
};

export default CustomSwipe;

const style = StyleSheet.create({
    container: {
        height: 80,
        width: SCREEN_WIDTH -40,
        backgroundColor: '#1C1C1E',
        justifyContent: 'center',
        padding: 16,
        alignSelf:'center'
    },
    deleteBox:{
        backgroundColor:'red',
        justifyContent:'center',
        width:100,
        alignItems:'center',
        height:80
    },
    title:{
        fontWeight:'700',
        color:'white',
        marginBottom:10
    }
})