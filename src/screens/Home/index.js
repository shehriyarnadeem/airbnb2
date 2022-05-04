import {View, Text, ImageBackground, Pressable, navigation} from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
     <Pressable
         style={styles.searchButton}
          onPress={() => navigation.navigate('Guests')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpeg')}
        style={styles.image}>
        <Text style={styles.title}>Go near</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore Btn clicked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
