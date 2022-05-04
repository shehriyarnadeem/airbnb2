import React, {useState} from 'react';
import {View, Text, Pressable, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './style.js';

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const navigation = useNavigation();
  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Adults</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>

            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() => navigation.navigate('SearchResults')}
        style={{
          marginBottom: 40,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f15454',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 20,
        }}>
        <Text style={{fontSize: 20, color: '#474747'}}>Search results</Text>
      </Pressable>
    </View>
  );
};

export default GuestsScreen;
