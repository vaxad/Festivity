import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {COLORS, SIZES} from '../constants';
const Preference = ({title, onPress = () => {},disabled}) => {
  let color=COLORS.primary;
  if(disabled){
     color=COLORS.gray;
  }else{
    color=COLORS.primary;
  }
  return (
    <View style={{ flexDirection:'row'}}>
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
      style={{
        height: 40,
        // top:48,
        marginHorizontal:10, 
        justifyContent: 'center',
        alignItems: 'center',
        
        borderWidth:0.5,
    borderRadius:SIZES.large/0.1,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18,marginHorizontal:20}}>
        {title}
      </Text>
    </TouchableOpacity>
    </View>
  );
};

export default Preference;
