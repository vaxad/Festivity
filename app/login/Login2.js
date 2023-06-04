import { View, SafeAreaView, ScrollView, Text } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Loader from "../../components/Loader";
import { useEffect, useRef, useState } from "react";
import { COLORS } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, register } from "../../redux/action";
import styles from "../../styles/common.style";
import { useNavigation } from "expo-router";


const Login2 = () => {
  
  const dispatch=useDispatch();
  const [name,setName]=useState('')
  const [phone,setPhone]=useState('')
  const [code,setCode]=useState('')
  const [loading,setLoading]=useState(false);
  const [verificationId, setVerificationId] = useState(null);
  const [disabled,setDisabled]=useState(false)
  const navigation=useNavigation();
  const { user } = useSelector(state => state.auth)
  
  useEffect(() => {
    dispatch(loadUser());
    if(user){
      navigation.navigate('tabs')
      }
  }, []);
  
  if(user){
    navigation.navigate('tabs')
    }
  const handleSubmit=()=>{
    console.log('reg')
    const formdata={
      "name":name,
      "phone":phone
    }
    console.log(formdata)
    try {
      
      dispatch(register(formdata))
    } catch (e) {
      console.log(e)
    }
  }


  const validate = () => {
    //Keyboard.dismiss();
    let isValid = true;

    if (!phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    }

    if (isValid) {
      handleSubmit();
    }
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
        
        <Text style={styles.titleText}>
          Login or Signup
        </Text>

        <View style={{ marginVertical: 20 }}>

        <Input
            keyboardType="Text"
            onChangeText={setName}
            value={name}
            onFocus={() => {}}
            iconName="face-man-profile"
            label="Name"
            placeholder="Enter your name"
            //error={errors.phone}
          />

          <Input
            keyboardType="numeric"
            onChangeText={setPhone}
            value={phone}
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Enter your phone no"
            //error={errors.phone}
          />
          <Button title="Be festive" onPress={()=>{validate()}}  
            disabled={disabled}/>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  ); 
};

export default Login2;
