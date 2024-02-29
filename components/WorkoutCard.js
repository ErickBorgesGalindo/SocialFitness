import { View, Text} from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const WorkoutCard = (props) => {
  return (
    <View style={{
        backgroundColor: '#2C2C2E',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 7,
        height: 70,
        marginBottom: 10,
        justifyContent: 'center'
      }}>
        <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-between'}}>
          <View>
            <Text style={{
              marginLeft: 20,
              fontSize: 18,
              fontWeight: '600',
              color: '#fff',
            }}>{props.data.name}</Text>
            <Text style={{
              marginLeft: 20,
              fontSize: 15,
              fontWeight: '500',
              color: '#D0FD3E',
            }}>{props.data.time}</Text>
          </View>
          <View style={{ marginRight: 20, justifyContent: 'center' }}>
            <FontAwesome name="check-square" size={30} color="rgba(208,253,62,.9)" />
          </View>
        </View>
      </View>
  )
}

export default WorkoutCard