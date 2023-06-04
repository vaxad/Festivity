import { View, Text , TouchableOpacity , TextInput , Alert} from 'react-native'
import React, {useRef,useState} from 'react'
import {FirebaseRecaptchaVerifierModal} from 'expo-firebase-recaptcha';
import {firebaseConfig} from '../config';
import firebase from 'firebase/compat/app';
import styles from '../styles/common.style';




const Otp = () => {
  const[phoneNumber,setPhoneNumber] = useState('');
  const[code,setCode] = useState('');
  const [verificationdId,setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  const sendVerification = ()=>{
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
    .verifyPhoneNumber(phoneNumber,recaptchaVerifier.current)
    .then(setVerificationId);
    setPhoneNumber('');
  };

  const confirmCode=() => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationdId,
        code
    );
    firebase.auth().signInWithCredential(credential)
    .then(() => {
        setCode('')
    })
    .catch((error) => {
        //show an alert in case of error  
        Alert.alert(
            'Login Successful. Welcome to  Dashboard',
        );
        }
     )}
    
    return(
    <View style = {styles.container}>
        <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig= {firebaseConfig}
        />
        <Text style={styles.userName}>
            Login Uisng OTP
        </Text> 
        <TextInput
        placeholder = 'Phone Number with Country code'
        onChangeText={setPhoneNumber}
        keyboardType='phone-pad'
        autoCompleteType='tel'
        />
        <TouchableOpacity style = {styles.sendVerification} onPress={sendVerification}>
            <Text style = {styles.welcomeMessage}>
                Send Verification
            </Text>
        </TouchableOpacity>
        <TextInput
        placeholder='Confirm Code'
        onChangeText={setCode}
        keyboardType='number-pad'
        />
         <TouchableOpacity style = {styles.sendCode} onPress={confirmCode}>
            <Text style = {styles.welcomeMessage}>
                Confirm verification
            </Text>
        </TouchableOpacity>

    </View>
    )
  }

export default Otp

