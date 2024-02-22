import { View, Text, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
//Styles
import Styles from '../components/Styles';
//Components
import CardOptions from '../components/CardOptions';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const userPremium = false;

  return (
    <View style={Styles.container}>
      <View>
        {/* ProfileView */}
        <View style={Styles.profileView}>
          {/* ImageProfile */}
          <View style={userPremium ? Styles.imageProfileViewPremium : Styles.imageProfileView}>
            <Image style={Styles.profileImage} source={require('../images/trainer.jpg')} />
          </View>
          {/* divisionLine */}
          <View style={{ borderLeftWidth: 2, borderLeftColor: '#2C2C2E', }} />
          {/* joinedTime */}
          <View style={{ justifyContent: 'center', marginRight: 20 }}>
            <View>
              <Text style={Styles.joinedTxt}>Joined</Text>
              <Text style={Styles.text}>2 days ago</Text>
            </View>
          </View>
        </View>
        {/* profileName */}
        <View style={{ marginBottom: '10%' }}>
          <View style={{ width: '80%', marginTop: 20, marginLeft: 20 }}>
            <Text style={Styles.header}>SARAH WEGAN</Text>
          </View>
        </View>
        {/* profileOptions */}
        <View style={{ alignItems: 'center' }}>
          <CardOptions optionName={'Edit Profile'} onPress={() => navigation.navigate('ProfileEdit')} />
          <CardOptions optionName={'Privacy Policy'} onPress={() => navigation.navigate('PrivacyPolicy')} />
          <CardOptions optionName={'Settings'} onPress={() => console.log('Settings')} />
        </View>
        {/* signOut */}
        <View style={{ alignItems: 'center', marginTop: Platform.OS == 'ios' ? '20%' : '12%' }}>
          <CardOptions optionName={'Sign Out'} signOut={true} onPress={() => console.log('Sign Out')} />
        </View>
      </View>
    </View>
  )
}

export default ProfileScreen