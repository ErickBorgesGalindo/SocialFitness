import React from 'react'
import { View, Text } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';


const Measure = ({
    data = [{ labels: [''], data: [] }],
    screenWidth = 0,
    screenHeight = 0,
    strokeWidth = 0,
    radius = 0,
    text='',
    amount='',
    textPosition = '-15%',
    subTextPosition = '-15%',
    backgroundColor = false,
    height = '30%',
    top = '50%',
    strokeColor = '208, 253, 62' }) => {
    return (
        <View>
            <ProgressChart
                data={data}
                width={screenWidth}
                height={screenHeight}
                strokeWidth={strokeWidth}
                radius={radius}
                hideLegend={true}
                chartConfig={{
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientToOpacity: 0,
                    color: (opacity = 1) => `rgba(${strokeColor}, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                style={{
                    backgroundColor: backgroundColor ? `red` : null,
                    justifyContent: 'center',
                    height: `${height}`,
                    top: `${top}`
                }}
            />
            <Text
                style={{
                    color: 'white',
                    alignSelf: 'center',
                    top: `${textPosition}`,
                    fontSize: 17,
                }}>{text}</Text>
            <Text
                style={{
                    color: 'white',
                    alignSelf: 'center',
                    top: `${subTextPosition}`,
                    fontSize: 25,
                    fontWeight: 'bold'

                }}>{amount}</Text>

        </View>
    )
}

export default Measure