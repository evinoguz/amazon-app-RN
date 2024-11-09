import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ServiceCard = ({item}) => {
  return (
    <View style={styles.recentContainer}>
      <Text style={styles.recentTitle}>{item.title}</Text>
      <Image style={styles.recentImage} source={item.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  recentContainer: {
    backgroundColor: '#fff',
    marginLeft: 8,
    width: 140,
    padding: 5,
    borderRadius: 5,
  },
  recentTitle: {
    fontSize: 13,
    marginBottom: 8,
    color: '#000000',
  },
  recentImage: {
    width: '100%',
    height: 130,
  },
});

export default ServiceCard;
