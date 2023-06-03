import { View, SafeAreaView, ScrollView, Text } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Loader from "../../components/Loader";
import { useState } from "react";
import { COLORS } from "../../constants";


const Login = () => {
  const [phone,setPhone]=useState('')
  const [code,setCode]=useState('')
  const [loading,setLoading]=useState(false);
  const [isDisabled,setisDisabled]=useState('')
  const [isDisabled2,setisDisabled2]=useState('')

  



  
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
        
        <Text style={{ color: COLORS.primary, fontSize: 40, fontWeight: 'bold' }}>
          Login using OTP
        </Text>

        <View style={{ marginVertical: 20 }}>

          <Input
            keyboardType="numeric"
            onChangeText={setPhone}
            value={phone}
            onFocus={() => {}}
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Enter your phone no"
            //error={errors.phone}
          />
          <Button title="Send OTP" onPress={()=>{}}  />
          <Input
            onChangeText={setCode}
            value={code}
            iconName="lock-outline"
            keyboardType="numeric"
            label="OTP"
            placeholder="Enter OTP"
          />
          <Button title="Verify OTP" onPress={()=>{}}  />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
