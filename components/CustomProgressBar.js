import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ progress, position }) => {
    
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{position}</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progress * 10}%` }]} />
        <View style={styles.progressEmpty} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,

  },
  number: {
    color: 'white',
    marginRight: 10,
  },
  progressBar: {
    flexDirection: 'row',
    height: 5,
    width: 193,
    borderRadius: 20,
    overflow: 'hidden',
  },
  progressFill: {
    backgroundColor: 'white',
    borderRadius: 20,
  },
  progressEmpty: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
});

export default ProgressBar;
