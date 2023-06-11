import { View, Text, SafeAreaView, StyleSheet, Image, useWindowDimensions } from 'react-native';
import React, { useEffect } from 'react';
import styles from '../../styles/common.style';
import { COLORS, SIZES } from '../../constants';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logout, loadUser } from '../../redux/action';
import { useNavigation } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import { TabView, SceneMap } from 'react-native-tab-view';

const ProfilePeople = () => {
  const { token } = useSelector(state => state.auth);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  useEffect(() => {
    dispatch(loadUser(token));
  }, []);

  var { user } = useSelector(state => state.auth);
  if (!user) {
    navigation.navigate('login2');
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <View style={{ marginTop: 90 }} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcomeMessage}>Profile</Text>
          <Image
            source={require('../../assets/images/kemal.jpg')}
            style={{ width: 200, height: 200, borderRadius: 400 / 2, alignSelf: 'center' }}
          />
          <Text style={styles.userName}>{user ? user.name : ''}</Text>

          <View
            style={[
              styles.inputContainer,
              {
                width: 110,
                top: 10,
                borderColor: COLORS.black,
                alignItems: 'center',
              },
            ]}
          >
            <Text>{user ? user.phone : ''}</Text>
          </View>

          <View
            style={[
              styles.inputContainer,
              {
                width: 200,
                top: 22,
                borderColor: COLORS.black,
                alignItems: 'center',
              },
            ]}
          >
            <Text>Mumbai, Maharashtra, India.</Text>
          </View>

          <View
            style={[
              styles.inputContainer,
              {
                width: 340,
                top: 81,
                left: 7,
                borderColor: COLORS.black,
                alignItems: 'center',
              },
            ]}
          >
            {/* Content for additional views */}
          </View>

          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const FirstRoute = () => <View style={{ flex: 1, backgroundColor: '#ff4081' }} />;

const SecondRoute = () => <View style={{ flex: 1, backgroundColor: '#673ab7' }} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default ProfilePeople