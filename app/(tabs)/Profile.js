import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../styles/common.style'
import { COLORS ,SIZES} from '../../constants'
import { Image } from 'react-native'

const Profile = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
    <View style={{marginTop:90}}/>
      <View style={styles.container}>
      <Text style={styles.welcomeMessage}>Profile</Text>
      <Image 
      source={require('../../assets/images/kemal.jpg')}  
      style={{width: 200, height: 200, borderRadius: 400/ 2}} 
      />
      <Text style={styles.userName}>Username</Text>

      <View
        style={[
          style.inputContainer,
          {
            borderColor:COLORS.black,
            alignItems: 'center',
          },
        ]}>
          <Text>7208229998</Text>
        </View>

        <View
        style={[
          style.inputContainer,
          {
            borderColor:COLORS.black,
            alignItems: 'center',
          },
        ]}>
          <Text>Address</Text>
        </View>
        
        <View
        style={[
          style.inputContainer,
          {
            borderColor:COLORS.black,
            alignItems: 'center',
          },
        ]}>
        <View
        style={[
          style.inputContainer,
          {
            borderColor:COLORS.black,
            alignItems: 'center',
          },
        ]}><Text>Interest1</Text></View>


        <View
        style={[
          style.inputContainer,
          {
            borderColor:COLORS.black,
            alignItems: 'center',
          },
        ]}><Text>Interest2</Text></View>

        <TouchableOpacity>
        <View
        style={[
          style.inputContainer,
          {
            borderColor:COLORS.black,
            alignItems: 'center',
          },
        ]}><Text>+</Text></View>
        </TouchableOpacity>
          
        </View>
        

      

      </View>
    </SafeAreaView>
  )
} 
const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.gray,
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.light,
    borderRadius:SIZES.large/0.5,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
});

export default Profile