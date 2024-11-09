import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import PrimeLogo from '../assets/prime-logo.png';
import {getRating} from '../utils/helpers';

const ProductCard = ({item}) => {
  return (
    <View style={styles.section}>
      <View style={styles.product}>
        <Image source={item.image} style={styles.productImg} />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.sponsored}>Sponsored</Text>
        <Text style={styles.productName}>{item.productName}</Text>
        <View style={styles.row}>
          <Text style={styles.rating}>{item.rating}</Text>
          {getRating(item.rating)}
          <Text style={styles.ratingCount}>{item.ratingCount}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.price}>{item.price}$</Text>
          <Text style={styles.crossout}>{item.crossOutText}$</Text>
        </View>
        <Text style={styles.cashback}>
          {' '}
          Up to 5% cashback with Amazon Pay Credit card
        </Text>
        <Image source={PrimeLogo} style={styles.logo} />
        <Text style={styles.cashback}>FREE Delivery by {item.deliveryBy}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    borderWidth: 1,
    borderColor: '#dddddd',
    flexDirection: 'row',
    marginVertical: 15,
  },
  product: {
    width: '40%',
    backgroundColor: '#dddddd',
    justifyContent: 'center',
  },
  productImg: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  productInfo: {
    width: '60%',
    padding: 10,
  },
  sponsored: {
    fontSize: 11,
    color: '#000000',
  },
  productName: {
    fontSize: 12,
    color: '#000000',
    lineHeight: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  rating: {
    fontSize: 10,
    color: '#017185',
    marginRight: 5,
  },
  ratingCount: {
    fontSize: 10,
    color: '#017185',
    marginLeft: 5,
  },
  price: {
    fontSize: 16,
    color: '#000000',
    marginRight: 5,
  },
  crossout: {
    fontSize: 10,
    color: 'grey',
    textDecorationLine: 'line-through',
  },
  cashback: {
    fontSize: 9,
    marginVertical: 3,
  },
  logo: {
    width: 42,
    height: 16,
    marginVertical: 3,
  },
});

export default ProductCard;
