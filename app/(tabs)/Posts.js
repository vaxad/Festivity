import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../../styles/common.style'
import { COLORS } from '../../constants'
import Post from '../../components/common/cards/Post'

const Posts = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
      <View style={{marginTop:90}}/>
      <View style={styles.container}>
      <Text style={styles.welcomeMessage}>Posts</Text>
      <Text style={styles.userName}>here</Text>
      <View>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default Posts