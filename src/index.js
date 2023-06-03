import { View, Text , TouchableOpacity , TextInput , StyleSheet, Alert} from 'react-native'
import React, {useRef,useState} from 'react'
import {FirebaseRecaptchaVerifierModal} from 'expo-firebase-recaptcha';
import {firebaseConfig} from '../config';
import {Firebase} from 'firebase/compat/app';




const Otp = () => {
  const[phoneNumber,setPhoneNumber] = useState('');
  const[code,setCode] = useState('');
  const [verificationdId,setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  const sendVerification = ()=>{
    const phoneProvider = new firebase.auth.PhoenAuthProvider();
    phoneProvider
    .verfifyPhoneNumber(phoneNumber,recaptchaVerifier.current)
    .then(sendVerificationId);
    setPhoneNumber('');
  };

  const confirmCode=() => {
    const credential = firebase.auth.PhoenAuthProvider.credential(
        verificationdId,
        code)
  };
    firebase.auth().signInWithCredential(credential)
    .then(() => {
        setCode('')
    })
    .catch((error) => {
        //show an alert in case of error  
        Alert.alert(
            'Login Successful. Welcome to  Dashboard',
        );
    } )
    
    return(
    <View style = {styles.container}>
        <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig= {firebaseConfig}
        />
        <Text style={styles.otp.Text}>
            Login Uisng OTP
        </Text> 
        <TextInput
        placeholder = 'Phone Number with Country code'
        onChangeText={setPhoneNumber}
        keyboardType='phone-pad'
        autoCompleteType='tel'
        style={styles.textInput}
        />
        <TouchableOpacity style = {styles.sendVerification} onPress={sendVerification}>
            <Text style = {styles.buttonText}>
                Send Verification
            </Text>
        </TouchableOpacity>
        <TextInput
        placeholder='Confirm Code'
        onChangeText={setCode}
        keyboardType='number-pad'
        style={styles.textInput}
        />
         <TouchableOpacity style = {styles.sendCode} onPress={confirmCode}>
            <Text style = {styles.buttonText}>
                Confirm verification
            </Text>
        </TouchableOpacity>

    </View>
    )
  }

export default Otp