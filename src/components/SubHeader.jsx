import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/dist/Feather';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';

const SubHeader = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={['#bbe8ef', '#bdeee9', '#c3f1e3']}>
      <Feather name="map-pin" size={16} color="#000000" />
      <Text style={styles.deliver}>Delive to Turkey - 9856</Text>
      <SimpleLineIcons name="arrow-down" color="#000000" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13,
  },
  deliver: {
    color: '#2c4341',
    fontSize: 13,
    paddingHorizontal: 6,
  },
});

export default SubHeader;
