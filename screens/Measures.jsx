import { View, Dimensions, Platform, Text, FlatList, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
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
  const [month, setMonth] = useState(moment().month()); 
  const [currentYear, setCurrentYear] = useState(moment().year()); 

  const handleDayPress = (index) => {
    setIsDayPressed(index); // Actualiza solo el índice del día presionado
    setSelectedDay(getDates(month)[index]);
    // console.log( getDayName(selectedDay.day),':',selectedDay.number);
    // console.log(Día seleccionado: ${selectedDay.number} - ${getDayName(selectedDay.day)}'');
  };

  useEffect(() => {
    const todayIndex = getDates(month).findIndex((day) => day.number === new Date().getDate());
    setIsDayPressed(todayIndex);
  }, []);

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

  function getDates(month) {
    const year = 2024; // Cambiar el año según sea necesario
    const startDate = new Date(year, month, 1); // Adjusted based on month
    const endDate = new Date(year, month + 1, 0); // Get last day of next month

    const days = [];

    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      days.push({
        day: date.getDay(),
        number: date.getDate(),
      });
    }

    return days;
  }

  function getDayName(dayNumber) {
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    return days[dayNumber];
  }

  const handleNextMonth = () => {
    // Check for overflow (December) and reset to January
    setMonth((month + 1) % 12);
    if (month === 11) {
      setCurrentYear(currentYear + 1);
    };
  };

  const handlePreviousMonth = () => {
    // Check for overflow (December) and reset to January
    setMonth((month - 1) % 12);
    if (month === 0) {
      setCurrentYear(currentYear-1);
    }
  };

  return (
    <View style={Styles.container}>
      {/* Days */}
      <View style={{ backgroundColor: '#2C2C2E', height: Platform.OS === 'ios' ? '25%' : '30%', justifyContent: 'center', alignItems: 'center', borderBottomRightRadius: 26, borderBottomLeftRadius: 26 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignItems: 'center', marginTop: 60 }}>
          <BackBtn style={{ position: 'relative', left: 0 }} onPress={()=>handlePreviousMonth()} />
          <Text style={{ ...Styles.text, fontSize: 20 }}>{new Date(currentYear, month, 1).toLocaleDateString('en-US', { month: 'long' })} {currentYear}</Text>
          <BackBtn style={{ position: 'relative', left: 0, transform: [{ rotate: '180deg' }], }} onPress={()=>handleNextMonth()} />
        </View>

        <ScrollView 
          showsHorizontalScrollIndicator={false} 
          horizontal={true} 
          style={{ 
            flexDirection: 'row',
            width:'90%',
            marginTop: 20, 
            marginBottom: 15}}>
          {getDates(month).map((day, index) => (
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


// import { View, Dimensions, Platform} from 'react-native';
// import React, { useState, useEffect } from 'react';
// // Styles
// import Styles from '../components/Styles';
// // Components
// import Measure from '../components/Measure';

// const Measures = () => {
//   const screenWidth = Dimensions.get('window').width;
//   const screenHeight = Dimensions.get('window').height;

//   const dataCal = {
//     labels: ["Calories"],
//     data: [0.8],
//     amount: 652
//   };

//   const data = [
//     { id: 1, name: 'Stability Training', time: '10:00', labels:["Steps"], data:[0.6], amount:[6540] },
//     { id: 2, name: 'Flash Cycling', time: '20:00', labels:["Time"], data:[0.4], amount:[45] },
//     { id: 3, name: 'Running', time: '20:00', labels:["Heart"], data:[0.7], amount:[72] },
//     { id: 4, name: 'Stability Training', time: '10:00' },
//     { id: 5, name: 'End', time: '20:00' },
//   ]
//   return (
//     <View style={Styles.container}>
//       {/* Calories */}
//       <View style={{height:'20%'}}>
//         <Measure
//           data={dataCal}
//           screenWidth={screenWidth}
//           screenHeight={screenHeight / 3}
//           strokeWidth={5}
//           radius={90}
//           section={1}
//           strokeColor='255, 255, 255'
//           top={Platform.OS === 'ios' ? '115%' : '90%'}
//           text={'Active Calories'}
//           amount={`${dataCal.amount} Cal`}
//           textPosition={Platform.OS === 'ios' ? '110%' : '80%'}
//           subTextPosition={Platform.OS === 'ios' ? '60%' : '20%'}
//         />
//       </View>
//       {/* AnotherMeasures */}
//       <View style={{ flexDirection: 'row', marginTop: Platform.OS == 'ios' ? '25%' : '32%', height: '10%' }}>
//         {/* Steps */}
//         <View>
//           <Measure
//             data={dataSteps}
//             screenWidth={screenWidth / 3}
//             screenHeight={screenHeight / 3}
//             strokeWidth={5}
//             radius={55}
//             section={3}
//             strokeColor='208, 253, 62'
//             top={Platform.OS === 'ios' ? '20%' : '-10%'}
//             textPosition={Platform.OS === 'ios' ? '-20%' : '-50%'}
//             subTextPosition={Platform.OS === 'ios' ? '-20%' : '-55%'}
//             text='Steps'
//             amount={dataSteps.amount}
//           />
//         </View>

//         {/* Time */}
//         <View>
//           <Measure
//             data={dataTime}
//             screenWidth={screenWidth / 3}
//             screenHeight={screenHeight / 3}
//             strokeWidth={5}
//             radius={55}
//             section={3}
//             strokeColor='255, 36, 36'
//             top={Platform.OS === 'ios' ? '20%' : '-10%'}
//             textPosition={Platform.OS === 'ios' ? '-20%' : '-50%'}
//             subTextPosition={Platform.OS === 'ios' ? '-20%' : '-50%'}
//             text='Minutes'
//             amount={dataTime.amount}
//           />
//         </View>

//         {/* HeartRate */}
//         <View>
//           <Measure
//             data={dataHeart}
//             screenWidth={screenWidth / 3}
//             screenHeight={screenHeight / 3}
//             strokeWidth={5}
//             radius={55}
//             section={3}
//             strokeColor='231, 147, 50'
//             top={Platform.OS === 'ios' ? '20%' : '-10%'}
//             textPosition={Platform.OS === 'ios' ? '-20%' : '-50%'}
//             subTextPosition={Platform.OS === 'ios' ? '-20%' : '-50%'}
//             text='BPM'
//             amount={dataHeart.amount}
//           />
//         </View>
//       </View>
//     </View>
//   )
// }

// export default Measures