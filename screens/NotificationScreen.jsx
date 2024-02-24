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
  {id: '1', content: '35% your daily challenge completed', title: 'Congratulations'},
  {id: '2', content: 'Your subscription is going to expire very soon', title: 'Attention',},
  {id: '3', content: 'New activity for your workout session', title: 'New Activity',},
  {id: '4', content: 'New video from your trainer', title: 'New Video',},
  {id: '5', content: 'E', title: 'Renew your payment',},
  {id: '6', content: 'F', title: 'Title6',},
  {id: '7', content: 'G', title: 'Title7',},
  {id: '8', content: 'H', title: 'Title8',},
  {id: '9', content: 'I', title: 'Title9',},
  {id: '10', content: 'J', title: 'Title10',},
  {id: '11', content: 'K', title: 'Title11',},
  {id: '12', content: 'L', title: 'Title12',},
  {id: '13', content: 'M', title: 'Title13',},
  {id: '14', content: 'N', title: 'Title14',},
  {id: '15', content: 'O', title: 'Title15',},
  {id: '16', content: 'P', title: 'Title16',},
  {id: '17', content: 'Q', title: 'Title17',},
  {id: '18', content: 'R', title: 'Title18',},
  {id: '19', content: 'S', title: 'Title19',},
  {id: '20', content: 'T', title: 'Title20',},
]

const NotificationScreen = () => {
  const navigation = useNavigation();
  const [isNewPressed, setIsNewPressed] = useState(true);
  const [isEventsPressed, setIsEventsPressed] = useState(false);
  const [isAllPressed, setIsAllPressed] = useState(false);
  const [lists, setlists] = useState(data);

  const handleNewPress = () => {
    setIsNewPressed(true);
    setIsEventsPressed(false);
    setIsAllPressed(false);
  };

  const handleEventsPress = () => {
    setIsNewPressed(false);
    setIsEventsPressed(true);
    setIsAllPressed(false);
  };

  const handleAllPress = () => {
    setIsNewPressed(false);
    setIsEventsPressed(false);
    setIsAllPressed(true);
  };

  const deleteItem = (index) => {
    const arr = [...lists];
    arr.splice(index, 1);
    setlists(arr);
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
          data={lists}
          renderItem={({item, index})=> {
            return (
              <GestureHandlerRootView>
                <CustomSwipe data={item} handleDelete={() => {deleteItem(index)}}/> 
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