import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../../styles/common.style'
import { COLORS } from '../../constants'

const Menu = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
    <View style={{marginTop:30}}/>
      <View style={styles.container}>
      <Text style={styles.welcomeMessage}>Menmghvjhchchgchcfcffcu</Text>
      <Text style={styles.userName}>here</Text>
      </View>
    </SafeAreaView>
  )
}

export default Menu