// import { Redirect } from "expo-router"
// import StackLayout from "./Main"

// const StartPage=()=>{
//     return (
//         <StackLayout/>
//         )
// }

// export default StartPage

import { createContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { Provider, useDispatch } from "react-redux";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StackLayout from "./Main";
import store from "../redux/store";

WebBrowser.maybeCompleteAuthSession();
export const context =createContext();
export default function App() {
  
//   const [token, setToken] = useState("");
//   const [userInfo, setUserInfo] = useState(null);

//   const [request, response, promptAsync] = Google.useAuthRequest({
//     androidClientId: "1042722321457-r6q29ikfsr2sit6aom2o5d5gt14e054c.apps.googleusercontent.com",
//     iosClientId: "1042722321457-spvn3jkcgbg7n4te1fjiq061lgu62fds.apps.googleusercontent.com",
//     webClientId: "",
//   });

//   useEffect(() => {
//     handleEffect();
//   }, [response, token]);

//   async function handleEffect() {
//     const user = await getLocalUser();
//     console.log("user", user);
//     if (!user) {
//       if (response?.type === "success") {
//         // setToken(response.authentication.accessToken);
//         getUserInfo(response.authentication.accessToken);
//       }
//     } else {
//       setUserInfo(user);
//       console.log("loaded locally");
//     }
//   }

//   const getLocalUser = async () => {
//     const data = await AsyncStorage.getItem("@user");
//     if (!data) return null;
//     return JSON.parse(data);
//   };

//   const getUserInfo = async (token) => {
//     if (!token) return;
//     try {
//       const response = await fetch(
//         "https://www.googleapis.com/userinfo/v2/me",
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       const user = await response.json();
//       await AsyncStorage.setItem("@user", JSON.stringify(user));
//       setUserInfo(user);
//     } catch (error) {
//       // Add your own error handler here
//     }
//   };

  return (
    
    // <View style={styles.container}>
    //   {!userInfo ? (
    //     <Button
    //       title="Sign in with Google"
    //       disabled={!request}
    //       onPress={() => {
    //         promptAsync();
    //       }}
    //     />
    //   ) : (
      <Provider store={store}>
        <StackLayout/>
        </Provider>
    //   )}
    //   <Button
    //     title="remove local store"
    //     onPress={async () => await AsyncStorage.removeItem("@user")}
    //   />
    // </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
