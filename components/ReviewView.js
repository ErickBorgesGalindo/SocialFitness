import { StyleSheet, View, Text, Image } from 'react-native';
import Styles from '../components/Styles';
import React from 'react';

const Review = (props) => {
    return (
        <View style={[styles.review, { height: 'auto' }]}>
            <View style={styles.topReview}>
                <View style={{ flexDirection: 'row', marginLeft: '5%', marginTop: '5%' }}>
                    <Image source={props.data.image} style={styles.imageReview} />
                    <Text style={{ ...Styles.text, alignSelf: 'center', marginLeft: '5%' }}>{props.data.user}</Text>
                </View>
                <View style={{ width: '30%', alignItems: 'flex-end', justifyContent: 'center', marginTop: '5%' }}>
                    <Text style={{ ...Styles.textSmall }}>{props.data.time} ago</Text>
                </View>
            </View>
            <View style={{ width: '90%', alignSelf: 'center', marginTop: 10 }}>
                <Text style={{ color: 'white', textAlign: 'justify', marginBottom:20 }}>{props.data.review}</Text>
            </View>
        </View>
    )
}

export default Review

const styles = StyleSheet.create({
    review: {
        width: 320,
        height: 150,
        marginTop: 25,
        marginHorizontal:10,
        borderRadius: 20,
        backgroundColor: '#2C2C2E',
    },

    topReview: {
        flexDirection: 'row'
    },

    imageReview: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
})