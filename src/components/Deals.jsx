import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RecommentProduct from '../assets/recommend.jpg';
const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reccomended deal for you</Text>
      <Image source={RecommentProduct} style={styles.img} />
      <View style={styles.section}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.offDealBtn}>
            <Text style={styles.offDeal}>%18 off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.disCountPrice}>869$</Text>
          <Text style={styles.actualPrice}>1,869$</Text>
        </View>
        <Text style={styles.productName}>Fossil gen 6 smartwatch review </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.allDeals}>See All Deals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    paddingHorizontal: 10,
    color: '#000000',
    fontWeight: 'bold',
  },
  img: {
    height: 250,
    width: '100%',
    marginVertical: 10,
  },
  section: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  offDealBtn: {
    backgroundColor: '#be0201',
    width: 60,
    padding: 5,
    borderRadius: 3,
    alignItems: 'center',
  },
  offDeal: {
    fontSize: 12,
    color: '#fff',
  },
  deal: {
    color: '#be0201',
    fontWeight: '600',
    marginLeft: 6,
    fontSize: 12,
  },
  disCountPrice: {
    color: '#000000',
    fontSize: 16,
    marginVertical: 5,
  },
  actualPrice: {
    fontSize: 10,
    marginLeft: 7,
    textDecorationLine: 'line-through',
  },
  productName: {
    color: '#000000',
    fontSize: 14,
  },
  allDeals: {
    color: '#017185',
    marginVertical: 10,
    fontSize: 14,
  },
});

export default Deals;
