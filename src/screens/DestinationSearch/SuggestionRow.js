import React from 'react';
import {View, TextInput, Text, FlatList, Pressable} from 'react-native';
import styles from './styles.js';
import SuggestionRow from './SuggestionRow';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearchScreen = props => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'YOUR API KEY',
          language: 'en',
        }}
      />
    </View>
  );
};

export default DestinationSearchScreen;
