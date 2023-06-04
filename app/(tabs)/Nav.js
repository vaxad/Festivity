//import {Tabs} from 'expo-router'
import { COLORS, icons, SIZES } from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Create from './Create';
import Posts from './Posts';
import Profile from './Profile';
import { useNavigation } from 'expo-router';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const Nav = ()=>{
    const { user } = useSelector(state => state.auth)
    const navigation=useNavigation();
    
    return(
        <Tab.Navigator
       
        initialRouteName="Posts"
                screenOptions={({route})=>({tabBarIcon:({focused,color,size})=>{
                    color='black';
                    let iconName;
                    let routeName=route.name;
                    switch(routeName){
                        case "Posts":
                            iconName=focused?'home':'home-outline';
                           
                            break;
                        case "Create":
                            iconName=focused?'add-circle':'add-circle-outline';
                            break;
                        case "Profile":
                            iconName=focused?'person':'person-outline';
                            break;
                    }
                   
                       
                      
                    return <Ionicons name={iconName} size={size} color={color}></Ionicons>
                }})}
        >
            <Tab.Screen name="Posts" component={Posts} options={{headerShown: false,tabBarLabelStyle:{display:"none"}}}/>
            <Tab.Screen name="Create" component={Create} options={{headerShown: false, tabBarLabelStyle:{display:"none"}}}/>
            <Tab.Screen name="Profile" component={Profile} options={{headerShown: false, tabBarLabelStyle:{display:"none"}}}/>
        </Tab.Navigator>
    )
}

export default Nav