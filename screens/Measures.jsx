import { View, Dimensions, Platform, Text, FlatList } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
// Styles
import Styles from '../components/Styles';
// Components
import Measure from '../components/Measure';
import WorkoutCard from '../components/WorkoutCard';

const Measures = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const dataCal = {
    labels: ["Calories"],
    data: [0.7],
    amount: 100,
  };

  const dataSteps = {
    labels: ["Steps"],
    data: [0.6],
    amount: 6540,
  };

  const dataTime = {
    labels: ["Time"],
    data: [0.4],
    amount: 45,
  };

  const dataHeart = {
    labels: ["Heart"],
    data: [0.7],
    amount: 72,
  };

  const data = [
    { id: 1, name: 'Stability Training', time: '10:00' },
    { id: 2, name: 'Flash Cicling', time: '20:00' },
    { id: 3, name: 'Running', time: '20:00' },
    { id: 4, name: 'Stability Training', time: '10:00' },
    { id: 5, name: 'Flash Cicling', time: '20:00' },
  ]

  return (
    <View style={Styles.container}>
      {/* Calories */}
      <View>
        <Measure
          data={dataCal}
          screenWidth={screenWidth}
          screenHeight={screenHeight / 3}
          strokeWidth={5}
          radius={90}
          section={1}
          strokeColor='255, 255, 255'
          top={Platform.OS === 'ios' ? '115%' : '90%'}
          text={'Active Calories'}
          amount={`${dataCal.amount} Cal`}
          textPosition={Platform.OS === 'ios' ? '110%' : '80%'}
          subTextPosition={Platform.OS === 'ios' ? '70%' : '40%'}
        />
      </View>
      {/* AnotherMeasures */}
      <View style={{ flexDirection: 'row', marginTop: Platform.OS == 'ios' ? '5%' : '12%', height: '10%' }}>
        {/* Steps */}
        <View>
          <Measure
            data={dataSteps}
            screenWidth={screenWidth / 3}
            screenHeight={screenHeight / 3}
            strokeWidth={5}
            radius={55}
            section={3}
            strokeColor='208, 253, 62'
            top={Platform.OS === 'ios' ? '20%' : '-10%'}
            textPosition={Platform.OS === 'ios' ? '-20%' : '-50%'}
            subTextPosition={Platform.OS === 'ios' ? '-20%' : '-55%'}
            text='Steps'
            amount={dataSteps.amount}
          />
        </View>

        {/* Time */}
        <View>
          <Measure
            data={dataTime}
            screenWidth={screenWidth / 3}
            screenHeight={screenHeight / 3}
            strokeWidth={5}
            radius={55}
            section={3}
            strokeColor='255, 36, 36'
            top={Platform.OS === 'ios' ? '20%' : '-10%'}
            textPosition={Platform.OS === 'ios' ? '-20%' : '-50%'}
            subTextPosition={Platform.OS === 'ios' ? '-20%' : '-50%'}
            text='Minutes'
            amount={dataTime.amount}
          />
        </View>

        {/* HeartRate */}
        <View>
          <Measure
            data={dataHeart}
            screenWidth={screenWidth / 3}
            screenHeight={screenHeight / 3}
            strokeWidth={5}
            radius={55}
            section={3}
            strokeColor='231, 147, 50'
            top={Platform.OS === 'ios' ? '20%' : '-10%'}
            textPosition={Platform.OS === 'ios' ? '-20%' : '-50%'}
            subTextPosition={Platform.OS === 'ios' ? '-20%' : '-50%'}
            text='BPM'
            amount={dataHeart.amount}
          />
        </View>
      </View>

      {/* WorkoutPlan */}
      <View>
        <View style={{ ...Styles.infoTextView, marginTop: 30, marginBottom: 20, marginHorizontal: 25 }}>
          <Text style={{ ...Styles.text }}>Finished Workout</Text>
        </View>
        <View style={{ height: '60%'}}>
          <FlatList
            data={data}
            style={{marginBottom: Platform.OS == 'ios' ? null : 40}}
            renderItem={({ item }) => {
              return (
                <GestureHandlerRootView>
                  <WorkoutCard data={item} />
                </GestureHandlerRootView>
              )
            }}
          />

        </View>
      </View>

    </View>
  )
}

export default Measures