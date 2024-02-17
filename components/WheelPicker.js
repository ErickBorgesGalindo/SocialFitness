import React, { useRef } from 'react';
import { Animated, Text, View } from 'react-native';

const WheelPicker = (props) => {

  const { items, onIndexChange, itemHeight } = props;

  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }) => {
    const inputRange = [
        (index - 3) * itemHeight,
        (index - 2) * itemHeight,
        (index - 1) * itemHeight,
        index * itemHeight,
        (index + 1) * itemHeight,
    ];
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [0.6, 0.8, 1, 0.8, 0.6],
    });
    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: [0.2, 0.5, 1, 0.5, 0.2],
    });

    


    return (
      <Animated.View
        style={[
          { height: itemHeight, width:80,transform: [{ scale }], opacity },
          styles.animatedContainer,
        ]}
      >
        <Text style={styles.pickerItem}>{item}</Text>
      </Animated.View>
    );
  };

  const modifiedItems = ['', '', ...items, '', '', ''];

  const momentumScrollEnd = (event) => {
    const y = event.nativeEvent.contentOffset.y;
    const index = Math.round(y / itemHeight);
    onIndexChange(index);
  };

  return (
    <View style={{ height: itemHeight * 7 }}>
      <Animated.FlatList
        data={modifiedItems}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        snapToInterval={itemHeight}
        onMomentumScrollEnd={momentumScrollEnd}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        getItemLayout={(_, index) => ({
          length: itemHeight,
          offset: itemHeight * index,
          index,
        })}
      />
      <View style={[styles.indicatorHolder, { top: itemHeight }]}>
        <View style={[styles.indicator]} />
        <View style={[styles.indicator, { marginTop: itemHeight }]} />
      </View>
    </View>
  );
};

const styles = {
  pickerItem: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFF',
  },
  indicatorHolder: {
    position: 'absolute',
    left:'-25%',
  },
  indicator: {
    width: 120,
    height: 4,
    backgroundColor: '#D0FD3E',
  },
  animatedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default WheelPicker;