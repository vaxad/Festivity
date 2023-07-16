import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {COLORS, SIZES} from '../constants';
const Preference = ({title, onPress = () => {},disabled,selected}) => {
  let color=COLORS.primary;
  //.log(title+selected);
  if(selected!==title){
     color=COLORS.dark;
  }else{
    color='#FF3732';
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
        paddingHorizontal:5,
        marginHorizontal:10, 
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:color,
        borderWidth:0.5,
    borderRadius:SIZES.large/0.1,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
      <Text style={{color: color, fontWeight: 'bold', fontSize: 18, marginHorizontal:10}}>{title}</Text>

      {/* <Text style={{marginRight:10, color:COLORS.dark, fontSize:15}}> X</Text> */}
      </View>
    </TouchableOpacity>
    </View>
  );
};

export default Preference;
