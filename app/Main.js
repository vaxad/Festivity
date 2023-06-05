//import { Stack } from "expo-router"
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import {COLORS, icons, images, SIZES, FONT} from "../constants"
import { ScreenHeaderBtn } from "../components"
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Nav from "./(tabs)/Nav";
import Login2 from "./login/Login2";
import Menu from './Screens/Menu';
import { useNavigation } from 'expo-router';
import PostClick from './Screens/PostClick';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../redux/action';
import Review from './Screens/Review';
import PersonalInformation from './Screens/PersonalInformation';
import SearchBar from "react-native-dynamic-search-bar";

//const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();
 const Stack=createStackNavigator();
const StackLayout=()=>{
    const dispatch=useDispatch();
    
  const { token } = useSelector(state => state.auth)
    const navigation=useNavigation();
    useEffect(() => {
        dispatch(loadUser(token));
      }, []);
      var { user } = useSelector(state => state.auth)
      
    const [fontsLoaded]=useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })
    const onLayoutRootView=useCallback(async()=>{
        if(fontsLoaded){
            await SplashScreen.hideAsync();
        }
    },[fontsLoaded])
    if(!fontsLoaded){
        return null;
    }
    

    return(
        <Stack.Navigator>
           {!user&&<Stack.Screen
            name="login2"
            component={Login2}
            options={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerShown: false
              }}/>}
            <Stack.Screen
            name="tabs"
            component={Nav}
                options={{
                    headerShown:false,
                    headerStyle: { backgroundColor: COLORS.primary },
                    headerShadowVisible: true,
                    headerLeft: () => null,
                    // headerLeft: () => {
                    //     return(
                    //     <View style={{marginLeft:15}}>
                    //     <ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%" handlePress={()=>{navigation.navigate('login2')}}/>
                    //     </View>
                    //     )
                    // },
                    // headerRight: () => {
                    //     return(
                    //         <View style={{marginRight:20}}>
                    //     <ScreenHeaderBtn iconUrl={images.profile} dimensions="100%" handlePress={()=>{navigation.navigate('Review')}}/>
                    //     </View>
                    //     )
                    // },
                    headerTitle:()=><SearchBar
                    placeholder="Search here"
                    style={{borderRadius:20}}
                    onPress={() => {}}
                    onChangeText={(text) => console.log(text)}
                  />,
          headerTransparent:false,
          headerTitleAlign: 'center',
          headerTitleStyle:{
            fontFamily: FONT.bold,
              fontSize: SIZES.xLarge,
              color: 'black',
              marginTop: 2,
            }
                }}
            />
            <Stack.Screen
            name="menu"
            component={Menu}
            options={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerShown: false
              }}/>
              {/* <Stack.Screen
            name="login2"
            component={Login2}
            options={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerShown: false
              }}/> */}
              <Stack.Screen
            name="postClick"
            component={PostClick}
            options={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerShown: false
              }}/>
              <Stack.Screen
              name="Review"
              component={PersonalInformation}
              options={{
                  gestureEnabled: true,
                  gestureDirection: "horizontal",
                  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                  headerShown: false
                }}/>
        </Stack.Navigator>
    )
}

export default StackLayout