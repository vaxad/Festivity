import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import styles from '../../styles/common.style'
import { COLORS } from '../../constants'
import Post from '../../components/Post'
import { useSelector } from 'react-redux'


const Posts = () => {
  
const { user } = useSelector(state => state.auth)
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
      <View style={{marginTop:70}}/>
      <View style={styles.container}>
      {/* <Text style={styles.welcomeMessage}>Posts</Text>
      <Text style={styles.userName}>here</Text> */}
      <View>
        <ScrollView>
        <Post title={user?user.name:"rudra"} content="hjtjhhhgj" onPress={()=>{}}/>
        <Post title="Rudra" content="hjtjhhhgj" onPress={()=>{}}/>
        <Post title="Rudra" content="hjtjhhhgj" onPress={()=>{}}/>
        <Post title="Rudra" content="hjtjhhhgj" onPress={()=>{}}/>
        <Post title="Rudra" content="hjtjhhhgj" onPress={()=>{}}/>
        <Post title="Rudra" content="hjtjhhhgj" onPress={()=>{}}/>
        <Post title="Rudra" content="hjtjhhhgj" onPress={()=>{}}/>
        <Post title="Rudra" content="hjtjhhhgj" onPress={()=>{}}/>
        </ScrollView>
      </View>
      
      </View>
    </SafeAreaView>
  )
}



export default Posts