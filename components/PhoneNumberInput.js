import { View, Text } from 'react-native'
import React from 'react'
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { PhoneNumberInput } from 'react-native-phone-number-input';
import Login from '../app/login/Login';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (number) => {
    setPhoneNumber(number);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log(phoneNumber);
  };

  return (
    <View>
      <PhoneNumberInput
        defaultValue={phoneNumber}
        defaultCode="US" // Default country code
        onChangeFormattedText={handlePhoneNumberChange}
        withDarkTheme // Optional: If you want to use a dark theme
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default PhoneNumberInput;
