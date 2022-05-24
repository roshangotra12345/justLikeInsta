import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
//import {GoogleSignin} from '@react-native-google-signin/google-signin';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            if (email && password) {
              await auth().signInWithEmailAndPassword(email, password);
            }
          } catch (e) {
            console.log(e);
            alert(e);
          }
        },
        // googleLogin: async () => {
        //   try {
        //     const {idToken} = await GoogleSignin.signIn();

        //     // Create a Google credential with the token
        //     const googleCredential =
        //       auth.GoogleAuthProvider.credential(idToken);

        //     // Sign-in the user with the credential
        //     return auth().signInWithCredential(googleCredential);
        //   } catch (error) {
        //     alert(error);
        //   }
        // },

        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
            alert(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
            alert(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

const styles = StyleSheet.create({});
