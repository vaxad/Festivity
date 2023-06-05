import { View, Text, SafeAreaView, TextInput, RefreshControl, StyleSheet, TouchableOpacity  } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/common.style'
import { COLORS, SIZES } from '../../constants'
import Input from "../../components/Input";
import Button from '../../components/Button';
import { onChange } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, loadAllPost, loadUser } from '../../redux/action';
import { useNavigation } from 'expo-router';
//import DatePicker from 'react-native-date-picker'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ScrollView } from 'react-native-gesture-handler';

var edate='';

const Create = () => {
  const [title,setTitle]=useState('')
  const [desc,setDesc]=useState('')
 const [venue,setVenue]=useState('')
  const dispatch=useDispatch();
  const navigation=useNavigation();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [disabled,setDisabled]=useState(true);
  const { token } = useSelector(state => state.auth)
  

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const onRefresh = React.useCallback(() => {
    setDesc('');
    setTitle('');
    setVenue('');
    edate=''
    setDisabled(true)
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    //console.warn("A date has been picked: ", date);

    edate=date;
    hideDatePicker();
  };
  useEffect(() => {
    dispatch(loadUser(token));
    if(!user){
      navigation.navigate('login2')
    }
  }, []);
  const { user } = useSelector(state => state.auth)
  const handleCreate=()=>{
    console.log(edate)
   const  formdata={
      "title":title,
      "description":desc,
      "venue":venue,
      "date": edate
    }
    dispatch(addPost(formdata,token))
    dispatch(loadAllPost(token))
    navigation.navigate('tabs',{screen:'Posts'})
    setDesc('');
    setTitle('');
    setVenue('');
    edate='';
    onRefresh();
  }
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
    <View style={{marginTop:90}}/>
    <ScrollView refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
      <View style={styles.container}>
        
      <Text style={styles.welcomeMessage}>Host a Party!</Text>
    </View>
    <View style={{padding: 10}}>
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

<View style={{marginBottom: 20}}>
      <Text style={style.label}>Date</Text>
      <TouchableOpacity onPress={showDatePicker}>
      <View
        style={[
          style.inputContainer,
          {
            borderColor:COLORS.black,
            alignItems: 'center',
          },
        ]}><Text>{edate===''?"Select the date for your event":edate.toString()}</Text></View></TouchableOpacity>
          </View>
        {/* <Button title="Add Date" onPress={showDatePicker} /> */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    <Button title="Host" onPress={()=>{handleCreate()}}  />

    
  </View>
  </ScrollView>
          </SafeAreaView>
  
  )
}



const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.gray,
    left:13,
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

export default Create