import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState, useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import DropShadow from 'react-native-drop-shadow';
import {AuthContext} from '../navigation/AuthProvider';

const Sign = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationMessage, setvalidationMessage] = useState('');

  const {register} = useContext(AuthContext);

  let validateAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      setvalidationMessage('Password Not Match');
    } else {
      setvalidationMessage('');
    }
    setValue(value);
  };

  //const handleClick = async () => {};

  return (
    <ScrollView style={styles.head}>
      <LinearGradient
        colors={['#FF4782', '#FE5D75', '#FE7966']}
        style={styles.linearGradient}>
        <StatusBar backgroundColor="#FF4782" />
        <Text style={styles.buttonText2}>Welcome To,</Text>
        <Text style={styles.buttonText1}>Our Todo App</Text>

        <View>
          <View style={styles.foot}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.sign}>SignUp</Text>
              <View style={styles.circ}>
                <Text style={styles.color1}></Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.main}>
          <View style={styles.CircleShape}>
            <Text>{validationMessage}</Text>
            <Text style={styles.headerText}> SignUp </Text>
            <DropShadow style={styles.shadowProp}>
              <View style={styles.button}>
                <TextInput
                  value={email}
                  onChangeText={email => setEmail(email)}
                  placeholder="Email"
                  style={(styles.text, styles.buttonTextt)}
                />
              </View>
            </DropShadow>
            <DropShadow style={styles.shadowProp}>
              <View style={styles.button}>
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={value =>
                    validateAndSet(value, confirmPassword, setPassword)
                  }
                  secureTextEntry={true}
                  style={(styles.text, styles.buttonTextt)}
                />
              </View>
            </DropShadow>
            <DropShadow style={styles.shadowProp}>
              <View style={styles.button}>
                <TextInput
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChangeText={value =>
                    validateAndSet(value, password, setConfirmPassword)
                  }
                  secureTextEntry={true}
                  style={(styles.text, styles.buttonTextt)}
                />
              </View>
            </DropShadow>
            <DropShadow style={styles.shadowProp}></DropShadow>

            <Text></Text>
            <TouchableOpacity
              style={styles.appButtonContainer}
              onPress={() => register(email, password)}>
              <Text style={styles.appButtonText}>SignUp Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Sign;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    padding: '15%',
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
    marginRight: '10%',
    paddingTop: 10,
  },
  CircleShape: {
    width: 450,
    alignItems: 'center',
    justifyContent: 'center',
    height: 450,
    borderRadius: 500 / 2,
    backgroundColor: '#fff',
  },
  main: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '50%',
  },
  TextInput: {
    borderWidth: 2,
    margin: '5%',
    width: 200,
    height: 100,
    elevation: 3,
    marginLeft: '10%',
    padding: 50,

    // shadowColor: 'Red',
    shadowOffset: {width: 10, height: 5},
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'yellow',
    color: 'white',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight: '8%',
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
  // bottom: {
  //   marginBottom: '20%',
  // },
  foot: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    margin: 15,

    // marginTop: '20%',
    // marginBottom: '20%',
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
    width: 250,
    marginLeft: '18%',
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
  },
  text: {
    fontSize: 15,
    padding: 15,
    fontWeight: 'bold',
  },
  buttonText2: {
    fontSize: 33,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'bold',
    backgroundColor: 'transparent',
    marginTop: 1,
  },
  text4: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  text5: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  color1: {
    backgroundColor: 'yellow',
    width: 8,
    height: 8,
    borderRadius: 12,
    marginLeft: '30%',
  },
  circ: {
    display: 'flex',
    justifyContent: 'center',
  },
});
