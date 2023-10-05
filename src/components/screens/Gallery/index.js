import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const Gallery = ({navigation, route}) => {
  const {images} = route?.params || {};

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={images}
        style={{marginBottom: 24, paddingHorizontal: 32}}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={styles.image} />
        )}></FlatList>
      <TouchableOpacity onPress={onBack} style={styles.backContainer}>
        <Image
          source={require('../../../assets/back-arrow.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Gallery;
