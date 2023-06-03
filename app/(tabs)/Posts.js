import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../../styles/common.style'
import { COLORS } from '../../constants'
import Post from '../../components/common/cards/Post'

import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const App = () => {
  const [imageUri, setImageUri] = useState(null);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log('Error selecting image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={selectImage}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.buttonImage} />
        ) : (
          <Image source={require('./path/to/default/image.png')} style={styles.buttonImage} />
        )}
      </TouchableOpacity>
    </View>
  );
};


export default Posts