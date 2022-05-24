import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  Dimensions,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import DropShadow from 'react-native-drop-shadow';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Fontisto';
import React, {useState, useEffect, useContext} from 'react';
import auth from '@react-native-firebase/auth';
//import {googleLogin} from '@react-native-google-signin/google-signin';
//import { useContext } from 'react/cjs/react.production.min';
import {AuthContext} from '../navigation/AuthProvider';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first, setFirst] = useState(true);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const {login, googleLogin} = useContext(AuthContext);

  // const onGoogleButtonPress = async () => {
  //   const {idToken} = await GoogleSignin.signIn();
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  //   return auth().signInWithCredential(googleCredential);
  // };

  return (
    <ScrollView>
      <LinearGradient
        colors={['#FF4782', '#FE5D75', '#FE7966']}
        style={styles.linearGradient}>
        <View style={styles.head}>
          <StatusBar backgroundColor="#FF4782" />
          <Text style={styles.buttonText2}>Welcome To,</Text>
          <Text style={styles.buttonText1}>Our Todo App</Text>

          <View>
            <View style={styles.foot}>
              <TouchableOpacity>
                <Text style={styles.login}>Login</Text>
                <Text style={styles.color1}></Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Sign')}>
                <Text style={styles.sign}>SignUp</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.main}>
            <View style={styles.CircleShape}>
              <View>
                <View style={styles.textlogin}>
                  <Text style={styles.headerText1}>Lo</Text>
                  <Text style={styles.headerText}>gin</Text>
                </View>
              </View>
              <DropShadow style={styles.shadowProp}>
                <View style={styles.button}>
                  <View style={styles.logo}>
                    <TextInput
                      placeholder="Email"
                      value={email}
                      onChangeText={email => setEmail(email)}
                      style={(styles.text, styles.buttonTextt)}
                    />
                    <Icon1 name="email" size={30} color="black" />
                  </View>
                </View>
              </DropShadow>
              <DropShadow style={styles.shadowProp}>
                <View style={styles.button}>
                  <View style={styles.logo}>
                    <TextInput
                      value={password}
                      placeholder="Password"
                      onChangeText={password => setPassword(password)}
                      secureTextEntry={first ? true : false}
                      style={(styles.text, styles.buttonTextt)}
                    />
                    <TouchableOpacity onPress={() => setFirst(!first)}>
                      {!first && password ? (
                        <Icon name="eye" size={30} color="black" />
                      ) : (
                        <Icon name="eye-slash" size={30} color="black" />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
              </DropShadow>

              <View style={styles.forget}>
                <TouchableOpacity>
                  <Text style={styles.text7}>forgot Password </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ResetPassword')}>
                  <Text style={styles.text8}>click here</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.appButtonContainer}
                onPress={() => login(email, password)}>
                <Text style={styles.appButtonText}>Login Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.text4}>Already have an account Signup?</Text>
            <View style={styles.fontbtn}>
              <Text style={styles.text5}>Also login with</Text>

              {/* <TouchableOpacity style={styles.btn1}>
                <Image
                  style={styles.tinyLog}
                  source={require('../assets/1.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => googleLogin()}>
                <Image
                  style={styles.tinyLogo}
                  source={require('../assets/google.png')}
                />
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: '5%',
    paddingRight: '5%',
    padding: '12%',
  },
  logo: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 5,
    flexDirection: 'row',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 10,
    fontFamily: 'Gill Sans',
    marginTop: 20,
    margin: 5,
    color: '#ffffff',
    padding: 20,
  },
  buttonText1: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'bold',
    borderRadius: 100,
    color: 'yellow',
    backgroundColor: 'transparent',
  },

  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginRight: '40%',

    // paddingTop: 10,
  },
  CircleShape: {
    minWidth: 420,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 420,
    borderRadius: 420 / 2,
    backgroundColor: '#fff',
  },
  main: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '35%',
    marginBottom: '3%',
    marginTop: '-3%',
  },
  TextInput: {
    borderWidth: 2,
    margin: 15,
    width: 200,
    height: 100,
    elevation: 3,
    marginLeft: '30%',
    marginHorizontal: '40%',
    padding: 40,

    // shadowColor: 'Red',
    shadowOffset: {width: 10, height: 5},
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'yellow',
    color: 'black',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight: '18%',
  },
  appButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    // fontWeight: 'bold',
    // fontStyle: 'bold',
    // fontFamily: 'bold',
    alignSelf: 'center',
  },
  bottom: {
    marginBottom: '10%',
    fontSize: 10,
  },
  foot: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    margin: 5,
    marginBottom: 40,
  },
  login: {
    marginRight: 30,
    fontSize: 20,
    marginTop: 15,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'bold',
  },
  sign: {
    fontSize: 20,
    marginTop: 15,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'bold',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    width: 300,
    marginLeft: '15%',
    color: 'black',
  },
  button: {
    backgroundColor: 'white',
    color: 'black',
    height: 60,
    padding: 5,
    borderRadius: 24,
    marginTop: 20,
    fontSize: 15,
  },
  buttonTextt: {
    color: 'black',
    fontSize: 18,
    width: 200,
  },
  text: {
    fontSize: 15,
    padding: 15,
    fontWeight: 'bold',
    width: 300,
  },
  buttonText2: {
    fontSize: 33,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'bold',
    backgroundColor: 'transparent',
    marginTop: 5,
  },
  textlogin: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text4: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  text5: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: '-1%',
    marginTop: '1%',
  },
  fontbtn: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    margin: 5,
  },
  btn1: {
    marginRight: '5%',
    marginLeft: '5%',
    borderRadius: 100,
    height: 40,
  },
  login1: {
    backgroundColor: 'yellow',
    borderRadius: 100,
    width: 100,
  },
  headerText1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',

    backgroundColor: 'yellow',
    borderRadius: 150,
    paddingLeft: 10,
  },
  color1: {
    backgroundColor: 'yellow',
    width: 8,
    height: 8,
    borderRadius: 12,
    marginLeft: '20%',
  },
  forget: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    marginLeft: '20%',
  },
  text7: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text8: {
    fontSize: 20,
    color: 'yellow',
    fontWeight: 'bold',
  },
  tinyLogo: {
    height: 40,
    width: 40,
  },
  tinyLog: {
    height: 30,
    width: 30,
    marginTop: 2,
  },
  head: {
    minHeight: 300,
  },
});
