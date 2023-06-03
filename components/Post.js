//import { View, Text } from 'react-native'
import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

const Post= () => {
        return (
            <View style={styles.container}>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log('Button Pressed!')}>
                <Image
                  source={require('./path/to/image.png')} // Replace with the path to your image
                  style={styles.buttonImage}
                />
              </TouchableOpacity>
              <Text style={styles.buttonText}>Click Me</Text>
            </View>
    );
  };
  
    
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      width: 200,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgray',
    },
    buttonImage: {
      width: '100%',
      height: '100%',
    },
  });
  

export default Post