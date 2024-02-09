import { Pressable, StyleSheet, View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import React, { useState, useRef, useEffect } from 'react';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
//Styles
import Styles from '../components/Styles';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//Components

const VideoScreen = () => {
    const video = useRef(null);
    const [status, setStatus] = useState({});
    const navigation = useNavigation();
    const [isPlaying, setIsPlaying] = useState(false);
    const [playbackPosition, setPlaybackPosition] = useState(0);
    const [playbackDuration, setPlaybackDuration] = useState(0);
    const [muted, setMuted] = useState(false);
  
    const handlePlayPause = async () => {
      try {
        if (video.current) {
          isPlaying ? await video.current.pauseAsync() : await video.current.playAsync();
          setIsPlaying(!isPlaying);
        };
      } catch (error) {
        console.log('Error while tryng to play/pause video: ', error);
      };
    };
  
    useEffect(() => {
      const getVideoStatus = async () => {
        const newStatus = await video.current.getStatusAsync();
        setStatus(newStatus);
      };
  
      getVideoStatus();
    }, []);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setPlaybackPosition(status.positionMillis);
        setPlaybackDuration(status.durationMillis);
      }, 100);
      return () => clearInterval(interval);
    }, [status.positionMillis]);
  
    const handleSliderChange = (value) => {
      if (value < playbackDuration) {
        video.current.setPositionAsync(value);
        setPlaybackPosition(value);
      }
    };
  
    const toggleMute = () => {
      setMuted(!muted);
    };
  
    const formatTime = (millis) => {
      const seconds = Math.floor(millis / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
  
      const formattedSeconds = seconds % 60;
      const formattedMinutes = minutes % 60;
      const formattedHours = hours > 0 ? `${hours}:` : '';
  
      return `${formattedHours}${formattedMinutes}:${formattedSeconds < 10 ? '0' : ''}${formattedSeconds}`;
    }
  
  
    return (
      <View style={Styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={require("../videos/demo.mp4")}
          // source={{uri:"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
          useNativeControls={false}
          resizeMode='cover'
          isMuted={muted}
          isLooping
          onPlaybackStatusUpdate={setStatus}
        />
  
  
        <Pressable style={styles.backContainer} onPress={() => navigation.goBack()}>
          <AntDesign name="left" style={{ color: '#fff', fontSize: 24 }} />
        </Pressable>
  
        <View style={styles.buttons}>
          <Pressable onPress={() => video.current.setIsLoopingAsync(!status.isLooping)}>
            <Ionicons name="repeat" size={24} color={status.isLooping ? '#D0FD3E' : 'white'} />
          </Pressable>
  
          <Pressable>
            <AntDesign name="stepbackward" size={24} color="white" />
          </Pressable>
  
          <Pressable style={styles.playBtn} onPress={handlePlayPause}>
            {isPlaying ?
              <AntDesign name="pausecircle" size={50} color="white" /> : <AntDesign name="play" size={50} color="white" />}
          </Pressable>
  
          <Pressable>
            <AntDesign name="stepforward" size={24} color="white" />
          </Pressable>
  
          <Pressable onPress={toggleMute}>
            <Ionicons name={muted ? "volume-mute" : "volume-medium-sharp"} size={24} color="white" />
          </Pressable>
        </View>
  
  
        <Text style={styles.maintxt}>Lower Body Strength</Text>
        <View style={styles.progressContainer}>
          <Slider
            style={{ ...styles.progressBar }}
            minimumValue={0}
            maximumValue={playbackDuration}
            value={playbackPosition}
            onValueChange={handleSliderChange}
            minimumTrackTintColor={'#D0FD3E'}
            maximumTrackTintColor={'rgba(28,28,30,0.5)'}
            thumbTintColor={'transparent'}
          />
        </View>
  
        <View style={styles.timeTxt}>
          <Text style={styles.progressText}> {formatTime(playbackPosition)} </Text>
          <Text style={styles.progressText}> {formatTime(playbackDuration)}</Text>
        </View>
  
        <View>
  
        </View>
      </View>
    )
  }

export default VideoScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      overflow: 'hidden',
      backgroundColor: '#1C1C1E',
    },
  
    video: {
      flex: 1,
      alignSelf: 'auto'
    },
  
    backContainer: {
      position: 'absolute',
      top: '10%',
      left: '5%',
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      borderRadius: 20,
    },
  
    playBtn: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    progressContainer: {
      position: 'absolute',
      top: '84%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 10,
      marginBottom: 10,
    },
    progressText: {
      fontSize: 16,
      color: 'white',
    },
    progressBar: {
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
    },
  
    maintxt: {
      position: 'absolute',
      top: '82%',
      left: '5%',
      fontSize: 20,
      fontWeight: 800,
      color: '#fff',
    },
  
    timeTxt: {
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      top: '88%',
      width: '95%',
      marginHorizontal: 10,
      marginBottom: 10,
    },
    buttons: {
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      top: '89%',
      left: '15%',
      width: '65%',
      marginHorizontal: 10,
      marginBottom: 10,
    }
  })
  