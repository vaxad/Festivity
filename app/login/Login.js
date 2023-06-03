import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import * as React from 'react'
import { COLORS } from '../../constants'
import styles from '../../styles/common.style'
import { useNavigation } from 'expo-router'
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage'
// android 1042722321457-r6q29ikfsr2sit6aom2o5d5gt14e054c.apps.googleusercontent.com
//ios 1042722321457-spvn3jkcgbg7n4te1fjiq061lgu62fds.apps.googleusercontent.com
WebBrowser.maybeCompleteAuthSession();

const Login = () => {
    const [user,setUser]=React.useState(null)
    
    const navigation=useNavigation();
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
        <View style={{marginTop:90}}>
        <View style={styles.container}>
            <Text style={styles.welcomeMessage}>login</Text>
            
            <TouchableOpacity onPress={()=>{navigation.navigate('tabs')}}>
                <Text style={styles.userName}>sign in</Text>
            </TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>
  )
}

export default Login