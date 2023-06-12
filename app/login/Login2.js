import { View, SafeAreaView, ScrollView, Text, BackHandler } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Loader from "../../components/Loader";
import { useEffect, useRef, useState } from "react";
import { COLORS } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, register } from "../../redux/action";
import styles from "../../styles/common.style";
import { useNavigation } from "expo-router";
import {FirebaseRecaptchaVerifierModal} from 'expo-firebase-recaptcha';
import {firebaseConfig} from '../../config';
import firebase from 'firebase/compat/app';


const Login2 = () => {
  
  const { token } = useSelector(state => state.auth)
  const dispatch=useDispatch();
  const [name,setName]=useState('')
  const [phoneNumber,setPhoneNumber]=useState('')
  const [code,setCode]=useState('')
  const [loading,setLoading]=useState(false);
  const [verificationdId, setVerificationId] = useState(null);
  const [disabled,setDisabled]=useState(false)
  const navigation=useNavigation();
  const { user } = useSelector(state => state.auth)
  
  const recaptchaVerifier = useRef(null);
  
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress",()=>{
      BackHandler.exitApp();
    });
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    })
    dispatch(loadUser(token));
    if(user||token){
      navigation.navigate('tabs',{screen:'Posts'})
      }
  }, []);
  
  // if(user){
  //   navigation.navigate('tabs')
  //   }
  const handleSubmit=()=>{
    console.log('reg')
    const formdata={
      "name":name,
      "phone":phoneNumber
    }
    console.log(formdata)
    try {
      
      dispatch(register(formdata,token))
      // navigation.replace('tabs',{screen:'Posts'})
      navigation.replace('Splash')
    } catch (e) {
      console.log(e)
    }
    
    setPhoneNumber('');
    setCode('');
    setDisabled(false);
    setName('');;
  }


  const sendVerification = ()=>{
    setDisabled(true)
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
    .verifyPhoneNumber('+91'+phoneNumber,recaptchaVerifier.current)
    .then(setVerificationId);
  };

  const confirmCode=() => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationdId,
        code
    );
    firebase.auth().signInWithCredential(credential)
    .then(() => {
        handleSubmit();
    })
    .catch((error) => {
        //show an alert in case of error  
        Alert.alert(
            'Error',
        );
        }
     )}

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
        <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig= {firebaseConfig}
        />

        <Input
            keyboardType="default"
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
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Enter your phone no"
            //error={errors.phone}
          />
          <Button title="Be festive" onPress={sendVerification}  
            disabled={disabled}/>
             <Input
            onChangeText={setCode}
            value={code}
            iconName="lock-outline"
            keyboardType="numeric"
            label="OTP"
            placeholder="Enter OTP"
          />
          <Button title="Verify OTP" onPress={confirmCode} disabled={!disabled}  />
          
        </View>
      </ScrollView>
    </SafeAreaView>
  ); 
};

export default Login2;
