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
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      width: 200,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgray',
    },
    buttonImage: {
      width: 150,
      height: 150,
      resizeMode: 'cover',
    },
  });

export default Post