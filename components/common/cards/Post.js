//import { View, Text } from 'react-native'
import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

const Post = ({ title, content, onPress }) => {
    return (
      <TouchableOpacity style={styles.postContainer} onPress={onPress}>
        <Text style={styles.postTitle}>{title}</Text>
        <Text style={styles.postContent}>{content}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    postContainer: {
      backgroundColor: 'lightgray',
      padding: 10,
      marginBottom: 10,
    },
    postTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    postContent: {
      fontSize: 16,
    },
  });

export default Post