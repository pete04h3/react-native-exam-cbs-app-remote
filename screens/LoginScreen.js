import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { login, refreshToken, restoreUser } from '../store/actions/UserActions';
import * as SecureStore from 'expo-secure-store';
import { useSelector } from 'react-redux';
import { toggleUserValid } from './../store/actions/UserActions'


// IMAGE COMP
import ImagesExample from './../components/ImageExample'
import InformationIcon from '../components/InfoIcon';
// BUTTONS 
import { TouchableOpacity } from 'react-native-gesture-handler';


const LoginScreen = (props) => {
    
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    
    const dispatch = useDispatch();
    const isValid = useSelector(state => state.user.isValid) // the subscription

    const handleLogin = () => {
        dispatch(login(email, password, isValid));
    }
  
    const acceptTerms = () => {
      dispatch(login(email, password)); // not working
  }
    
  // SECURE STORAGE, USERTOKEN, USER, EXPERIATION & REFRESHTOKEN

    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
          let userToken, user, expiration, refreshTokenString;

          try {
            expiration = new Date(JSON.parse(await SecureStore.getItemAsync('expiration')));
            
            // if expiration.....
            console.log("expiration", expiration);
            console.log("now", new Date());
            if (expiration < new Date()) { // then it is expired
                console.log("refresh token");
                refreshTokenString = await SecureStore.getItemAsync('refreshToken');
                dispatch(refreshToken(refreshTokenString));
            } 
            console.log("no refresh token");

            userToken = await SecureStore.getItemAsync('userToken');
            user = JSON.parse(await SecureStore.getItemAsync('user'));
            
            if (userToken) {
            dispatch(restoreUser(user, userToken));
            }
            
            
            // console.log(userToken);
            // console.log(user);
            // console.log(expiration);
          } catch (e) {
            // Restoring token failed
            console.log("restore token failed");
            console.log(e);
          }
          
  
        };
    
        bootstrapAsync();
      }, []);

      
// RETURN LOGIN VIEW

    return (
    <View style={styles.container}>
        <View style={styles.imgWrap}>
        <ImagesExample />
        </View>
        <View style={styles.headLineWrapper}><Text style={styles.headLine}>Log in</Text></View>

      <View style={styles.wrapper}>

      <View style={styles.wrapperInline}>
          <Text style={styles.placeHolder}>Email</Text>
          <View style={styles.infoIcon}>
          <TextInput placeholder="sije19ab@cbs.student.dk" label="Email" style={styles.textInput} keyboardType="email-address" onChangeText={onChangeEmail} value={email} />
          <InformationIcon />
          </View>
      </View>

          <View style={styles.wrapperInline}>
          <Text style={styles.placeHolder}>Password</Text>
          <TextInput placeholder="********" label="Password" style={styles.textInput} secureTextEntry={true} onChangeText={onChangePassword} value={password} />
          </View>

       

     
    </View>

    <View style={styles.checkboxWrapper}>
          <View style={styles.checkboxContainer}>

        <TouchableOpacity onPress={acceptTerms}>
          <Text style={styles.termsText}>Forgot password?</Text>
        </TouchableOpacity>

        </View>
      </View>

  
    <TouchableOpacity onPress={handleLogin}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Log in</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.accountButton}>
           <Text style={styles.accountText}>Don't have an account?</Text>
           <TouchableOpacity onPress={ () => props.navigation.navigate('SIGNUPOUTER') }>
            <Text style={styles.accountButtonText}>Sign up</Text>
        </TouchableOpacity>
        </View>


    </View>
  );
}

// STYLING

const styles = StyleSheet.create({
  container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: 'white',    

  },

  infoIcon: {
    flexDirection: 'row',
  },

  imgWrap: {
      width: 133,
      marginTop: 40,
      marginBottom: 20,
      
  },

  wrapper: {
      backgroundColor: 'white',
      width: 300,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
          },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderRadius: 5,
      marginBottom: 20,
  },

  wrapperInline: {
      backgroundColor: 'transparent',
      borderColor: '#EEEEEE',
      borderStyle: 'solid',
      borderWidth: 1,
      shadowColor: '#AAAAAA29',
      width: 300,
      height: 70,
  },

  button: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingVertical: 12,
      paddingHorizontal: 4,
      borderRadius: 4,
      elevation: 3,
      width: 300,
      backgroundColor: '#5050A5',
      color: 'snow',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
          },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },

    buttonText: {
      textAlign: 'left',
      justifyContent: 'flex-start',
      padding: 10,
      color: 'white',
      textTransform: 'capitalize',
      fontWeight: 'bold',
      fontSize: 16,
      
      
    },

    accountButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 15,
        paddingVertical: 12,
        

    },

    accountButtonText: {

      color: '#5050A5',
      fontWeight: 'bold',
      marginLeft: 6,

    },

    accountText: {
      color: '#5050A5',

  },

    headLine: {
        flex: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        textAlign: 'left',
        color: '#32305D',
        fontSize: 26,
        fontWeight: 'bold',
        marginRight: 240,
        marginBottom: 20,
        fontFamily: "Teko",
        
    },

    headLineWrapper: {
      justifyContent: 'center',
      alignItems: 'center',

    },

    checkboxContainer: {
      flexDirection: "row",
      margin: 12,
     
    },

    checkboxWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
      
        

    },

    checkbox: {
      marginBottom: 16
    },

    termsLabel: {
      textTransform: 'none',
      color: '#32305D',
      borderStyle: 'solid',
      textDecorationLine: 'none',
      fontSize: 12,
      fontWeight: 'bold',
    },

    termsText: {
      textTransform: 'none',
      color: '#32305D',
      borderStyle: 'solid',
      textDecorationLine: 'none',
      fontSize: 12,
      fontWeight: 'bold',
      marginBottom: 20,
        
    },

    textInput : {
      borderWidth: 1,
      padding: 10,
      width: 298,
      borderColor: 'white',
      borderWidth: 1,
      padding: 10,
     
  },

  errorMsg : {
      color: "red",
      margin: 12,
      marginTop: 1,
  },

  placeHolder : {
      
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 12,
      color: '#32305D',
      textTransform: 'uppercase',
      paddingHorizontal: 12,
      marginTop: 10,

  }

  
});
 

export default LoginScreen;