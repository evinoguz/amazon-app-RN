import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ProductData} from '../data/ProductData';
import ProductCard from '../components/ProductCard';

const ProductScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.tagLine}>
          Price and other details may vary based on product aside and colour
        </Text>
        {ProductData?.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  tagLine: {
    fontSize: 11,
    color: 'grey',
  },
});

export default ProductScreen;
