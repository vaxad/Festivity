import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Stars from 'react-native-stars'
import { COLORS, FONT, SIZES } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import bg from '../assets/images/3.jpg'
import styles from '../styles/common.style'
import { getUser } from '../redux/action'

const ReviewCard = ({review}) => {
  
  const { token } = useSelector(state => state.auth)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getUser(review.by,token));
  }, []);
  const { userFocus } = useSelector(state => state.auth)
  const [stars,setStars]=useState(review.stars)
  return (
    <SafeAreaView style={{flex:1,padding:20, marginBottom:10, backgroundColor:COLORS.lightWhite,minWidth:400,marginHorizontal:20,alignSelf:'center'}}>
        <TouchableOpacity>
        <ImageBackground source={bg} borderRadius={SIZES.large} blurRadius={5}>
        <View style={{...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0.5,0.5,0.5,0)'}} borderRadius={20} />
          <View style={{padding:20}}>
            
      <Stars
    half={false}
    disabled={true}
    default={stars}
    // update= {(val)=>{setStars(val)}}
    spacing={4}
    starSize={22}
    count={5}
    fullStar={require('../assets/icons/starFilledW.png')}
    emptyStar={require('../assets/icons/starEmptyW.png')}/>
      <Text style={{color:COLORS.lightWhite, fontFamily:FONT.medium, marginVertical:10}}>{review.description}</Text>
      {/* <Text>about: {review.about}</Text> */}
      {/* <Text>likes: {review.likes}</Text> */}
      
      <Text style={{color:COLORS.lightWhite,fontFamily:FONT.regular, alignSelf:'flex-end'}}>By {userFocus?userFocus.name:""}</Text>
      </View>
      </ImageBackground>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ReviewCard