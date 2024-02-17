import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text} from 'react-native';

const InputWeight = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    if (text.length <= 6) {
      setInputValue(text);
      onInputChange(text);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={handleInputChange}
          maxLength={6}
          keyboardType="numeric"
          placeholder='50'
          placeholderTextColor={'#5A5A5A'}
        />
        <Text style={{ color: 'white', alignSelf: 'flex-end', fontSize: 20, marginBottom: '5%' }}>Kg</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
    borderColor: 'transparent',
    borderWidth: 1,
  },
  input: {
    height: 100,
    borderWidth: 1,
    borderBottomColor: '#D0FD3E',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    color: '#fff',
    fontSize: 50
  },
});

export default InputWeight;
