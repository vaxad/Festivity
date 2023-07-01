import { View, Text, SafeAreaView, StyleSheet, Image, useWindowDimensions, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import styles from '../../styles/common.style';
import { COLORS, FONT, SIZES } from '../../constants';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logout, loadUser, loadReviews } from '../../redux/action';
import { useNavigation } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
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

const FirstRoute = () => (
<View style={{ flex: 1, backgroundColor: COLORS.dark }} >
  {/* <FlatList
        contentContainerStyle={{ paddingBottom: 20 }}
        //refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        onViewableItemsChanged={()=>imagepick()}
        data={DATA}
        renderItem={({item}) => <Post title={item.title} content={item.description} creator={item.creator} onPress={()=>{navigation.navigate('postClick',{item:item})}}/>}
        keyExtractor={item => item._id}
      ></FlatList> */}
      <Text style={{color:COLORS.dark}}> kshdsd,vjnd,jkdh</Text>
</View>
);

const SecondRoute = () => ( 
<View style={{ flex: 1, backgroundColor: '#FF00FF' }} >
  <Text style={styles.userName}> kszkjckascbasuaisyuaisyuaikcubh</Text>
</View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const ProfilePeople = () => {
  
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser(token));
  }, []);

  var { user } = useSelector(state => state.auth);
  if (!user) {
    navigation.navigate('login2');
  }
  useEffect(() => {
    dispatch(loadReviews(user._id,token));
  }, []);
  const { reviews } = useSelector(state => state.auth)
  var revData=[
    {
      "_id": "649fb8acc25880dbdb5e9f34",
      "about": "647b0e1216008065b5d9e37c",
      "by": "647bb1c59eaf7d317c8fdb1b",
      "stars": 3,
      "description": "fkjnsdfikjsdifjvdkijsckvj sdfkj dkvjd",
      "likes": 0,
      "createdAt": "2023-07-01T05:25:00.379Z",
      "__v": 0
    },
    {
      "_id": "649fba258eaec7f123bb33be",
      "about": "647b0e1216008065b5d9e37c",
      "by": "647bb1c59eaf7d317c8fdb1b",
      "stars": 7,
      "description": "fkjnsdfikjsdifjvdkijsckvj sdfkj dkvjd",
      "likes": 0,
      "createdAt": "2023-07-01T05:31:17.963Z",
      "__v": 0
    },
    {
      "_id": "649fba3d8eaec7f123bb33c4",
      "about": "647b0e1216008065b5d9e37c",
      "by": "647bb1c59eaf7d317c8fdb1b",
      "stars": 7,
      "description": "good",
      "likes": 0,
      "createdAt": "2023-07-01T05:31:41.804Z",
      "__v": 0
    }
  ]
  if(reviews){
    revData=reviews;
  }
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const { allPosts } = useSelector(state => state.auth)
  const DATA=allPosts?allPosts.filter(function (el) {
    return el.creator===user._id;
}
):null

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
    console.log(viewableItems)
    //imagepick();
    // Use viewable items in state or as intended
}, []) // any dependencies that require the function to be "redeclared"

const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, marginTop:45, alignItems:'center'  }}>
      <View style={{ }} />
      
        <View style={[styles.container,{flex:1}]}>
          <Text style={[styles.welcomeMessage,{marginLeft:10}]}>Profile</Text>
          <Image
            source={require('../../assets/images/kemal.jpg')}
            style={{ width: 200, height: 200, borderRadius: 400 / 2, alignSelf: 'center' }}
          />
          <Text style={style.userName}>{user ? user.name : ''}</Text>

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
            <Text>{user ? user.phone : ''}</Text>
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
      
          <PagerView style={style.pagerView} initialPage={0}>
      <View key="1">
          <SafeAreaView style={{flex:1, padding:20,justifyContent:'center',flexDirection:'column', alignSelf:'center', alignContent:'center'}}>
            <Text style={[styles.welcomeMessage,{marginVertical:10, textAlign:'center'}]}>Attended Events</Text>
      <FlatList
        contentContainerStyle={{flexGrow:1, justifyContent:'center' }}
        //refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        //onViewableItemsChanged={()=>imagepick()}
        data={DATA}
        onViewableItemsChanged={onViewCallBack}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({item}) =><Post title={item.title} content={item.description} creator={item.creator} onPress={()=>{navigation.navigate('postClick',{item:item})}}/>}
        keyExtractor={item => item._id}
      ></FlatList>
      </SafeAreaView>
      </View>
      <View key="2">
      <SafeAreaView style={{flex:1, padding:20,justifyContent:'center',flexDirection:'column', alignSelf:'center', alignContent:'center'}}>
      <Text style={[styles.welcomeMessage,{marginVertical:10, textAlign:'center'}]}>Reviews</Text>
      <FlatList
        contentContainerStyle={{flexGrow:1, justifyContent:'center' }}
        //refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        //onViewableItemsChanged={()=>imagepick()}
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