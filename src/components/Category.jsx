import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Categories} from '../data/Categories';
import {useNavigation} from '@react-navigation/native';

const Category = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {Categories?.map(item => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate('ProductScreen')}
          style={styles.category}>
          <Image style={styles.imgStyle} source={item.image} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  category: {
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  imgStyle: {
    width: 50,
    height: 50,
  },
  title: {
    color: '#2c4341',
  },
});

export default Category;
