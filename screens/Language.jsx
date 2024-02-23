import { View, Text, ScrollView, Platform } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
//Styles
import Styles from '../components/Styles';
//Components
import BackBtn from '../components/BackBtn';
import FlatCard from '../components/CardFlat';

const Language = () => {

  const [isRemindersPressed, setIsRemindersPressed] = useState(true);
  const [isProgramPressed, setIsProgramPressed] = useState(false);
  const navigation = useNavigation();

  const handleRemindersPress = () => {
    setIsRemindersPressed(!isRemindersPressed);
    console.log('Apachurraste Reminders');
  };

  const handleProgramPress = () => {
    setIsProgramPressed(!isProgramPressed);
    console.log('apachurraste Program');
  };
  return (
    <View style={Styles.container}>
      {/* Header */}
      <Text style={{ ...Styles.sectionName, marginTop: 45 }}>Language</Text>
      <BackBtn style={{ top: '05%' }} onPress={() => navigation.goBack()} />

      {/* options */}
      <ScrollView style={{ marginBottom: Platform.OS === 'ios' ? '10%' : '03%', marginTop: 10 }}>
        {/* Excercise Cards */}
        <FlatCard
          excerciseName='English'
          // duration='0:30'
          ImageSource={require('../images/eeuu.png')}
          onPress={() => console.log('Hugo')} />

        <FlatCard
          excerciseName='Español'
          // duration='0:30'
          ImageSource={require('../images/spanish.png')}
          onPress={() => console.log('Hugo')} />

        <FlatCard
          excerciseName='Japan'
          // duration='0:30'
          ImageSource={require('../images/japan.jpg')}
          onPress={() => console.log('Hugo')} />

        <FlatCard
          excerciseName='English'
          // duration='0:30'
          ImageSource={require('../images/eeuu.png')}
          onPress={() => console.log('Hugo')} />

        <FlatCard
          excerciseName='Español'
          // duration='0:30'
          ImageSource={require('../images/spanish.png')}
          onPress={() => console.log('Hugo')} />

        <FlatCard
          excerciseName='Japan'
          // duration='0:30'
          ImageSource={require('../images/japan.jpg')}
          onPress={() => console.log('Hugo')} />
        <FlatCard
          excerciseName='English'
          // duration='0:30'
          ImageSource={require('../images/eeuu.png')}
          onPress={() => console.log('Hugo')} />

        <FlatCard
          excerciseName='Español'
          // duration='0:30'
          ImageSource={require('../images/spanish.png')}
          onPress={() => console.log('Hugo')} />

        <FlatCard
          excerciseName='Japan'
          // duration='0:30'
          ImageSource={require('../images/japan.jpg')}
          onPress={() => console.log('Hugo')} />
        <FlatCard
          excerciseName='English'
          // duration='0:30'
          ImageSource={require('../images/eeuu.png')}
          onPress={() => console.log('Hugo')} />

        <FlatCard
          excerciseName='Español'
          // duration='0:30'
          ImageSource={require('../images/spanish.png')}
          onPress={() => console.log('Hugo')} />

        <FlatCard
          excerciseName='Japan'
          // duration='0:30'
          ImageSource={require('../images/japan.jpg')}
          onPress={() => console.log('Hugo')} />

      </ScrollView>
    </View>
  )
}

export default Language