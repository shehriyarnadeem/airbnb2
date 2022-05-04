import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GuestsScreen from '../screens/Guests';
import SearchResult from '../screens/SearchResult';
import HomeScreen from '../screens/Home';
import HomeTabNavigator from './HomeTabNavigator';
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Guests" component={GuestsScreen} />
        <Stack.Screen name="Feeds" component={SearchResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
