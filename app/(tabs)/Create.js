import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/common.style'
import { COLORS } from '../../constants'
import Input from "../../components/Input";
import Button from '../../components/Button';
//import DateTimePicker from '@react-native-community/datetimepicker';

const Create = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
    <View style={{marginTop:90}}/>
      <View style={styles.container}>
      <Text style={styles.welcomeMessage}>Host a Party!</Text>
    </View>
    <Input1></Input1>
          </SafeAreaView>
  
  )
}

const Input1 = ()=>{
  const [text, setText] = useState('');
  return(
    <View style={{padding: 10}}>
    <Input
            keyboardType="text"
            onFocus={() => {}}
            label="Title"
            placeholder="Give your event a wonderful title"
          />
    <Input
            keyboardType="text"
            onFocus={() => {}}
            label="Venue"
            placeholder="Tell people where your event will take place"
          />
    <Input
            keyboardType="text"
            onFocus={() => {}}
            label="Description"
            placeholder="Tell people more about your event..."
          />

    <Button title="Host" onPress={()=>{}}  />
    
  </View>
);
};

export default Create