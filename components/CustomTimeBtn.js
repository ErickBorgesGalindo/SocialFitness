import {StyleSheet, Pressable, Text } from 'react-native';
import React from 'react';

const TimeBtn = ({ title, onPress, selected }) => {
  const handlePress = () => {
    onPress();
  };

  return (
    <Pressable style={selected ? styles.selectedButton : styles.disableButton} onPress={handlePress} >
      <Text style={selected ? styles.texSelected : styles.textDisable}> {title} </Text>
    </Pressable>
  );
};

export default TimeBtn;

const styles = StyleSheet.create({
  selectedButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 110,
    height: 45,
    borderRadius: 20,
    backgroundColor: 'transparent',
    borderColor: '#D0FD3E',
    borderWidth: 1,
    marginRight:10,
    marginTop:10
  },

  disableButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 110,
    height: 45,
    borderRadius: 20,
    backgroundColor: 'transparent',
    borderColor: 'rgba(255,255,255,0.4)',
    borderWidth: 1,
    marginRight:10,
    marginTop:10
  },

  texSelected:{
    width:'100%',
    color:'white',
    textAlign:'center', 
    fontWeight:"400",
    fontSize:18,
  },

  textDisable:{
    width:'100%',
    color:'rgba(255,255,255,0.4)',
    textAlign:'center', 
    fontWeight:"400",
    fontSize:18,
  }


});