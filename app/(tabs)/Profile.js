import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../../styles/common.style'
import { COLORS } from '../../constants'
import { Image } from 'react-native'

const Profile = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
    <View style={{marginTop:90}}/>
      <View style={styles.container}>
      <Text style={styles.welcomeMessage}>Profile</Text>
      <Image 
      source={require('../../assets/images/kemal.jpg')}  
      style={{width: 400, height: 400, borderRadius: 400/ 2}} 
      />
      
       
      <Text style={styles.userName}>Username</Text>

      </View>
    </SafeAreaView>
  )
} 

export default Profile