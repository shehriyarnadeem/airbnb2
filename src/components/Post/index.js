import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './style';

export default function Post(props) {
  const post = props.posts;
  const days = 7;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: 'https://picsum.photos/id/237/200/300'}}
      />
      {/* Bed & Bedroom  */}
      <Text style={styles.bedrooms}>
        {' '}
        {/* {post.bed} bed {post.bedroom} bedroom */}
      </Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      {/*  Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.price}> ${post.newPrice} </Text>/ night
      </Text>

      {/*  Total price */}
      <Text style={styles.totalPrice}>${post.newPrice * days} total</Text>
    </View>
  );
}
