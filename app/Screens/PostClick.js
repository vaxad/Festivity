import { View, Text,Image, TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import { COLORS,FONT,SIZES } from '../../constants'

const PostClick = ({ route, navigation }) => {
  
  const { item} = route.params;
  return (
    <View>
      <Image 
      source={require('../../assets/images/kemal.jpg')}
      />
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{item.venue}</Text>

      <Text>{item.date}</Text>
      <Text>{item.likes}</Text>
        

      <Button>
        <Text>Request to join</Text>
      </Button>
    </View>
  )
}



export default PostClick