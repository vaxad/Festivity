import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import ProfilePeople from '../Screens/ProfilePeople';
import { loadUser } from '../../redux/action';
import { useNavigation } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  const { token } = useSelector(state => state.auth)
  console.log(token)
    const navigation=useNavigation()
    const dispatch=useDispatch();
  useEffect(() => {
        dispatch(loadUser(token));
      }, []);
      const { user } = useSelector(state => state.auth)
      console.log(user);
    if(user){  
  return (
    
    <ProfilePeople userShown={user?user:null}></ProfilePeople>
  )
    }
}


export default Profile

// import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, BackHandler } from 'react-native'
// import React,{useEffect} from 'react'
// import styles from '../../styles/common.style'
// import { COLORS ,SIZES} from '../../constants'
// import { Image } from 'react-native'
// import Button from '../../components/Button'
// import { useDispatch, useSelector } from 'react-redux'
// import { logout, loadUser } from '../../redux/action'
// import { useNavigation } from 'expo-router'
// import { ScrollView } from 'react-native-gesture-handler'

// const Profile = () => {
  
//   const { token } = useSelector(state => state.auth)
//   const navigation=useNavigation()
//   const dispatch=useDispatch();
//   const logOut=()=>{
//     console.log('logout')
//     try {
//       AsyncStorage.setItem('token', null)
//    } catch (e) {
//      console.log(e);
//    }
//    dispatch(logout());
//    // BackHandler.exitApp();
//   }
//   useEffect(() => {
//     dispatch(loadUser(token));
//   }, []);
//   var { user } = useSelector(state => state.auth)
//   if(!user){
//     navigation.navigate('login2')
//     }
//   return (
//     <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
//     <View style={{marginTop:90}}/>
//     <ScrollView>
//       <View style={styles.container}>
//       <Text style={styles.welcomeMessage}>Profile</Text>
//       <Image 
//       source={require('../../assets/images/kemal.jpg')}  
//       style={{width: 200, height: 200, borderRadius: 400/ 2,alignSelf: 'center'}} 
//       />
//       <Text style={styles.userName}>{user?user.name:""}</Text>

//       <View
//         style={[
//           style.inputContainer,
//           {
//             width:110,
//             top:10,
//             borderColor:COLORS.black,
//             alignItems: 'center',
            
//           },
//         ]}>
//           <Text>{user?user.phone:""}</Text>
//         </View>

//         <View
//         style={[
          
//           style.inputContainer,
//           {
//             width:200,
//             top:22,
//             borderColor:COLORS.black,
//             alignItems: 'center',
//           },
//         ]}>
//           <Text>Mumbai, Maharashtra, India.</Text>
//         </View>
        
//         <View
//         style={[
//           style.inputContainer,
//           {
//             width:340,
//            top:81,
//            left:7,

//             borderColor:COLORS.black,
//             alignItems: 'center',
            
            
//           },
//         ]}>
//         {/* <View
//         style={[
//           style.inputContainer,
//           {
//             borderColor:COLORS.black,
//             alignItems: 'center',
//           },
//         ]}><Text>Interest1</Text></View>


//         <View
//         style={[
//           style.inputContainer,
//           {
//             borderColor:COLORS.black,
//             alignItems: 'center',
//           },
//         ]}><Text>Interest2</Text></View> */}

//         {/* <TouchableOpacity>
//         <View
//         style={[
//           style.inputContainer,
//           {
//             borderColor:COLORS.black,
//             alignItems: 'center',
//           },
//         ]}><Text>+</Text></View>
//         </TouchableOpacity> */}
        
//         </View>
        
//         <Button title="Log out" onPress={()=>{logOut()}} />
      
        
//       </View>
//       </ScrollView>
//     </SafeAreaView>
//   )
// } 
// const style = StyleSheet.create({
//   label: {
//     marginVertical: 5,
//     fontSize: 14,
//     color: COLORS.gray,
    
//   },
//   // Button:{
//   //  width:340,
//   // },
 
//   inputContainer: {
    
//     height: 50,
//     backgroundColor: COLORS.light,
//     borderRadius:SIZES.large/0.5,
//     flexDirection: 'row',
//     paddingHorizontal: 15,
//     borderWidth: 0.5,
//   },
// });

// export default Profile