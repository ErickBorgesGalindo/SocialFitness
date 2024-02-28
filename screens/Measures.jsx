import {View, Dimensions, Platform } from 'react-native';
import React from 'react';
// Styles
import Styles from '../components/Styles';
// Components
import Measure from '../components/Measure';

[]
const Measures = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const dataCal = {
    labels: ["Calories"], // optional
    data: [0.7],
    amount: 100,
  };

  const dataSteps = {
    labels: ["Steps"], // optional
    data: [0.6],
    amount: 6540,
  };

  const dataTime = {
    labels: ["Time"], // optional
    data: [0.4],
    amount: 45,
  };

  const dataHeart = {
    labels: ["Heart"], // optional
    data: [0.7],
    amount: 72,
  };

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
          top={Platform.OS === 'ios' ? '115%':'90%'}
          text={'Active Calories'} 
          amount={`${dataCal.amount} Cal`}
          textPosition={Platform.OS === 'ios'? '110%':'80%'}
          subTextPosition={Platform.OS === 'ios'? '70%':'40%'}
        />
      </View>

      <View style={{ flexDirection: 'row', marginTop: Platform.OS=='ios'?'5%':'12%'}}>
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
            top={Platform.OS==='ios'?'20%':'-10%'}
            textPosition={Platform.OS === 'ios'? '-15%':'-45%'}
            subTextPosition={Platform.OS === 'ios'? '-15%':'-45%'}
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
            top={Platform.OS==='ios'?'20%':'-10%'}
            textPosition={Platform.OS === 'ios'? '-15%':'-45%'}
            subTextPosition={Platform.OS === 'ios'? '-15%':'-45%'}
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
            top={Platform.OS==='ios'?'20%':'-10%'}
            textPosition={Platform.OS === 'ios'? '-15%':'-45%'}
            subTextPosition={Platform.OS === 'ios'? '-15%':'-45%'}
            text='BPM'
            amount={dataHeart.amount}
          />
        </View>
      </View>


    </View>
  )
}

export default Measures