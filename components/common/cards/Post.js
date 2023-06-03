//import { View, Text } from 'react-native'
import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

const Post = () => {
    const [imageUri, setImageUri] = useState(null);
  
    const selectImage = async () => {
      try {
        const result = await ImagePicker.launchImageLibraryAsync();
        if (!result.cancelled) {
          setImageUri(result.uri);
        }
      } catch (error) {
        console.log('Error selecting image:', error);
      }
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer} onPress={selectImage}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.buttonImage} />
          ) : (
            <Image source={require('./path/to/default/image.png')} style={styles.buttonImage} />
          )}
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    buttonContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    button: {
      width: 150,
      height: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      marginBottom: 10,
    },
  });
  

export default Post