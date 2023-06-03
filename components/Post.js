//import { View, Text } from 'react-native'
import React from 'react'
import {Text,TouchableOpacity,StyleSheet, ImageBackground,View} from 'react-native';
import { COLORS, FONT, SIZES } from '../constants';

const Post= ({title,content,onPress}) => {
        return (
          <View style={styles.container}>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log('Button Pressed!')}>
                <ImageBackground
                  source={require('../assets/images/kemal.jpg')} // Replace with the path to your image
                  style={styles.buttonImage}
                  borderRadius={20}
                  
                >
                <Text style={styles.buttonText}>{title}</Text>
                <Text style={styles.buttonsText} numberOfLines={3}>{content}</Text>
                </ImageBackground>
              </TouchableOpacity>
              
              
              
            
            </View>
           
    );
  };
  
    
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText:{
      
        fontFamily: FONT.bold,
      fontSize: SIZES.xLarge,
      color: COLORS.white,
      marginTop: -6,
     
      },
      buttonsText:{
        fontFamily: FONT.medium,
        fontSize: SIZES.small,
        color: COLORS.white,
        
      },
    
    buttonContainer: {
      
      // width: 400,
      // height: 200,
      
      // // justifyContent: 'center',
      // // alignItems: 'center',
      // backgroundColor: 'grey',
      // padding: 20,
      
    },
    buttonImage: {
      
      left:-18,
      width: 325,
      height: 206,
      top: -7,
      paddingTop: 130,
      paddingLeft:10,
      
      
      
    },
    
    
  });
  

export default Post