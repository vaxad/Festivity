import { View, Text, SafeAreaView, StyleSheet, Image, useWindowDimensions, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import styles from '../../styles/common.style';
import { COLORS, FONT, SIZES } from '../../constants';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logout, loadUser, loadReviews, getUser } from '../../redux/action';
import { useNavigation } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import arrow from '../../assets/icons/arrow.png'
import { TabView, SceneMap } from 'react-native-tab-view';
import PagerView from 'react-native-pager-view';
import Posts from '../(tabs)/Posts';
import Create from '../(tabs)/Create';
import Post from '../../components/Post';
import i1 from '../../assets/images/1.jpg'
import i2 from '../../assets/images/2.jpg'
import i0 from '../../assets/images/0.jpg'
import i3 from '../../assets/images/3.jpg'
import i4 from '../../assets/images/4.jpg'
import i5 from '../../assets/images/5.jpg'
import i6 from '../../assets/images/6.jpg'
import i7 from '../../assets/images/7.jpg'
import i8 from '../../assets/images/8.jpg'
import ReviewCard from '../../components/ReviewCard';
import Preference from '../../components/Preference';



const ProfilePeople = ({userShown}) => {
  
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  // const { userFocus } = useSelector(state => state.auth);
  // const user=userFocus;
  // var { user } = useSelector(state => state.auth);
  // if (!user) {
  //   navigation.navigate('login2');
  // }
  useEffect(() => {
    dispatch(loadReviews(userShown._id,token));
    
  }, []);
  const { reviews } = useSelector(state => state.auth)
  var revData=reviews?reviews:null;

  useEffect(() => {
    if(reviews){
      if(reviews[0].about!==userShown._id){
        dispatch(loadReviews(userShown._id,token));
      }
    }
  }, []);
 
  const pageref = React.useRef(PagerView);
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const { allPosts } = useSelector(state => state.auth)
  const DATA=allPosts?allPosts.filter(function (el) {
    return el.creator===userShown._id;
}
):null

  const [page, setPage] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  const imagepick=()=>{
    onViewCallBack();
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
  
  const onViewCallBack = React.useCallback((viewableItems)=> {
    //(viewableItems)
    //imagepick();
    // Use viewable items in state or as intended
}, []) // any dependencies that require the function to be "redeclared"

const logOut=()=>{
      //('logout')
      try {
        AsyncStorage.setItem('token', null)
     } catch (e) {
      //.log(e);
     }
     dispatch(logout());
     // BackHandler.exitApp();
    }
const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, marginTop:45, alignItems:'center'  }}>
      
        <View style={[styles.container,{flex:1}]}>
        <View style={{flexDirection:'row',justifyContent:'space-between', marginHorizontal:10 }}>
          <Text style={[styles.welcomeMessage,{}]}>Profile</Text>
          <TouchableOpacity onPress={()=>{logOut()}}>
          <View style={{backgroundColor:COLORS.dark, flex:1, flexDirection:'row', paddingHorizontal:10, borderRadius:SIZES.xLarge}}>
          <Text style={[styles.welcomeMessage,{color:COLORS.lightWhite,fontFamily:FONT.medium, fontSize:SIZES.large, alignSelf:'center'}]}>Log out</Text>
      {/* <Image style={{height:SIZES.large, width:SIZES.large, alignSelf:'center', marginHorizontal:2}} source={arrow}></Image> */}
          </View>
          </TouchableOpacity>
      </View>
          <Image
            source={require('../../assets/images/kemal.jpg')}
            style={{ width: 200, height: 200, borderRadius: 400 / 2, alignSelf: 'center' }}
          />
          <Text style={style.userName}>{userShown ? userShown.name : ''}</Text>

          <View
            style={[
              style.inputContainer,
              {
                width: 110,
                top: 10,
                borderColor: COLORS.black,
                alignItems: 'center',
              },
            ]}
          >
            <Text>{userShown ? userShown.phone : ''}</Text>
          </View>

          <View
            style={[
              style.inputContainer,
              {
                width: 200,
                top: 22,
                borderColor: COLORS.black,
                alignItems: 'center',
              },
            ]}
          >
            <Text>Mumbai, Maharashtra, India.</Text>
          </View>


          {/* <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
          /> */}
        
      
      <SafeAreaView style={{flex:1, marginTop:20}}>
        <View style={{flexDirection:'row', justifyContent:'center', marginVertical:10}}>
          <Preference title="Attended Events" selected={page==0?"Attended Events":false} onPress={()=>{pageref.current.setPage(0);}}></Preference>
          <Preference title="Reviews" selected={page==1?"Reviews":false} onPress={()=>{pageref.current.setPage(1);}}></Preference>
          </View>
          <PagerView style={style.pagerView} initialPage={page} onPageSelected={e=>{setPage(e.nativeEvent.position)}} ref={pageref}>
      <View key="1">
          <SafeAreaView style={{flex:1, padding:20,justifyContent:'center',flexDirection:'column', alignSelf:'center', alignContent:'center'}}>
            {/* <Text style={[styles.welcomeMessage,{marginVertical:10, textAlign:'center'}]}>Attended Events</Text> */}
      <FlatList
        contentContainerStyle={{flexGrow:1, justifyContent:'center' }}
        data={DATA}
        onViewableItemsChanged={onViewCallBack}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({item}) =><Post title={item.title} content={item.description} creator={item.creator} onPress={()=>{navigation.navigate('postClick',{item:item})}}/>}
        keyExtractor={item => item._id}
      ></FlatList>
      </SafeAreaView>
      </View>
      <View key="2">
      <SafeAreaView style={{flex:1, padding:10,justifyContent:'center',flexDirection:'column', alignSelf:'center', alignContent:'center'}}>
      {/* <Text style={[styles.welcomeMessage,{marginVertical:10, textAlign:'center'}]}>Reviews</Text> */}
      <FlatList
        contentContainerStyle={{flexGrow:1, justifyContent:'center' }}
        data={revData}
        onViewableItemsChanged={onViewCallBack}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({item}) =><ReviewCard review={item}/>}
        keyExtractor={item => item._id}
      ></FlatList>
      </SafeAreaView>
      </View>
    </PagerView>
    </SafeAreaView>
    </View>
    </SafeAreaView>
  );
};



const style = StyleSheet.create({
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0,0,0,0.1)'
    },
    container: {
      flex: 1,
      padding: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      marginTop:10,
      marginVertical:5,
      marginHorizontal:10,
      textShadowOffset: {width:3,heigh:1},
      textShadowColor:'black',
      textShadowRadius:2,
      marginBottom:10,
      marginLeft:20,
      fontFamily: FONT.medium,
      fontSize: SIZES.xLarge,
      color: COLORS.white,
      marginTop: -6,
  
    },
    
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.gray,
    
  },
  userName:{
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
    alignSelf:'center'
  },

  pagerView: {
    flex: 1,
  },
  // Button:{
  //  width:340,
  // },
 
  inputContainer: {
    
    height: 50,
    backgroundColor: COLORS.light,
    alignSelf: 'center',
    borderRadius:SIZES.large/0.5,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
});
export default ProfilePeople