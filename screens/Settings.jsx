import { View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
//Styles
import Styles from '../components/Styles';
//Components
import BackBtn from '../components/BackBtn';
import CardOptions from '../components/CardOptions';

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      {/* Header */}
      <Text style={{ ...Styles.sectionName, marginTop: 45 }}>Settings</Text>
      <BackBtn style={{ top: '05%' }} onPress={() => navigation.goBack()} />

      {/* settingsCards */}
      <View style={{ alignItems: 'center', top:'10%' }}>
          <CardOptions optionName={'Units of Measure'} onPress={() => navigation.navigate('UnitsMeasure')} />
          <CardOptions optionName={'Notifications'} onPress={() => navigation.navigate('Notifications')} />
          <CardOptions optionName={'Language'} onPress={() => navigation.navigate('Settings')} />
          <CardOptions optionName={'Contact Us'} onPress={() => navigation.navigate('Settings')} />
      </View>
    </View>
  )
}

export default Settings