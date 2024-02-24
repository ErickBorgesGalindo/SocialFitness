import {View, Text } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';
//Styles
import Styles from '../components/Styles';
//Components
import MaskedInput from '../components/MaskedInput';
import BackBtn from '../components/BackBtn';
import CustomBtn from '../components/CustomBtn';


const TrainerWriteReview = () => {
    const navigation = useNavigation();
    const [rating, setRating] = useState(0); // Estado para almacenar la calificación seleccionada
    const showRate = rating / 2;
    const [review, setReview] = useState('');


    const handleRatingChange = (value) => {
        setRating(value); // Actualizar el estado cuando se cambia la calificación
    };

    return (
        <View style={Styles.container}>
            {/* title and backButton */}
            <Text style={{ ...Styles.sectionName, fontSize: 28, marginTop: 50 }}>WRITE A REVIEW</Text>
            <BackBtn style={{ top: '06%' }} onPress={() => navigation.goBack()} />

            {/* rating */}
            <View style={{ alignItems: 'center', marginTop: 40 }}>
                <Rating
                    type='custom'
                    ratingImage={require('../images/F_invisible.png')}
                    ratingColor='#D0FD3E'
                    ratingBackgroundColor='#2C2C2E'
                    startingValue={0}
                    ratingCount={10}
                    imageSize={30}
                    fractions={1}
                    jumpValue={0.1}
                    onSwipeRating={handleRatingChange}
                    style={{ borderRadius: 50, backgroundColor: '#2C2C2E', width: '90%' }}
                />
                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={{ ...Styles.text }}>Rating:</Text>
                    <Text style={{ ...Styles.text, fontWeight: '800', }}>{showRate.toFixed(1)}</Text>
                </View>
            </View>

            {/* maskedReview */}
            <View style={{ marginTop: 30, alignItems:'center'}}>
                <MaskedInput
                    style={Styles.inputReview}
                    value={review}
                    placeholder='Review (Optional)'
                    placeholderTextColor='white'
                    mask='review' />
            </View>

            {/* backButton */}
            <View>
                <CustomBtn title={'Send'} onPress={() => navigation.goBack()} />
            </View>
        </View>
    )
}

export default TrainerWriteReview