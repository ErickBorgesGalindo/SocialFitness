import { View, Text, Image, Pressable, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
//Styles
import Styles from '../components/Styles';
//Components
import BackBtn from '../components/BackBtn';
import MaskedInput from '../components/MaskedInput';
import CustomBtn from '../components/CustomBtn';
import { FontAwesome } from '@expo/vector-icons';

const ProfileEdit = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');

  return (
    <View style={Styles.container}>
      {/* Header */}
      <Text style={{ ...Styles.sectionName, marginTop: 45 }}>EDIT PROFILE</Text>
      <BackBtn style={{ top: '05%' }} onPress={() => navigation.goBack()} />

      {/* Edit Image */}
      <View>
        {/* Image */}
        <View style={{ alignItems: 'center', marginTop: '10%' }}>
          <Image style={Styles.profileImage} source={require('../images/trainer.jpg')} />
        </View>
        {/* Camera Icon */}
        <Pressable onPress={ () => { console.log('Camera') } } style={{ top:'-19%', right:'-55%'}}>
          <View style={{alignItems:'center', justifyContent:'center',borderRadius:50, width:46, height:46, backgroundColor:'#2C2C2E'}}>
            <FontAwesome name="camera" size={23} color="white" />
          </View>
        </Pressable>
      </View>
      
      {/* Inputs */}
      <View style={{justifyContent:'space-between', height:'25%'}}>
        {/* NameInput */}
        <View style={styles.InputsView}>
          <Text style={styles.TextInput}>Name</Text>
          <TextInput
            style={Styles.input}
            placeholderTextColor='rgba(255,255,255,0.4)'
            placeholder='Sarah Wegan'
            onChangeText={(val) => setName(val)} />
        </View>
        {/* MailInput */}
        <View style={styles.InputsView}>
          <Text style={styles.TextInput}>Mail</Text>
            <MaskedInput
              style={Styles.input}
              value={mail}
              onValueChange={(val) => setMail(val)}
              placeholder='Email'
              placeholderTextColor='rgba(255,255,255,0.4)'
              mask='email' />
        </View>
      </View>

      {/* Button */}
      <View style={{top:'20%'}}>
        <CustomBtn title='Save' onPress={() => navigation.goBack()} />
      </View>
    </View>
  )
}

export default ProfileEdit

const styles = StyleSheet.create({

  InputsView:{
      marginHorizontal:'10%'
  },
  
  TextInput:{
    color:'#D0FD3E', 
    alignSelf:'flex-start'
  }
})