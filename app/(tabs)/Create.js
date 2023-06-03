import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../../styles/common.style'
import { COLORS } from '../../constants'

const Create = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
    <View style={{marginTop:90}}/>
      <View style={styles.container}>
      <Text style={styles.welcomeMessage}>Host a Party!</Text>
      <Text style={styles.userName}>here</Text>
      </View>
      
    </SafeAreaView>
  )
}

const UserInputExample = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleButtonPress = () => {
    // Perform any desired action with the input value
    console.log(inputValue);
  };

  return (
    <View>
      <TextInput
        value={inputValue}
        onChangeText={handleInputChange}
        placeholder="Enter your input"
      />
      <Button title="Submit" onPress={handleButtonPress} />
    </View>
  );
};

export default Create