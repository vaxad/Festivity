import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Input = ({
  label,
  iconName,
  error,
  password,
  multi,
  numLines,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  const height=numLines?numLines*20:20;
  return (
    <View style={{marginBottom: 20}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? COLORS.white
              : isFocused
              ? COLORS.black
              : COLORS.black,
          },
        ]}>
        <Icon
          name={iconName}
          style={{color: COLORS.primary, fontSize: 22, marginRight: 10}}
        />
        <TextInput
          multiline={multi}
          numberOfLines={numLines}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{color: COLORS.primary, flex: 1}}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: COLORS.primary, fontSize: 22}}
          />
        )}
      </View>
      {error && (
        <Text style={{marginTop: 7, color: COLORS.primary, fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.gray,
    left:13,
  },
  inputContainer: {
    alignItems:'center',
    minHeight:55,
    backgroundColor: COLORS.light,
    borderRadius:SIZES.large/0.5,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
});

export default Input;
