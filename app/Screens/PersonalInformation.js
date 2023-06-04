import React, { useState } from 'react';
import { View ,TextInput,Text,ScrollView} from 'react-native';
import { RadioButton } from 'react-native-paper';
import Input from '../../components/Input';

const YourComponent = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelect = (value) => {
    setSelectedGender(value);
  };

  return (
    <View>
        <ScrollView>
      <RadioButton.Group onValueChange={handleGenderSelect} value={selectedGender}>
        <RadioButton.Item label="Male" value="male" />
        <RadioButton.Item label="Female" value="female" />
        <RadioButton.Item label="Others" value="others" />
      </RadioButton.Group>
      <Input 
            keyboardType="text"
            onFocus={() => {}}
            label="Address"
            placeholder="Enter your address"
          />
      </ScrollView>
    </View>
  );
};

export default YourComponent;