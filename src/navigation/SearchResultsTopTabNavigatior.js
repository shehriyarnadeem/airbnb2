import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResult';

const Tab = createMaterialTopTabNavigator();

export default function SearchResultsTopTabNavigatior() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'list'} component={SearchResults} />
      <Tab.Screen name={'map'} component={SearchResults} />
    </Tab.Navigator>
  );
}
