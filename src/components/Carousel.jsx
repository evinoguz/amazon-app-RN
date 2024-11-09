import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {CarouselData} from '../data/CarouselData.js';

const Carousel = () => {
  return (
    <View style={styles.container}>
      <Swiper
        showsPagination={false}
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={1.5}
        style={styles.wrapper}>
        {CarouselData?.map((item, i) => (
          <View key={i}>
            <Image source={item.image} style={styles.img} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 300,
  },
  img: {
    width: '100%',
    height: 250,
  },
  container: {
    position: 'relative',
  },
});

export default Carousel;
