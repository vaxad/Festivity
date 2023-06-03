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
        <Post title="Rudra" content="hjtjhhhgj" onPress={()=>{}}/>
      </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginBottom: 10,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postContent: {
    fontSize: 16,
  },
});


export default Posts