import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native'
import Stars from 'react-native-stars'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { Component,useState } from 'react';
import Input from "../../components/Input";
import Button from '../../components/Button';
import styles from '../../styles/common.style';
import { COLORS, FONT, SIZES } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from '../../redux/action';
const Review = ({ route, navigation }) => {
  const {item}=route.params;
  //.log(item);
  const dispatch=useDispatch();
  navigation.setOptions({ headerTitle: "" })
    const [stars,setStars]=useState(0)
    const [review,setReview]=useState("")
    const { token } = useSelector(state => state.auth)

    const handleSubmit=()=>{
      //.log(review);
      const formdata={
        "stars":stars,
        "description":review
      };
      dispatch(addReview(formdata,item.creator,token))
      navigation.pop();
    }
  return (
    <View style={{flex:1, backgroundColor:COLORS.lightWhite}}>
      <ImageBackground style={{flex:1}} blurRadius={10} source={require('../../assets/images/1.jpg')}>
      <View style={style.overlay} />
      <ScrollView style={{marginHorizontal:15, marginTop:100}}>
        <View style={style.container}>
            <Text style={[styles.welcomeMessage,{alignSelf:'center'}]}>Feedback about {item.title}</Text>
    <Stars
    half={false}
    default={stars}
    update= {(val)=>{setStars(val)}}
    spacing={4}
    starSize={40}
    count={5}
    fullStar={require('../../assets/icons/starFilled.png')}
    emptyStar={require('../../assets/icons/starEmpty.png')}/>
    
    <Input
            keyboardType="text"
            multi={true}
            numLines={18}
            onChangeText={setReview}
            value={review}
            onFocus={()=>{}}
            label=""
            placeholder="Tell about your experience in this events"
          
          />

    <Button title="Submit" on onPress={handleSubmit}/>
    </View>
</ScrollView>
</ImageBackground>
</View>
  )
}

const style = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  container: {
    alignContent:'center'
  },
  buttonText: {
    marginTop:10,
    marginVertical:5,
    marginHorizontal:10,
    textShadowOffset: {width:3,heigh:1},
    textShadowColor:'black',
    textShadowRadius:2,
    marginBottom:10,
    marginLeft:20,
    fontFamily: FONT.medium,
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    marginTop: -6,

  },

});


export default Review