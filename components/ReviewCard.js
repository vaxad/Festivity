import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import { useSelector } from 'react-redux'

const ReviewCard = ({review}) => {
  return (
    <SafeAreaView style={{flex:1,padding:20, marginBottom:10, backgroundColor:COLORS.lightWhite}}>
        <TouchableOpacity>
            <View style={{borderWidth:1, borderRadius:SIZES.large, padding:20}}>
      <Text>stars: {review.stars}</Text>
      <Text>description: {review.description}</Text>
      <Text>about: {review.about}</Text>
      <Text>by: {review.by}</Text>
      <Text>likes: {review.likes}</Text>
      </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ReviewCard