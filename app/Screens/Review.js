import { View, Text } from 'react-native'
import React from 'react'
import {AirbnbRating, Rating} from 'react-native-ratings'


export default function Review(){
    return(
        <View>
            <Text style={{fontsize:28,color:"black",
            textAlign:"center",marginVertical:20}}
            >Event Ratings</Text>
            <AirbnbRating reviews={["Poor","Very Bad","Bad","Neutral","Good","Very Good","Excellent"]}
            count={7} 
            defaultRating={3}
            selectedColor="Golden"
            reviewColor='Golden'
            size={25}
            showRating={true}
            ratingContainerStyle={{marginVertical:20}}
            onFinishRating={(rating)=>alert(rating)}/>
        </View>
    )
}