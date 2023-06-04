import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import styles from '../../styles/common.style'
import { COLORS } from '../../constants'
import Post from '../../components/Post'
import { useNavigation } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'
import { loadAllPost, loadUser } from '../../redux/action'




const Posts = () => {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadAllPost())
  }, []);
  const { user } = useSelector(state => state.auth)
  const { allPosts } = useSelector(state => state.auth)
  const navigation=useNavigation();
  const DATA=allPosts?allPosts:null
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
      <View style={{marginTop:80}}/>
      <View style={styles.container}>
        
      <Text style={styles.welcomeMessage}>Welcome {user?user.name:"user"}</Text>
      {/* <Text style={styles.welcomeMessage}>Posts</Text>
      <Text style={styles.userName}>here</Text> */}
      <View>
        <ScrollView>
        <FlatList
        data={DATA}
        renderItem={({item}) => <Post title={item.title} content={item.description} creator={item.creator} onPress={()=>{navigation.navigate('postClick',{item:item})}}/>}
        keyExtractor={item => item.id}
      />
        
        </ScrollView>
      </View>
      
      </View>
    </SafeAreaView>
  )
}



export default Posts