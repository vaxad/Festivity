import { View, Text,Image, TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import { COLORS,FONT,SIZES } from '../../constants'

const PostClick = () => {
  return (
    <View>
      <Image 
      source={require('../../assets/images/kemal.jpg')}
      />
      <Text>Title</Text>
      <Text>Venue</Text>
      <Text>Date,Time</Text>

      <Text>More Information</Text>
      <Text>Venue</Text>
        

      <Button>
        <Text>Request to join</Text>
      </Button>
    </View>
  )
}



export default PostClick