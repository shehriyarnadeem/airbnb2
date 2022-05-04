import React from 'react';
import {View, FlatList} from 'react-native';
import Post from '../../components/Post';
import feeds from '../../../assets/data/feed';

const SearchResultsScreen = () => {
  return (
    <View>
      <FlatList data={feeds} renderItem={({item}) => <Post posts={item} />} />
    </View>
  );
};

export default SearchResultsScreen;
