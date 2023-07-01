//import { View, Text } from 'react-native'
import React from 'react'
import { Text, TouchableOpacity, StyleSheet, ImageBackground, View } from 'react-native';
import { COLORS, FONT, SIZES } from '../constants';
import i1 from '../assets/images/1.jpg'
import i2 from '../assets/images/2.jpg'
import i0 from '../assets/images/0.jpg'
import i3 from '../assets/images/3.jpg'
import i4 from '../assets/images/4.jpg'
import i5 from '../assets/images/5.jpg'
import i6 from '../assets/images/6.jpg'
import i7 from '../assets/images/7.jpg'
import i8 from '../assets/images/8.jpg'

var ctr=0;
var rev=0;
var img=i0;
const Post = ({ title, content, onPress }) => {
  const imagepick=()=>{
    if(ctr==8){
      rev=1;
    }
    if(ctr==0){
      rev=0;
    }
    if(rev==0){
      ctr=ctr+1
    }else{
      ctr=ctr-1
    }
    switch(ctr){
      case 0:
        return i0;
        break;
        case 1:
        return i1;
        break;
        case 2:
        return i2;
        break;
        case 3:
        return i3;
        break;
        case 4:
        return i4;
        break;
        case 5:
        return i5;
        break;
        case 6:
        return i6;
        break;
        case 7:
        return i7;
        break;
        case 8:
        return i8;
        break;
        
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => onPress()}>
        <View style={{marginHorizontal:10}}>
        <ImageBackground
          source={imagepick()} // Replace with the path to your image
          style={styles.buttonImage}
          borderRadius={20}


        >
        <View style={styles.overlay} borderRadius={20} />
          <Text style={styles.buttonText}>{title}</Text>
          <Text style={styles.buttonsText} numberOfLines={3}>{content}</Text>
        </ImageBackground>
        </View>
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
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
    padding:15,
    // left:-18,
    width:360,
    height: 206,
    paddingTop: 130,
    
  },


});


export default Post