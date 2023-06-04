import { View, Text, SafeAreaView, ScrollView, FlatList,RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/common.style'
import { COLORS } from '../../constants'
import Post from '../../components/Post'
import { useNavigation } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'
import { loadAllPost, loadUser } from '../../redux/action'
import SearchBar from "react-native-dynamic-search-bar";

var etext='';
const Posts = () => {
  
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadAllPost());
  }, []);
  const { user } = useSelector(state => state.auth)
  const { allPosts } = useSelector(state => state.auth)
  const DATA=allPosts?allPosts:null
  const [filteredData, setFilteredData] =useState(DATA);

  const searchFilterFunction = (text) => {
    etext=text;
    if(text){  
        const newData = allPosts.filter(item => {
            const itemData = item.description ? item.description.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        })
        setFilteredData(newData);
    } else {
        setFilteredData(DATA);
    }
}

  const navigation=useNavigation();
  
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(loadAllPost())
    setFilteredData(DATA)
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
      
      <View style={{marginTop:55}}/>
      <View style={{minHeight:50 }}>
      <SearchBar
                    placeholder="Search here"
                    style={{borderRadius:20}}           
                    darkMode={true}
                    onPress={() => {}}
                    onChangeText={(text) => text?searchFilterFunction(text):setFilteredData(DATA)}
                  />
                  </View>
      <ScrollView refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
      <View style={styles.container}>
        
      <Text style={styles.welcomeMessage}>Welcome {user?user.name:"user"}</Text>
      {/* <Text style={styles.welcomeMessage}>Posts</Text>
      <Text style={styles.userName}>here</Text> */}
      <View>
        
        <FlatList
        data={etext?filteredData:DATA}
        renderItem={({item}) => <Post title={item.title} content={item.description} creator={item.creator} onPress={()=>{navigation.navigate('postClick',{item:item})}}/>}
        keyExtractor={item => item.id}
      />
         
        
      </View>
      
      
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}



export default Posts