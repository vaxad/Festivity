import { View, Text, SafeAreaView, ScrollView, FlatList,RefreshControl, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/common.style'
import { COLORS, FONT, SIZES } from '../../constants'
import Post from '../../components/Post'
import { useNavigation } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'
import { loadAllPost, loadReviews, loadUser } from '../../redux/action'
import SearchBar from "react-native-dynamic-search-bar"
import i1 from '../../assets/images/1.jpg'
import i2 from '../../assets/images/2.jpg'
import i0 from '../../assets/images/0.jpg'
import i3 from '../../assets/images/3.jpg'
import i4 from '../../assets/images/4.jpg'
import i5 from '../../assets/images/5.jpg'
import i6 from '../../assets/images/6.jpg'
import i7 from '../../assets/images/7.jpg'
import i8 from '../../assets/images/8.jpg'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Preference from '../../components/Preference'


var etext='';
var ctr=0;
var rev=0;
var img=i0;
const Posts = () => {
  
  const { token } = useSelector(state => state.auth)
  if(token){
    try {
      AsyncStorage.setItem('token', action.payload.data.token)
   } catch (e) {
     //(e);
   }
  }else{
    try {
      AsyncStorage.getItem('token')
   } catch (e) {
    console.log(e);
   }
  }
  //(token);
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(loadUser(token));
    dispatch(loadAllPost(token));
  }, []);
  const { user } = useSelector(state => state.auth)
  
  const { allPosts } = useSelector(state => state.auth)
  const DATA=allPosts?allPosts:null
  const [filteredData, setFilteredData] =useState(DATA);
  
  

  const searchFilterFunction = (text) => {
    etext=text;
    if(text){  
        const newData = allPosts.filter(item => {
            const itemData = item.description||item.title ? item.description.concat(item.title,item.venue).toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        })
        setFilteredData(newData);
    } else {
        setFilteredData(DATA);
    }
}

  const navigation=useNavigation();

  const imagepick=()=>{
    if(ctr==8){
      rev=1;
    }
    if(ctr==0){
      rev=0;
    }
    if(rev==0){
      ctr=ctr+1
    }else{
      ctr=ctr-1
    }
    switch(ctr){
      case 0:
        img=i0;
        break;
        case 1:
        img=i1;
        break;
        case 2:
        img=i2;
        break;
        case 3:
        img=i3;
        break;
        case 4:
        img=i4;
        break;
        case 5:
        img=i5;
        break;
        case 6:
        img=i6;
        break;
        case 7:
        img=i7;
        break;
        case 8:
        img=i8;
        break;
        
    }
  }
  
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(loadAllPost(token))
    setFilteredData(DATA)
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite, alignItems:'center',marginTop:45}}>
      
      <View style={{minHeight:50,marginVertical:10 }}>
      <SearchBar
                    placeholder="Search here"
                    style={{borderRadius:20}}           
                    darkMode={true}
                    onPress={() => {}}
                    onClearPress={()=>{setFilteredData(DATA); ke}}
                    onChangeText={(text) => text?searchFilterFunction(text):setFilteredData(DATA)}
                  />
                  </View>
      
      <View style={{ marginHorizontal:20, alignItems:'center', marginBottom:50}}> 
      <Text style={style.welcomeMessage}>Welcome {user?user.name:"user"}</Text>
    
      {/* <Text style={styles.welcomeMessage}>Posts</Text>
      <Text style={styles.userName}>here</Text> */}
      <View style={{flexDirection:'row'}}>
      <Preference title="Dadar" onPress={()=>{searchFilterFunction("Dadar")}}></Preference>
      <Preference title="Borivali" onPress={()=>{searchFilterFunction("Borivali")}}></Preference>
      <Preference title="Any" onPress={()=>{searchFilterFunction("")}}></Preference>
      </View>
      <View style={{flex:1}}>
        
        <FlatList
        contentContainerStyle={{ paddingBottom: 20 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        onViewableItemsChanged={imagepick()}
        data={etext?filteredData:DATA}
        renderItem={({item}) => <Post title={item.title} content={item.description} creator={item.creator} onPress={()=>{navigation.navigate('postClick',{item:item})}}/>}
        keyExtractor={item => item._id}
      ></FlatList>
         
      </View>
      </View>
    </SafeAreaView>
  )
}

const style=StyleSheet.create(
  {
    container: {
      flex:1,
      marginTop:SIZES.small,
      marginHorizontal:SIZES.large,
      paddingHorizontal:SIZES.small,
      width: "100%",
      alignItems:'center',
      
    },
    welcomeMessage: {
      shadowColor:COLORS.gray,
      fontFamily: FONT.bold,
      fontSize: SIZES.xLarge,
      color: COLORS.primary,
    },
  }
)



export default Posts