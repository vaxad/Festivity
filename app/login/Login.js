import { View, SafeAreaView, ScrollView, Text } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Loader from "../../components/Loader";
import { useEffect, useRef, useState } from "react";
import { COLORS } from "../../constants";
import { useDispatch } from "react-redux";
import { loadUser, register } from "../../redux/action";
import { firebaseConfig } from '../../config.js'
import firebase from 'firebase/compat/app'

import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';


const Login = () => {
  
  const dispatch=useDispatch();
  const [name,setName]=useState('')
  const [phone,setPhone]=useState('')
  const [code,setCode]=useState('')
  const [loading,setLoading]=useState(false);
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null)
  const [disabled,setDisabled]=useState(false)

  useEffect(() => {
    dispatch(loadUser());
  }, []);
  const handleSubmit=()=>{
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

  const sendVerification = () => {
    setDisabled(true);
    const phoneProvider = new firebase.auth.PhoneAuthProvider;
    phoneProvider.verifyPhoneNumber(('+91' + phone), recaptchaVerifier.current).then(setVerificationId).catch((error) => { console.log(error) });
  }
  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase.auth().signInWithCredential(credential)
      .then(() => {
        const myForm = {
          "name": name,
          "phone": phone
        }
        try {
          dispatch(register(myForm))
        } catch (e) {
          console.log(e)
        }

      })

      .catch((error) => {
        console.log(error)
        alert('Invalid OTP');
        setCode('');
        setPhone('');
        setDisabled(false);
      })
  }

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    }

    if (isValid) {
      sendVerification;
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
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig} />
        <Text style={{ color: COLORS.primary, fontSize: 40, fontWeight: 'bold' }}>
          Login using OTP
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
          <Button title="Send OTP" onPress={()=>{sendVerification}}  
            disabled={disabled}/>
          <Input
            onChangeText={setCode}
            value={code}
            iconName="lock-outline"
            keyboardType="numeric"
            label="OTP"
            placeholder="Enter OTP"
          />
          <Button title="Verify OTP" onPress={()=>{confirmCode}} disabled={!disabled}  />
        </View>
      </ScrollView>
    </SafeAreaView>
  ); 
};

export default Login;
