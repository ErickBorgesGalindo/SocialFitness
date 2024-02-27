import { View, Text, Platform, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
//Styles
import Styles from '../components/Styles';
//Components
import BackBtn from '../components/BackBtn';
import FlatCard from '../components/CardFlat';

const data = [
  { id: 1, name: 'English', image: require('../images/eeuu.png') },
  { id: 2, name: 'Spanish', image: require('../images/spanish.png') },
  { id: 3, name: 'Japanesse', image: require('../images/japan.jpg') },
  { id: 4, name: 'English', image: require('../images/eeuu.png') },
  { id: 5, name: 'Spanish', image: require('../images/spanish.png') },
  { id: 6, name: 'Japanesse', image: require('../images/japan.jpg') },
  { id: 7, name: 'English', image: require('../images/eeuu.png') },
  { id: 8, name: 'Spanish', image: require('../images/spanish.png') },
  { id: 9, name: 'Japanesse', image: require('../images/japan.jpg') },
];

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
      <View style={{ alignItems: 'center' }}>
        <FlatList
          style={{ width: Platform.OS === 'ios' ? '100%' : '110%', marginBottom:'30%'}}
          data={data}
          renderItem={({ item }) => {
            return (
              <GestureHandlerRootView style={{ marginLeft: 15 }}>
                <TouchableOpacity>
                  <FlatCard data={item} onPress={() => handleCardPress(item)} />
                </TouchableOpacity>
              </GestureHandlerRootView>
            )
          }}
        />
      </View>
    </View>
  )
}

export default Language