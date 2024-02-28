import React, { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//Styles
import Styles from '../components/Styles';
//Components
import CustomTabBar from '../components/CustomTabBar';
import CustomSwipe from '../components/CustomSwipe';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const data =[
  {id: '1', content: '35% your daily challenge completed', title: 'Congratulations', type: 'New'},
  {id: '2', content: 'Your subscription is going to expire very soon', title: 'Attention', type: 'Event'},
  {id: '3', content: 'New activity for your workout session', title: 'New Activity',type: 'New'},
  {id: '4', content: 'New video from your trainer', title: 'New Video', type: 'New'},
  {id: '5', content: 'E', title: 'Renew your payment',type: 'Event'},
  {id: '6', content: 'F', title: 'Title6',type: 'New'},
  {id: '7', content: 'G', title: 'Title7',type: 'Event'},
  {id: '8', content: 'H', title: 'Title8',type: 'Event'},
  {id: '9', content: 'I', title: 'Title9',type: 'New'},
  {id: '10', content: 'J', title: 'Title10',type: 'Event'},
  {id: '11', content: 'K', title: 'Title11',type: 'New'},
  {id: '12', content: 'L', title: 'Title12',type: 'New'},
  {id: '13', content: 'M', title: 'Title13',type: 'Event'},
  {id: '14', content: 'N', title: 'Title14',type: 'Event'},
  {id: '15', content: 'O', title: 'Title15',type: 'New'},
  {id: '16', content: 'P', title: 'Title16',type: 'Event'},
  {id: '17', content: 'Q', title: 'Title17',type: 'Event'},
  {id: '18', content: 'R', title: 'Title18',type: 'New'},
  {id: '19', content: 'S', title: 'Title19',type: 'Event'},
  {id: '20', content: 'T', title: 'Title20',type: 'New'},
]

const NotificationScreen = () => {
  const navigation = useNavigation();
  const [isNewPressed, setIsNewPressed] = useState(true);
  const [isEventsPressed, setIsEventsPressed] = useState(false);
  const [isAllPressed, setIsAllPressed] = useState(false);
  const [lists, setlists] = useState(data);
  const [filteredData, setFilteredData] = useState(data); // Iniciar con todo el array


  const handleNewPress = () => {
    setIsNewPressed(true);
    setIsEventsPressed(false);
    setIsAllPressed(false);
    // setFilteredData(data.filter(item => item.type === 'New'));
    setFilteredData(lists.filter(item => item.type === 'New'));
  };

  const handleEventsPress = () => {
    setIsNewPressed(false);
    setIsEventsPressed(true);
    setIsAllPressed(false);
    // setFilteredData(data.filter(item => item.type === 'Event'));
    setFilteredData(lists.filter(item => item.type === 'Event'));
  };

  const handleAllPress = () => {
    setIsNewPressed(false);
    setIsEventsPressed(false);
    setIsAllPressed(true);
    setFilteredData(lists);
  };

  const deleteItem = (data, index) => {
    const arr = [...data];
    arr.splice(index, 1);
    setFilteredData(arr);
    setlists(arr)
  };

  return (
    <SafeAreaView style={Styles.container}>
      {/* Header */}
      <Text style={{ ...Styles.sectionName, marginTop: 45 }}>Notifications</Text>
      {/* TabView */}
      <View style={Styles.tabView}>
        <CustomTabBar onPress={handleNewPress} isSelected={isNewPressed} label='New' />
        <CustomTabBar onPress={handleEventsPress} isSelected={isEventsPressed} label='Events' />
        <CustomTabBar onPress={handleAllPress} isSelected={isAllPressed} label='All' />
      </View>

      <View style={{marginBottom:'40%', marginTop:'03%'}}>
        <FlatList
          data={filteredData}
          renderItem={({item, index})=> {
            return (
              <GestureHandlerRootView>
                <CustomSwipe data={item} handleDelete={() => {deleteItem(filteredData, index)}}/> 
              </GestureHandlerRootView>
            )
          }}
          ItemSeparatorComponent={() => {
            return <View style={style.separatorLine}></View>
          }}
          />
      </View>
    </SafeAreaView>
  )
}

export default NotificationScreen

const style = StyleSheet.create({
  separatorLine:{
    height: 1,
    backgroundColor:'#3A3A3C',
    width:'80%',
    alignSelf:'center',

  }
})