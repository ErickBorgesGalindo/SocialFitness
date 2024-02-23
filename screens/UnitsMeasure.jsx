import { View, Text } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
//Styles
import Styles from '../components/Styles';
//Components
import BackBtn from '../components/BackBtn';
import RadioButton from '../components/CustomRadioBtn';

const UnitsMeasure = () => {
    const [isMetricPressed, setIsMetricPressed] = useState(true);
    const [isImperialPressed, setIsImperialPressed] = useState(false);
    const navigation = useNavigation();

    const handleMetricPress = () => {
        setIsMetricPressed(true);
        setIsImperialPressed(false);
        console.log('Apachurraste Metric');
    };

    const handleImperialPress = () => {
        setIsMetricPressed(false);
        setIsImperialPressed(true);
        console.log('apachurraste Imperial');
    };

  return (
    <View style={Styles.container}>
    {/* Header */}
    <Text style={{ ...Styles.sectionName, marginTop: 45 }}>Units of Measure</Text>
    <BackBtn style={{ top: '05%' }} onPress={() => navigation.goBack()} />

    {/* options */}
    <View style={{top:'10%'}}>
        <RadioButton
            onPress={handleMetricPress}
            isSelected={isMetricPressed}
            mainText='Metric'
            subText='Metric system to show your measures'
            topPosition='80%'
            pricePosition={15} />
    </View>
    <View style={{top:'25%'}}>
        <RadioButton
            onPress={handleImperialPress}
            isSelected={isImperialPressed}
            mainText='Imperial'
            subText='Imperial system to show your measures'
            topPosition='95%'
            pricePosition={70} />
    </View>
      
    </View>
  )
}

export default UnitsMeasure