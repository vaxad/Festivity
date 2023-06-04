import { View, Text, SafeAreaView, TextInput  } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/common.style'
import { COLORS } from '../../constants'
import Input from "../../components/Input";
import Button from '../../components/Button';
import { onChange } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, loadAllPost, loadUser } from '../../redux/action';
import { useNavigation } from 'expo-router';
//import DatePicker from 'react-native-date-picker'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Create = () => {
  const [title,setTitle]=useState('')
  const [desc,setDesc]=useState('')
 const [venue,setVenue]=useState('')
  const dispatch=useDispatch();
  const navigation=useNavigation();
  const [Daate,setDate]=useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const formdata=new FormData()

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDate(date);
    hideDatePicker();
  };
  useEffect(() => {
    dispatch(loadUser());
    if(!user){
      navigation.navigate('login2')
    }
  }, []);
  const { user } = useSelector(state => state.auth)
  const handleCreate=()=>{
    
    formdata.append({
      "title":title,
      "description":desc,
      "venue":venue,
    })
    dispatch(addPost(formdata))
    dispatch(loadAllPost())
    navigation.navigate('tabs',{screen:'Posts'})
  }
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
    <View style={{marginTop:90}}/>
      <View style={styles.container}>
      <Text style={styles.welcomeMessage}>Host a Party!</Text>
    </View>
    <View style={{padding: 20}}>
    <Input 
            keyboardType="text"
            onChangeText={setTitle}
            value={title}
            onFocus={() => {}}
            label="Title"
            placeholder="Give your event a wonderful title"
          />
    <Input
            keyboardType="text"
            onChangeText={setVenue}
            value={venue}
            onFocus={()=>{}}
            label="Venue"
            placeholder="Tell people where your event will take place"
          />
    <Input
            keyboardType="text"
            onChangeText={setDesc}
            value={desc}
            onFocus={() => {}}
            label="Description"
            placeholder="Tell people more about your event..."
          />
          
        {/* <Button title="Add Date" onPress={showDatePicker} /> */}
      {/* <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      /> */}
    <Button title="Host" onPress={handleCreate}  />

    
  </View>
          </SafeAreaView>
  
  )
}

const Input1 = ({user})=>{
  const dispatch =useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  
  const handleCreate=()=>{
    console.log(title)
    const formdata={
      "title":title,
      "description":desc,
      "venue":venue,
      "date":"2023-06-03T21:33:57.870+00:00"
    }
    //console.log(formdata)
    //dispatch(addPost(formdata))
  }
  
  return(
    <View style={{padding: 10}}>
    <Input 
            keyboardType="text"
            value={title}
            onChange={setTitle}
            onFocus={() => {}}
            label="Title"
            placeholder="Give your event a wonderful title"
          />
    <Input
            keyboardType="text"
            value={venue}
            onChange={setVenue}
            onFocus={()=>{}}
            label="Venue"
            placeholder="Tell people where your event will take place"
          />
    <Input
            keyboardType="text"
            value={desc}
            onChange={setDesc}
            onFocus={() => {}}
            label="Description"
            placeholder="Tell people more about your event..."
          />
          

          <Pressable style={styles.button} onPress={onPress}/>

    
  </View>
);
};




export default Create