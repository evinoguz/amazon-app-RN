import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import AmazonPay from '../assets/amazon-pay.png';
import ScanQR from '../assets/scan-qr.jpeg';
import SendMoney from '../assets/send-money.jpg';
import PayBills from '../assets/pay-bills.jpeg';
import {RecentSearchData} from '../data/RecentSearchData';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{paddingRight: 20}}>
      <View style={styles.serviceContainer}>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image source={AmazonPay} style={styles.img} />
            <Text style={styles.title}>Amazon Pay</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image source={ScanQR} style={styles.img} />
            <Text style={styles.title}>Scan QR</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image source={SendMoney} style={styles.img} />
            <Text style={styles.title}>Send Pay</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image source={PayBills} style={styles.img} />
            <Text style={styles.title}>Pay Bills</Text>
          </View>
        </View>
      </View>
      {RecentSearchData?.map(item => (
        <ServiceCard item={item} key={item.id} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -80,
    paddingHorizontal: 10,
  },
  serviceContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    padding: 10,
    alignItems: 'center',
    paddingTop: 15,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  title: {
    fontSize: 10,
    color: '#000000',
    marginTop: 2,
  },
});

export default Services;
