import { View, Text,Image, TouchableOpacity,StyleSheet, ScrollView, SafeAreaView, ImageBackground} from 'react-native'
import React, { useEffect } from 'react'
import Button from '../../components/Button'
import { COLORS,FONT,SIZES } from '../../constants'
import styles from '../../styles/common.style'
import i1 from '../../assets/images/1.jpg'
import date from '../../assets/icons/date.png'
import heart0 from '../../assets/icons/heart_white_filled.png'
import heart1 from '../../assets/icons/heart_white_outline.png'
import location from '../../assets/icons/location01.png'
import person from '../../assets/icons/person.png'
import arrow from '../../assets/icons/arrow.png'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/action'

const PostClick = ({ route, navigation }) => {
  //const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  const {item} = route.params;
  navigation.setOptions({ headerTitle: item.title })
  const { token } = useSelector(state => state.auth)
  const dispatch=useDispatch()
  useEffect(() => {
    // const unsubscribe = navigation.addListener('beforeRemove', e => {
    //   e.preventDefault(); // Prevent default action
    //   unsubscribe() // Unsubscribe the event on first call to prevent infinite loop
    //   navigation.goBack() // Navigate to your desired screen
    // });
    dispatch(getUser(item.creator,token));
  }, []);
  const { userFocus } = useSelector(state => state.auth)
  //(userFocus);
  var edate=new Date(item.date);
  ////.log(new Date(item.date)<new Date(Date.now()));
  ////(date.toDateString());
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
      <ImageBackground style={{flex:1}} blurRadius={10} source={require('../../assets/images/1.jpg')}>
      <View style={style.overlay} />
      <ScrollView style={{marginHorizontal:15, marginTop:100}}>
      <Image style={{padding:15,
    // left:-18,
    width:360,
    height: 206, alignSelf:'center', borderRadius:SIZES.large}}
      source={require('../../assets/images/1.jpg')}
      />
      {/* <Text style={[style.buttonText,{marginTop:20, textAlign:'center',fontFamily: FONT.bold}]}>{item.title}</Text> */}
      <Text style={[style.buttonText,{fontSize: SIZES.medium,marginTop:10, fontFamily: FONT.medium,marginTop:20}]}>{item.description}</Text>
      <View style={{flexDirection:'row', marginLeft:20 }}>
        <Image style={{height:24, width:24, alignSelf:'center'}} source={location}></Image>
      <Text style={[style.buttonText,{marginTop:10}]}>{item.venue}</Text>
      </View>
      <View style={{flexDirection:'row', marginLeft:20 }}>
        <Image style={{height:24, width:24, alignSelf:'center'}} source={date}></Image>
      <Text style={[style.buttonText,{marginTop:10}]}>{edate.toDateString()}</Text>
      </View>
      <View style={{flexDirection:'row', marginLeft:20 }}>
        <Image style={{height:24, width:24, alignSelf:'center'}} source={heart0}></Image>
      <Text style={[style.buttonText,{marginTop:10}]}>{item.likes}</Text>
      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate('viewProfile',{userShown:userFocus})}}>
      <View style={{flexDirection:'row', marginLeft:20 }}>
        <Image style={{height:24, width:24, alignSelf:'center'}} source={person}></Image>
      <Text style={[style.buttonText,{marginTop:10}]}>View Host's profile</Text>
      <Image style={{height:24, width:24, alignSelf:'center'}} source={arrow}></Image>
      </View>
      </TouchableOpacity>

      <Button title="Request to join"/>
      <Button title="Write a Review" onPress={()=>{navigation.navigate('Review',{item:item})}}/>
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}


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
  


});

export default PostClick