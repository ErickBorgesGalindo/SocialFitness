import { View, Dimensions, Platform, Text, FlatList, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useState } from 'react';
// Styles
import Styles from '../components/Styles';
// Components
import Measure from '../components/Measure';
import WorkoutCard from '../components/WorkoutCard';
import BackBtn from '../components/BackBtn';
import Day from '../components/Day';

const Measures = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [isDayPressed, setIsDayPressed] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null); 

  const handleDayPress = (index) => {
    setIsDayPressed(index); // Actualiza solo el índice del día presionado
    setSelectedDay(febDates[index]);
    console.log( getDayName(selectedDay.day),':',selectedDay.number);
    // console.log(Día seleccionado: ${selectedDay.number} - ${getDayName(selectedDay.day)}'');
  };

  // Juntar toda la data en 1 solo o 2 const
  const dataCal = {
    labels: ["Calories"],
    data: [0.8],
    amount: 652
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
    { id: 2, name: 'Flash Cycling', time: '20:00' },
    { id: 3, name: 'Running', time: '20:00' },
    { id: 4, name: 'Stability Training', time: '10:00' },
    { id: 5, name: 'End', time: '20:00' },
  ]

  function getFebDates(year) {
    const startDate = new Date(year, 1, 1); // Fecha de inicio: 1 de Febrero
    const endDate = new Date(year, 2, 0); // Fecha final: Último día de Febrero (se usa el mes 2 y día 0 para obtener el último día del mes anterior)
    const days = [];

    // Recorrer cada día entre la fecha de inicio y la fecha final
    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      days.push({
        day: date.getDay(), // Obtener el número del día (0-6)
        number: date.getDate(), // Obtener el día del mes (1-31)
      });
    }

    return days;
  }

  function getDayName(dayNumber) {
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    return days[dayNumber];
  }

  const year = 2024; // Cambiar el año según sea necesario
  const febDates = getFebDates(year);

  return (
    <View style={Styles.container}>
      {/* Days */}
      <View style={{ backgroundColor: '#2C2C2E', height: Platform.OS === 'ios' ? '25%' : '30%', justifyContent: 'center', alignItems: 'center', borderBottomRightRadius: 26, borderBottomLeftRadius: 26 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignItems: 'center', marginTop: 60 }}>
          <BackBtn style={{ position: 'relative', left: 0 }} onPress={console.log('Apachurrao')} />
          <Text style={{ ...Styles.text, fontSize: 20 }}>October 2021</Text>
          <BackBtn style={{ position: 'relative', left: 0, transform: [{ rotate: '180deg' }], }} onPress={console.log('Apachurrao')} />
        </View>

        <ScrollView 
          showsHorizontalScrollIndicator={false} 
          horizontal={true} 
          style={{ 
            flexDirection: 'row',
            width:'90%',
            marginTop: 20, 
            marginBottom: 15}}>
          {febDates.map((day, index) => (
            <Day
              key={day.number}
              isSelected={index === isDayPressed}
              primaryText={getDayName(day.day)}
              secondaryText={day.number}
              onPress={()=> handleDayPress(index)}
            />
          ))}
        </ScrollView>

        {/* {selectedDay && ( // Muestra el texto solo si hay un día seleccionado
        <Text style={{ ...Styles.text, fontSize: 16, marginTop: 10 }}>
          Día seleccionado: {selectedDay.number} - {getDayName(selectedDay.day)}
        </Text>
      )} */}

      </View>
      {/* Calories */}
      <View style={{height:'20%'}}>
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
          subTextPosition={Platform.OS === 'ios' ? '60%' : '20%'}
        />
      </View>
      {/* AnotherMeasures */}
      <View style={{ flexDirection: 'row', marginTop: Platform.OS == 'ios' ? '25%' : '32%', height: '10%' }}>
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
        <View style={{ height: '60%' }}>
          <FlatList
            data={data}
            style={{ marginBottom: Platform.OS == 'ios' ? '32%' : '55%' }}
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