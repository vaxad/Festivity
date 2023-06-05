import { View, Text, SafeAreaView, ScrollView, FlatList,RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/common.style'
import { COLORS } from '../../constants'
import Post from '../../components/Post'
import { useNavigation } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'
import { loadAllPost, loadUser } from '../../redux/action'
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


var etext='';
var ctr=0;
var rev=0;
var img=i0;
const Posts = () => {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(loadUser(token));
    dispatch(loadAllPost(token));
  }, []);
  const { user } = useSelector(state => state.auth)
  const { allPosts } = useSelector(state => state.auth)
  const DATA=allPosts?allPosts:null
  const [filteredData, setFilteredData] =useState(DATA);
  
  const { token } = useSelector(state => state.auth)

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
        onViewableItemsChanged={imagepick()}
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