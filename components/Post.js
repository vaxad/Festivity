//import { View, Text } from 'react-native'
import React from 'react'
import { Text, TouchableOpacity, StyleSheet, ImageBackground, View } from 'react-native';
import { COLORS, FONT, SIZES } from '../constants';

const Post = ({ title, content, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => onPress()}>
        <ImageBackground
          source={require('../assets/images/holi.jpg')} // Replace with the path to your image
          style={styles.buttonImage}
          borderRadius={20}


        >
          <Text style={styles.buttonText}>{title}</Text>
          <Text style={styles.buttonsText} numberOfLines={3}>{content}</Text>
        </ImageBackground>
      </TouchableOpacity>
      {/* <Card>
        style={{
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          opacity: '50%',


        }}
      </Card> */}



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
  buttonText: {
    textShadowOffset: {width:3,heigh:1},
    textShadowColor:'black',
    textShadowRadius:2,
    
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    marginTop: -6,

  },
  buttonsText: {
    textShadowOffset: {width:3,heigh:1},
    textShadowColor:'black',
    textShadowRadius:2,
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
    

    // left:-18,
    width: 336,
    height: 206,
    right: 16,
    top: 0,
    paddingTop: 130,
    paddingLeft: 10,



  },


});


export default Post